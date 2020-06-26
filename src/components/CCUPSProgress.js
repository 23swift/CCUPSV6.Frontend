import React from 'react'

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      // color: '#fff',
    },
  }));
const CCUPSProgress = (props) => {
const{open,displayText}=props;
    const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleToggle = () => {
//     setOpen(!open);
//   };
    return (
        <Backdrop className={classes.backdrop} open={open} 
        // onClick={handleClose}
        >
          <Paper style={{padding:15,background: "linear-gradient(60deg, #ffa726, #fb8c00)"}}>
            <Box display="flex" flexDirection="row">

              <Box color="text.error"><CircularProgress color="secondary" style={{marginRight:10}} /></Box>
              <Box pt={2}  color="#fff"> <Typography   >{  displayText}</Typography></Box>

            </Box>
           
                 
                 
          </Paper>
        
    
      </Backdrop>
    )
}

export default CCUPSProgress
