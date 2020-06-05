import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography, Box, Slide, Grow, makeStyles, IconButton } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SaveIcon from '@material-ui/icons/Save';
import CheckIcon from '@material-ui/icons/Check';
import { blue } from '@material-ui/core/colors';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow   ref={ref} {...props} />;
  });


  const useStyles = makeStyles((theme)=>({


    paper:{
      background:'linear-gradient(60deg, #054594, #043673)',
      // background:'linear-gradient(60deg, #ffa726, #fb8c00)',
      color:"#fff"
    }
  }));

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

export default function CCUPSConfirmationDialog(props) {
const classes=useStyles();
const{open,handleClose,action,message,isSubmitting}=props;
const handleAction=()=>{
   
  if(action){
        action();
    
        
    }
    
    // handleClose();
}

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}
       classes={{
        paper:classes.paper

        
       }}
      >
        <DialogTitle id="alert-dialog-title" >
         
                Credit Card Utility Payment System
         
        </DialogTitle>
        <DialogContent> 
          <DialogContentText id="alert-dialog-description" color="inherit" variant="subtitle2" >
        
          {message}
          
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit" variant="outlined"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button startIcon={<CheckIcon/>}
            // onClick={handleClose}
            color="secondary"
            variant="contained"
            autoFocus
            onClick={handleAction}
            disabled={isSubmitting}
          >
            Confirmed
            
          
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
