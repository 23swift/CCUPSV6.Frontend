import React from 'react'
import { Typography, makeStyles, Box, Avatar, AppBar, Toolbar, IconButton, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    MuiAvatarRoot: {
        width: 40,
        height: 40,
        // background: "#043673",
        background:theme.palette.secondary.main,
        // background: "-moz-linear-gradient(left, #1e5799 0%, #2989d8 50%, #7db9e8 100%)", /* FF3.6-15 */
        // background: "-webkit-linear-gradient(left, #1e5799 0%,#2989d8 50%,#7db9e8 100%)" ,/* Chrome10-25,Safari5.1-6 */
        // background: "linear-gradient(135deg, rgba(246,230,180,1) 0%,rgba(237,144,23,1) 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */  
        marginTop: 5,
        marginBottom:5,
        pdding:5,
        // paddingLeft:1,
        // marginTop:-50,
        boxShadow:
          "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      },
    toolbar:{
      // background: 'linear-gradient(90deg, #054594 30%, #043673 90%)'
      //  background:"#efefef",
      background:"#fff",
         paddingLeft:13,
         paddingTop:0,
      //background:"inherit",
      
      color:theme.palette.primary.main
      // color:theme.palette.secondary.main
    },
}));

const DrawerHeader = (props) => {
    
        const classes = useStyles();
        return (
          <div>
            <AppBar position="static" elevation={0}>
              <Toolbar className={classes.toolbar} variant="dense">
                <Box display="flex"  ml={0} flexGrow={1}>
                  <Box mr={1}>
                    {props.icon && (
                      <Avatar className={classes.MuiAvatarRoot}>
                        <FontAwesomeIcon icon={props.icon} color="primary" />
                      </Avatar>
                    )}
                  </Box>
                  <Box
                   
                  >
                    
                      <Typography
                        component="h2"
                        variant="h6"
                        style={{marginTop:16}}
                      >
                        {props.title}
                      </Typography>
                   
                  </Box>
                </Box>
                {props.closeButton}
              </Toolbar>
            </AppBar>
            {/* <Divider/> */}
          </div>
        );
    
}

export default DrawerHeader
