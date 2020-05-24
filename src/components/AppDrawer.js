import React from 'react'
import { Drawer,    List,    ListItem,    ListItemIcon,    ListItemText,    makeStyles, Box, Typography, Divider, } from "@material-ui/core";
import DrawerHeader from './DrawerHeader';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
const useStyles = makeStyles((theme) => ({
    list: {
        width: 'auto',
        marginRight:10,
        color:blue[700],
        borderBottom:1
        
      },
      buttonRoot: {
        // fontSize: 11,
        color: blue[700],
        padding:10,
        maxHeight:30,
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
        top:71,
        left:102
      }
}));

const AppDrawer = (props) => {
    const classes = useStyles();
    return (
      <div onClick={() => props.setOpenDrawer(false, [])}>
 <Drawer
        anchor="top"
        open={props.openDrawer}
        onClose={() => props.setOpenDrawer(false, [])}
        classes={{
          paperAnchorTop:classes.drawerTop
        }}
        variant="persistent"
      >
        <Divider/>
        <DrawerHeader title={props.mainMenu.displayText} icon={props.mainMenu.icon}/>
        <Divider/>
        <Box display="flex"   mt={1} mb={3} ml={1} maxHeight={300} maxWidth={350} flexDirection="column" flexWrap="wrap"
        >
          
                {props.mainMenu.subMenu &&
                  props.mainMenu.subMenu.map((item, index) => (
                    <Box key={index}   mr={1}  > 
                      <ListItem button component={Link} to={item.url} dense
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
                          <RadioButtonCheckedIcon fontSize="small"/>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                           
                              item.displayText
                           
                          }
                        />
                      </ListItem>
                     
                    </Box>
                    
                  ))}
             
        </Box>
      </Drawer>
      </div>
     
    );
}

export default AppDrawer
