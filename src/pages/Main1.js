import React, { useState } from "react";
import StorageIcon from "@material-ui/icons/Storage";
import BuildIcon from "@material-ui/icons/Build";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faTools,
  faShieldAlt,
  faSearch,
  faColumns,
  faClipboardList,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Typography,
  Container,
  makeStyles,
  CssBaseline,
  Grid,
  Paper,
  Button,
  Box,
  Avatar,
  AppBar,
  Badge,
  ButtonBase,
  Divider,
  createMuiTheme,
  ThemeProvider,
  Hidden,
  
} from "@material-ui/core";
import bdoLogo from '../img/bdoLogo2.png'
import payBillsImg from '../img/payBills.png'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Toolbar from "@material-ui/core/Toolbar";

import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import { amber, blue } from "@material-ui/core/colors";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

import DrawerHeader from "../components/PageHeader";
import AppDrawer from "../components/AppDrawer";
import {MenuManager,mainMenuList} from '../components/MenuManager';
import MenuCard from "../components/MenuCard";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 255,
    height: 310,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  MuiAvatarRoot: {
    width: 110,
    height: 110,
    
    background:
      "-moz-linear-gradient(-45deg, rgba(255,214,94,1) 0%, rgba(254,191,4,1) 100%)" /* FF3.6-15 */,
    background:
      "-webkit-linear-gradient(-45deg, rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%)" /* Chrome10-25,Safari5.1-6 */,
    background:
      "linear-gradient(135deg, rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%)",
    margin: 20,
    // marginTop:-50,
    boxShadow:
      "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  media: {
    height: 140,
  },
  title: {
    color: "#fff",
    background: 'linear-gradient(90deg, #054594  10%, #0072ce 80%)',
    top:125,
    padding:25,
    minWidth:600
  },

  cardItem: {
    maxWidth: 255,
    height: 300,
    "&:hover": {
      cursor: "pointer",
      boxShadow:
        "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
    },
  },
  subtitile: {
    color: blue[900],
  },
  list: {
    width: 300,
  },
  main: {
    //  paddingTop:10,
    // margin: 10,
    marginTop:120,
    minWidth: 400,

  },
  focusHighlight:{
    backgroundColor:"#fff"
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    // backgroundColor: theme.palette.secondary.main,
    // backgroundColor: blue[700],
    color:theme.palette.primary.main,
    backgroundColor:"#efefef"
  },
}));
const customTheme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiCardActionArea:{
        focusHighlight:{
          backgroundColor:"#fff"
        }
      }
    },
  });
const Main = () => {
  const classes = useStyles();
  const [cardElev, setCardElev] = useState(3);
  const [openDrawer, setOpenDrawer] = useState({open:false,menu:[]});
 
  

 
  return (
    <div className={classes.main}>
      <Box display="flex" flexDirection="column" mb={3}>
        <Box 
          className={classes.title}
        >
          <Hidden mdDown>
            <Typography component="h4" variant="h5" >
                        What is the latest version of Credit Card Utility Payment System can
                        do for you?
              </Typography>

          </Hidden>
          <Hidden lgUp>
            <Typography component="h5" variant="h6" color="inherit">
                        What is the latest version of Credit Card Utility Payment System can
                        do for you?
              </Typography>

          </Hidden>
          
         
        </Box>
      </Box>

      <Container component="main" maxWidth="lg" style={{ marginTop: 0 }}>
        <CssBaseline />
        <div>
          {/* <ThemeProvider theme={customTheme}> */}
          <Grid item xs={12} container spacing={1} >
          
            <Box display="flex" >
              <Box p={1}>
                <img src={payBillsImg} style={{ margin: 4 }} />
              </Box>
              <Box
                p={2}
                borderRadius={4}
                
              >
                <Typography color="inherit" variant="subtitle2" component="p">
                  With the development of CCUPS, the users are able to generate
                  the files and reports required by utility companies (e.g.
                  enrollment/dis-enrollment file and return billing reports and
                  files). Inquiry module enables contact center to answer
                  auto-charge related inquiries of the cardholders. Moreover, it
                  automates the creation of merch batch file, which is necessary
                  to Cadencie, in order to post the auto-charge transactions of
                  BDO cardholders.
                </Typography>
              </Box>
            </Box>
            {/* <img src={payBillsImg} style={{ margin: 4 }} /> */}
            <AppBar position="fixed" className={classes.appBar} elevation={0}>
              <Grid
                // xs={12}
                container
                style={{
                 
                  padding:10
                }}
                justify="center"
              >
                <Typography variant="caption">
                  BDO Unibank, Inc. © 2020. All Rights Reserved
                </Typography>
                
              </Grid>
            </AppBar>
          </Grid>
         
        </div>
      </Container>

      {/* <--Drawer Portion--!> */}
      
    </div>
  );
};

export default Main;
