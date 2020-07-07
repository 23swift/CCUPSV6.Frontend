import React, { useState, useEffect } from 'react'
import { Grid, Typography, Paper, Box, Divider, IconButton, Collapse } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
const CCCUPSErroNotification = (props) => {
    const{errorList, open}=props;
    const [openNotification, setOpenNotification] = useState(true);

   
    return (
        <div style={{marginBottom:10}}>
          {!openNotification &&  open &&
            <Box display="flex" color="error.main">
                <Box flexGrow={1}>

                </Box>
                
                    <IconButton size="small"  color="inherit" onClick={()=>setOpenNotification(true)}>
                            <NotificationImportantIcon/>
                    </IconButton>
            </Box>
                
            }
            <Collapse in={open && openNotification}  >
                <Paper  style={{marginBottom:10}} >
                <Box p={2} pt={1} 
                 color="error.main">
                    <Box display="flex">
                        <Box flexGrow={1}>  
                            <Typography variant="subtitle1" color="inherit" style={{paddingBottom:0}}><ErrorOutlineIcon/> Please correct the following validation errors:</Typography>
                        </Box>
                        <Box>
                            <IconButton size="small" color="inherit" onClick={()=>setOpenNotification(false)}>
                                        <ClearIcon/>
                            </IconButton>
                        </Box>
                    </Box>
            
                <Grid container spacing={1} >
                                        { Object.keys(errorList).map((item,index)=>(
                                            <Grid item xs={12} md={3} key={index} >
                                                <Typography variant="caption">
                                                    {errorList[item]}
                                                </Typography>
                                                        
                                            </Grid>
                                    ))}
                                    </Grid>
                </Box>      
                            
                    
            </Paper>
            </Collapse>

        </div>
      
      
    
    )
}

export default CCCUPSErroNotification
