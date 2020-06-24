import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { Drawer,    List,    ListItem,    ListItemIcon,    ListItemText,    makeStyles, Box, Typography, Divider, FormControl, InputLabel, Input, Backdrop, Card, CardHeader, CardContent, Dialog, DialogTitle, DialogContent, RadioGroup, FormControlLabel, Radio, DialogActions, Button, } from "@material-ui/core";
import DrawerHeader from './DrawerHeader';
import { Link, useHistory } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    // color: '#fff',
  },
}));

const InstitutionSelection = (props) => {
    const classes = useStyles();

const [institutions, setInstitutions] = useState();
const { onClose,
  //  value: valueProp, 
  open, ...other } = props;
  const [value, setValue] = useState(3);

let history = useHistory();
    useEffect(() => {
      fetch('api/institutions').then(respose=>respose.json())
      .then(data=>{  setInstitutions(data);   });

      return () => {
        // cleanup
      }
    }, [])

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  const handleListItemClick = (value) => {
    setValue(value);
    // onClose(value);
    // localStorage.clear();
    // localStorage.setItem('selectedInst', JSON.stringify(value));
    // history.push('/applicationForm');
  };
  
  const radioGroupRef = React.useRef(null);
  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
     onClose();
    // onClose(value);
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    
    setValue(event.target.value);
  };

 
    return (
      
           <div >
 
      <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Please Select Institution</DialogTitle>
      <DialogContent dividers>
      <Box display="flex"     minWidth={250} flexDirection="column" flexWrap="wrap"
        >
          
                {institutions &&
                  institutions.map((item, index) => (
                    <Box key={index}   > 
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
                        { value.id===item.id ? <CheckCircleOutlineIcon color="inherit"/>:<RadioButtonUncheckedIcon/>}
                          
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
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="secondary" variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleOk} color="secondary" variant="contained" disableElevation style={{minWidth:100}}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
      </div>
    )
}

export default InstitutionSelection

InstitutionSelection.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  //  value: PropTypes.number.isRequired,
  };