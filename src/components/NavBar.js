import React from 'react'
import { AppBar, Toolbar, Typography, Badge, makeStyles, IconButton, Divider, Box, Paper, Hidden, Fab, Button } from '@material-ui/core'
import bdoLogo from '../img/bdoLogo2.png'
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { blue } from '@material-ui/core/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faTools, faSearch, faShieldAlt, faClipboardList, faEnvelopeOpenText, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';

const useStyles = makeStyles(theme => ({

    navTitle: {
        flexGrow: 1,
        marginLeft:10,
        // maxWidth:200
      },
      toolbar:{
        // background: 'linear-gradient(90deg, #054594 30%, #043673 90%)',
        background: 'linear-gradient(90deg, #043673  15%, #0072ce 50%)',
        //  background:"#fff",

        // background:"#054594",
        // background:"#f2f2f2",
        marginLeft:0,
        paddingTop:5,
        paddingLeft:5,
        paddingRight:8,
        paddingBottom:5,
        // borderRadius:4,
        color:theme.palette.primary.contrastText,
        //  minWidth:900
      },
      icon:{

        // color:blue[800]
        color:theme.palette.secondary.main
      },
      appBar: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        background: "#fff",
        zIndex: theme.zIndex.drawer + 1,
      },
}));
const NavBar = (props) => {
    const classes = useStyles();
    return (
      <div>
        <AppBar
          position="fixed"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Paper style={{padding:3, marginRight:7,marginLeft:0}} elevation={0}>
                  <img src={bdoLogo} style={{height:50,borderRadius:4}}/>
            </Paper>
           
             {/* <img src={bdoLogo} style={{ margin: 2, height: 50 }} /> */}
            
            

            <Hidden smDown>
              <Box display="flex" flexWrap="wrap" >
                <Typography component="h4" variant="h5"  className={classes.navTitle}>
                  Credit Card Utility Payment System
                </Typography>
               
              </Box>
              <Box flexGrow={1}>

              </Box>
            </Hidden>
            <Hidden mdUp>
              <Box display="flex" flexGrow={1}>
                <Typography component="h4" variant="h6"  className={classes.navTitle}>
                Credit Card Utility Payment System
                </Typography>
              </Box>
            </Hidden>
            {/* <Hidden xsDown> */}
              {/* {props.currentLocation.pathname && props.currentLocation.pathname!="/" &&
                    <MenuBar/>
                  
            } */}
              {/* <MenuBar /> */}
              {/* <Box mr={1} p={0}>
                <Divider orientation="vertical" style={{ minHeight: 30 }} />
              </Box> */}
            {/* </Hidden> */}
            {/* <Hidden smUp>
                  <IconButton color="secondary" component={Link} to="/mobileMenu">
                    <MenuIcon/>
                  </IconButton>
            </Hidden> */}
            <Box>
              <IconButton
                // className={classes.icon}
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                // className={classes.icon}
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
      </div>
    );
}

export default NavBar
