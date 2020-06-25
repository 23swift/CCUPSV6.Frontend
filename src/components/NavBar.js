import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Badge, makeStyles, IconButton, Divider, Box, Paper, Hidden, Fab, Button, Drawer, ListItemIcon, ListItem, ListItemText } from '@material-ui/core'
import bdoLogo from '../img/bdoLogo2.png'
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { blue } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faTools, faSearch, faShieldAlt, faClipboardList, faEnvelopeOpenText, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import {mainMenuList,MenuManager} from '../components/MenuManager';
import DrawerHeader from './DrawerHeader';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
const useStyles = makeStyles(theme => ({

    navTitle: {
        flexGrow: 1,
        marginLeft:10,
        // maxWidth:200
      },
      toolbar:{
        // background: 'linear-gradient(90deg, #054594 30%, #043673 90%)',
        // background: 'linear-gradient(90deg, #043673  15%, #0072ce 50%)',
        //  background:"#fff",

        // background:"#054594",
        // background:"#f2f2f2",
        marginLeft:0,
        paddingTop:2,
        paddingLeft:5,
        paddingRight:8,
        paddingBottom:1,
        // borderRadius:4,
        // color:theme.palette.primary.main,
        //  minWidth:900
        zIndex: theme.zIndex.drawer + 1,
      },
      icon:{

        // color:blue[800]
        color:theme.palette.secondary.main
      },
      drawer:{
        top:100,
      },
      appBar: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        background: "#fff",
        zIndex: theme.zIndex.drawer + 1,
        color:theme.palette.common.black
      },
      list: {
        width: 'auto',
        marginRight:10,
        color:blue[700],
        borderBottom:1
        
      },
      buttonRoot: {
        // fontSize: 11,
        // color: blue[700],
        color:theme.palette.primary.main,
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
        // color: blue[700]
      },
      drawerTop:{
        top:5,
        // left:102
      }
}));
const NavBar = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState({open:false,menu:[]});
    const toggleDrawer = (isOpen,mainMenuText)  => {
    
        const menuList=MenuManager(mainMenuText);
        setOpenDrawer({open:isOpen,menu:menuList});
        // setState({ ...state, [anchor]: open });
        
        
      };
    return (
      <div>
        <AppBar
          position="fixed"
          elevation={2}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
          <Hidden smDown>
             <Paper style={{padding:3, marginRight:7,marginLeft:10}} elevation={0}>
                  <img src={bdoLogo} style={{height:50,borderRadius:4}}/>
            </Paper>
          </Hidden>
          <Hidden mdUp>
             <Paper style={{padding:1, marginRight:5,marginLeft:8}} elevation={0}>
                  <img src={bdoLogo} style={{height:40,borderRadius:4}}/>
            </Paper>
          </Hidden>
           
             {/* <img src={bdoLogo} style={{ margin: 2, height: 50 }} /> */}
            
            

            <Hidden smDown>
              <Box display="flex" flexWrap="wrap" color="text.secondary"  >
                <Typography variant="caption"  >
                  CREDIT CARD UTILITY PAYMENT SYSTEM
                </Typography>
               
              </Box>
              <Box flexGrow={1}>

              </Box>
            </Hidden>
            <Hidden mdUp>
              <Box display="flex" flexGrow={1}>
                <Typography variant="body1"  className={classes.navTitle}>
                Credit Card Utility Payment System
                </Typography>
              </Box>
            </Hidden>
            <Hidden smDown>
             
              <MenuBar toggleDrawer={toggleDrawer} />
              {/* <Box mr={1} p={0}>
                <Divider orientation="vertical" style={{ minHeight: 30 }} />
              </Box> */}
            </Hidden>
            <Hidden mdUp>
                  <IconButton color="secondary" component={Link} to="/mobileMenu">
                    <MenuIcon/>
                  </IconButton>
            </Hidden>
            <Box>
              <IconButton  onClick={() => toggleDrawer(true, 'transaction')}
                className={classes.icon}
                color="inherit"
              >
                <Badge badgeContent={4} color="error" >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                className={classes.icon}
                color="inherit"
              >
                <PersonIcon />
              </IconButton>
            </Box>
          </Toolbar>
          <Box mt={0}>
            <Divider variant="fullWidth" />
          </Box>
        </AppBar>

        <Drawer
        className={classes.drawer}
        anchor="top"
        variant="persistent"
        open={openDrawer.open}
        onClose={() =>setOpenDrawer(false, [])}
       classes={ {
          paperAnchorTop:classes.drawerTop
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer} onClick={()=>setOpenDrawer({...openDrawer,open:false})} >
        {/* <Divider/> */}
        <DrawerHeader title={openDrawer.menu.displayText} icon={openDrawer.menu.icon}/>
        <Divider/>
        <Box display="flex"   mt={1} mb={3} ml={1} maxHeight={300} maxWidth={350} flexDirection="column" flexWrap="wrap"
        >
          
                {openDrawer.menu.subMenu &&
                  openDrawer.menu.subMenu.map((item, index) => (
                    <Box key={index}   mr={1}  > 
                      <ListItem button 
                      component={Link} 
                      to={item.url} 
                      dense
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
                           <Typography variant="subtitle2">
                             { item.displayText}
                           </Typography>
                             
                           
                          }
                        />
                      </ListItem>
                     
                    </Box>
                    
                  ))}
             
        </Box>
        </div>
      </Drawer>
      </div>
    );
}

export default NavBar
