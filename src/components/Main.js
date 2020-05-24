import React from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import BuildIcon from '@material-ui/icons/Build';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faTools, faShieldAlt, faSearch, faColumns, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { Typography, Container, makeStyles, CssBaseline, Grid, Paper, Button, Box } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(7),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
     
    },
    item: {
        // display: 'flex',
        height: 140,
        width: 150,
        padding:20,
        background: 'linear-gradient(90deg, #054594 30%, #043673 90%)',

        // alignItems:"center",
        // justifyContent:"center"
      },
      icon:{
        color:theme.palette.common.white,
        // marginRight:1,
       
        // color:"#043673"
      
   },
   label:{
    color:theme.palette.common.white,
   }
  }));
const Main = () => {
    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="lg" style={{backgroundColor:"#043673"}}>
            <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4" style={{color:"#043673"}}>
                            Credit Card Utility Payment System
                        </Typography>
                <Grid item xs={6} >
                <Grid container justify="center"  spacing={1} style={{marginTop:20}}>
               
                    <Grid  item >
                        <Box component={Button} style={{padding:0}} >
                            <Paper className={classes.item} elevation={0} >
                                <Box  display="flex" >
                                        <Box m="auto">
                                            <FontAwesomeIcon icon={faDatabase} size="5x" className={classes.icon}/>
                                        </Box>
                                </Box>
                                <Box  display="flex"  >
                                        <Box m="auto">
                                        <Typography  className={classes.label} >
                                            Transaction
                                           
                                        </Typography>
                                        
                                        </Box>
                                    
                                    </Box>
                            </Paper>
                           
                        </Box>
                
                   
                    
                    </Grid>
                    <Grid  item>
                    <Box component={Button} style={{padding:0}} >
                         <Paper className={classes.item} >
                        <Box display="flex">
                            <Box m="auto">
                                <FontAwesomeIcon icon={faTools} size="5x" className={classes.icon} /> 
                            </Box>
                        </Box>
                                <Box display="flex">
                            <Box m="auto">
                                <Typography className={classes.label} >
                                Utilities
                                </Typography>
                            </Box>
                        </Box>  
                    </Paper>
                   
                    </Box>
                   
                    </Grid>
                    <Grid  item>
                    <Box component={Button} style={{padding:0}} >
                         <Paper className={classes.item} >
                        <Box display="flex">
                            <Box m="auto">
                                <FontAwesomeIcon icon={faShieldAlt} size="5x" className={classes.icon} /> 
                            </Box>
                        </Box>
                                <Box display="flex">
                            <Box m="auto">
                                <Typography className={classes.label} >
                                    Security
                                </Typography>
                            </Box>
                        </Box>  
                    </Paper>
                   
                    </Box>
                   
                    </Grid>
                    <Grid  item>
                    <Box component={Button} style={{padding:0}} >
                         <Paper className={classes.item} >
                        <Box display="flex">
                            <Box m="auto">
                                <FontAwesomeIcon icon={faSearch} size="5x" className={classes.icon} /> 
                            </Box>
                        </Box>
                                <Box display="flex">
                            <Box m="auto">
                                <Typography className={classes.label} >
                                    Inquiry
                                </Typography>
                            </Box>
                        </Box>  
                    </Paper>
                   
                    </Box>
                   
                    </Grid>
                    <Grid  item>
                    <Box component={Button} style={{padding:0}} >
                         <Paper className={classes.item} >
                        <Box display="flex">
                            <Box m="auto">
                                <FontAwesomeIcon icon={faColumns} size="5x" className={classes.icon} /> 
                            </Box>
                        </Box>
                                <Box display="flex">
                            <Box m="auto">
                                <Typography className={classes.label} >
                                    Dashboard
                                </Typography>
                            </Box>
                        </Box>  
                    </Paper>
                   
                    </Box>
                   
                    </Grid>
                    <Grid  item>
                    <Box component={Button} style={{padding:0}} >
                         <Paper className={classes.item} >
                        <Box display="flex">
                            <Box m="auto">
                                <FontAwesomeIcon icon={faClipboardList} size="5x" className={classes.icon} /> 
                            </Box>
                        </Box>
                                <Box display="flex">
                            <Box m="auto">
                                <Typography className={classes.label} >
                                    Reports
                                </Typography>
                            </Box>
                        </Box>  
                    </Paper>
                   
                    </Box>
                   
                    </Grid>
                </Grid>
        </Grid>
                </div>
                
            </Container>
        </div>
    )
}

export default Main
