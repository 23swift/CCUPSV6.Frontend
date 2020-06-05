import React from 'react'

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
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
        <CircularProgress color="inherit" style={{marginRight:10}} />
    <Typography color="inherit">{  displayText}</Typography>
      </Backdrop>
    )
}

export default CCUPSProgress
