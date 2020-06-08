import React from 'react'
import StorageIcon from '@material-ui/icons/Storage';
import BuildIcon from '@material-ui/icons/Build';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import meralcoLogo from '../img/meralco.png'
import pldtLogo from '../img/pldtLogo.png'
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
        height: 180,
        width: 190,
        padding:20,
        // background: 'linear-gradient(90deg, #054594 30%, #043673 90%)',

        // alignItems:"center",
        // justifyContent:"center"
      },
      icon:{
        // color:theme.palette.common.white,
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
            <Container component="main" maxWidth="lg" >
            <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4" style={{color:"#043673"}}>
                            Select Institution
                        </Typography>
                <Grid item xs={6} >
                <Grid container justify="center"  spacing={1} style={{marginTop:20}}>
               
                    <Grid  item >
                        <Box component={Button} style={{padding:0}} >
                            <Paper className={classes.item} elevation={1} >
                                <Box  display="flex" >
                                        <Box m="auto">
                                            {/* <FontAwesomeIcon icon={faDatabase} size="5x" className={classes.icon}/> */}
                                            <img src={meralcoLogo} style={{height:120, borderRadius:4}}/>
                                        </Box>
                                </Box>
                                <Box  display="flex"  >
                                        {/* <Box m="auto">
                                        <Typography  className={classes.label} >
                                            Transaction
                                           
                                        </Typography>
                                        
                                        </Box> */}
                                    
                                    </Box>
                            </Paper>
                           
                        </Box>
                
                   
                    
                    </Grid>
                    <Grid  item>
                    <Box component={Button} style={{padding:0}} >
                         <Paper className={classes.item} >
                        <Box >
                            <Box >
                                {/* <FontAwesomeIcon icon={faTools} size="5x" className={classes.icon} />  */}
                                <img src={pldtLogo} style={{height:130,borderRadius:4}} />
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
