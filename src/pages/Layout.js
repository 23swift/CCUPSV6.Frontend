import React from 'react'
import { Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import NavBar from '../components/NavBar';
import { makeStyles, Drawer, Toolbar, List, Divider } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuBar from '../components/MenuBar';
import { amber, grey, blue } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    main:{
        marginTop:69,
        // marginLeft:102
    },
    drawer:{
       
    },
    drawerPaper: {
        // background:blue[700],
        // background:"linear-gradient(60deg, #ffa726, #f7af19)",
        // color:"#e6e6e6",
         color:theme.palette.secondary.main
      },
}));

const drawerWidth = 240;
const Layout = (props) => {
    const classes = useStyles();
   
    return (
        <div style={{minWidth:800}}>
            
            <Router>
            {/* <NavBar /> */}
            {/* <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar style={{marginBottom:20}} />
       
        <div >
         <MenuBar/>
        </div>
      </Drawer> */}
                <main className={classes.main}>
                
                    {props.children}
                
                        
                    
                </main>
            </Router>
            
        </div>
    )
}

export default Layout
