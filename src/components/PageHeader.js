import React from 'react'
import { Typography, makeStyles, Box, Avatar, AppBar, Toolbar, IconButton, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { blue, amber, grey } from '@material-ui/core/colors';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  
    toolbar:{
       
       backgroundColor: "#fff",
       
      // backgroundColor:theme.palette.primary.main,
      //  background:"#0072ce",
        // paddingLeft:12,
        paddingLeft:10,
        paddingRight:10,
      //background:"inherit",
       color:theme.palette.primary.main
      // color:"#054594"
      // color:grey[100]
    },
    root: {
      flexGrow: 1,
    },
    title: {
      // flexGrow: 1,
      // background:theme.palette.primary.main,
      // background: 'linear-gradient(90deg, #054594  10%, #0072ce 90%)',
      // color:theme.palette.primary.main,
      paddingTop:2,
      paddingBottom:2,
      paddingLeft:7,
      paddingRight:7,
      borderRadius:4,
      marginRight:5,
      //  color:"#fff"
    },
  subTitle:{
    marginTop: 10,
    // color:amber[800]
  },
  MuiAvatarRoot: {
    width: 40,
    height: 40,
  
    // background:theme.palette.secondary.main,
    // background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    background:"#FBC02D",
    marginTop: 5,
    marginBottom:5,
    
    pdding:5,
     // background: "-moz-linear-gradient(left, #1e5799 0%, #2989d8 50%, #7db9e8 100%)", /* FF3.6-15 */
        // background: "-webkit-linear-gradient(left, #1e5799 0%,#2989d8 50%,#7db9e8 100%)" ,/* Chrome10-25,Safari5.1-6 */
        // background: "linear-gradient(135deg, rgba(246,230,180,1) 0%,rgba(237,144,23,1) 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */  
    boxShadow:
      "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
}));
const PageHeader = (props) => {
    const classes = useStyles();
    return (
      <div>
        <AppBar position="sticky" elevation={0} style={{ padding: 0 }}>
          <Toolbar className={classes.toolbar} variant="dense" >
          <Box color="warning.main">
                    {props.returnUrl ?   <IconButton size="small" color="inherit" component={Link} to={props.returnUrl}>
                       <ArrowBackIosIcon fontSize="small"/>
                    </IconButton>:

                                
                        props.icon && (
                          <Avatar className={classes.MuiAvatarRoot}>
                            <FontAwesomeIcon icon={props.icon} />
                          </Avatar>
                        )
                    }
                  
                   
                  </Box>
            <Box display="flex" flexGrow={1} >
              <Box className={classes.title}>
                <Typography  variant="h5" color="inherit">
                  {props.title}
                </Typography>
              </Box>

              <Typography
                // component="h3"
                // color="inherit"
                variant="subtitle2"
                color="textSecondary"
                className={classes.subTitle}
               
              >
                {props.subTitle}
              </Typography>
            </Box>
        <Box color="inherit">
          {props.tools}
        </Box>
            

            {/* </Box> */}
          </Toolbar>
        </AppBar>
        <Box mb={2}  >
          <Divider />
        </Box>
        {/* <Divider/> */}
      </div>
    );
}

export default PageHeader
