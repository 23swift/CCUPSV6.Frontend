import React from "react";
import { Typography, makeStyles, Box, Avatar, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  MuiAvatarRoot: {
    width: 50,
    height: 50,
    background: "#043673",
    margin: 5,
    // marginTop:-50,
    boxShadow:
      "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  toolbar:{
    // background: 'linear-gradient(90deg, #054594 30%, #043673 90%)'
     background:"#fff",

    //background:"inherit",
    
    color:"#054594"
  },
}));
const Transactions = () => {
  const classes = useStyles();
  return (
    <AppBar  position="static" elevation={0} >
      <Toolbar className={classes.toolbar}>
        <Box display="flex" flexGrow={1}>
          <Box>
            <Avatar className={classes.MuiAvatarRoot}>
              <FontAwesomeIcon icon={faDatabase} color="primary" />
            </Avatar>
          </Box>
          <Box>
            <Typography
              component="h2"
              variant="h6"
              style={{ color: "#054594", marginTop: 26 }}
            >
              Transactions
            </Typography>
          </Box>
        </Box>
        <IconButton color="inherit" component={Link} to="/">
               
               
                 <CloseIcon/>
               
               
             </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Transactions;
