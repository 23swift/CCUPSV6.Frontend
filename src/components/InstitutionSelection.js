import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { Drawer,    List,    ListItem,    ListItemIcon,    ListItemText,    makeStyles, Box, Typography, Divider, FormControl, InputLabel, Input, } from "@material-ui/core";
import DrawerHeader from './DrawerHeader';
import { Link, useHistory } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const useStyles = makeStyles((theme)=>({
  list: {
    width: 'auto',
    marginRight:10,
    // color:blue[700],
    borderBottom:1
    
  },
  buttonRoot: {
    // fontSize: 11,
    color: blue[700],
    padding:10,
    maxHeight:40,
    '&:hover, &:focus': {
    background: blue[500],
    borderRadius: 3,
    color: '#fff',
    
    '&:before': {
      background: '#8a4baf',
      // transform: 'scale(1)',
    },
},

  },
  label: {
    textTransform: 'capitalize',
    
  },
  ListItemIconRoot:{
    minWidth:28,
    color:'inherit'
  },
  drawerTop:{
    // top:300,
    marginTop:71,
    // left:102
  },
  drawerpaper:{
    top:1
  }
}));


// const institutions=[{id:1,displayText:"SMART"},{id:2,displayText:"MERALCO"},{id:3,displayText:"PLDT"}

// ]




const InstitutionSelection = (props) => {
    const classes = useStyles();
  const { onClose, selectedValue, open } = props;
const [selectedIcon, setSelectedIcon] = useState(false);
const [institutions, setInstitutions] = useState();
let history = useHistory();
    useEffect(() => {
      fetch('api/institutions').then(respose=>respose.json())
      .then(data=>{  setInstitutions(data);   });

      return () => {
        // cleanup
      }
    }, [])

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
    localStorage.clear();
    localStorage.setItem('selectedInst', JSON.stringify(value));
    history.push('/applicationForm');
  };

 
    return (
      
           <div onClick={handleClose}>
 <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        classes={{
          // paperAnchorTop:classes.drawerTop,
          paperAnchorRight:classes.drawerTop,
          paper:classes.drawerpaper
        }}
        variant="persistent"
      >
        <Divider/>
        <DrawerHeader title="Please Select Institution" 
        // icon={props.mainMenu.icon}
        />
        <Divider/>
        <Box display="flex"   mt={1} mb={3} ml={1}  minWidth={250} flexDirection="column" flexWrap="wrap"
        >
          
                {institutions &&
                  institutions.map((item, index) => (
                    <Box key={index}   mr={1}  > 
                      <ListItem button    onClick={()=>handleListItemClick(item)}
                      //  style={{maxWidth:300}}
                      classes={{
                        root: classes.buttonRoot, // class name, e.g. `classes-nesting-root-x`
                       
                      }}
                      >
                        <ListItemIcon
                          classes={{
                            root: classes.ListItemIconRoot, 
                           
                          }}
                        >
                          <RadioButtonCheckedIcon color="inherit"/>
                          
                        </ListItemIcon>
                        <ListItemText
                          primary={
                          
                             item.name
                          
                              
                           
                          }
                        />
                       
                       
                      </ListItem>
                      
                     
                      </Box>
                    
                  ))}
              <ListItem  >
                           
            </ListItem>
        </Box>
      </Drawer>
      </div>
    )
}

export default InstitutionSelection

InstitutionSelection.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };