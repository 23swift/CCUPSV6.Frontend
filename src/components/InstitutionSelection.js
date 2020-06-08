import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { Box } from '@material-ui/core';



const useStyles = makeStyles((theme)=>({
  root:{

    minWidth:300
  },
  avatar: {
    // backgroundColor: "#fff",
    // color: blue[600],
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginRight:theme.spacing(2),
    boxShadow:
      "0 16px 30px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const InstitutionSelection = (props) => {
    const classes = useStyles();
  const { onClose, selectedValue, open,institutions } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

 
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} pare>
        <DialogTitle id="simple-dialog-title">Please select Institution</DialogTitle>
        <List className={classes.root}>
          {institutions.map((item) => (
            <ListItem button onClick={() => handleListItemClick(item.name)} key={item.name} >
              <ListItemAvatar>
                <Avatar className={classes.avatar} sizes="large"> 
                           
                  {item.avatar? item.avatar :  <PersonIcon /> }
               </Avatar>
               
              </ListItemAvatar>
              
                
                  <ListItemText primary={item.name} />

              
             
              
              
            </ListItem>
          ))}
  
          <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add Institution" />
          </ListItem>
        </List>
      </Dialog>
    )
}

export default InstitutionSelection

InstitutionSelection.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };