import React, { useState, useEffect } from 'react'
import { Grid, Typography, Paper, Box, Divider, IconButton, Collapse, Fade, Badge } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
const CCCUPSErroNotification = (props) => {
    const{errorList, open}=props;
    const [openNotification, setOpenNotification] = useState(true);
const [showNotifIcon, setShowNotifIcon] = useState(false);
   
    return (
        <div >
         
          
           
                
            
            <Collapse in={open && openNotification} onExit={()=>setShowNotifIcon(true)} >
                <Paper  variant="outlined" style={{backgroundColor:"#efefef"}}  >
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
            
                <Grid container  >
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
            <Fade in= {  !openNotification && open && showNotifIcon} >
          
          <Box display="flex" color="error.main" mt={1}>
           <Box flexGrow={1}>

           </Box>

               <IconButton color="secondary"  size="small" onClick={()=>setOpenNotification(true)}>
                   <Badge badgeContent={Object.values(errorList).length}  color="error">
                   <NotificationImportantIcon />
                   </Badge>
               </IconButton>
       </Box>
     </Fade>
        </div>
      
      
    
    )
}

export default CCCUPSErroNotification
