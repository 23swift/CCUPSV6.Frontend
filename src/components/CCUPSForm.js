import React, { useEffect, useState, Fragment } from 'react'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, CircularProgress, Typography} from '@material-ui/core'

import { makeStyles } from '@material-ui/styles';
import { blue, amber } from '@material-ui/core/colors';
import { Formik, Form,  } from 'formik';
import {  MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useSnackbar } from 'notistack';
import CCUPSTextBox from './CCUPSTextBox';
import CCUPSDropDown from './CCUPSDropDown';
import CCUPSCheckBox from './CCUPSCheckBox';
import CCUPSCalendar from './CCUPSCalendar';
import CheckIcon from '@material-ui/icons/Check';
import CCUPSConfirmationDialog from './CCUPSConfirmationDialog';
import Backdrop from '@material-ui/core/Backdrop';
import CCUPSProgress from './CCUPSProgress';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme)=>({
    root: {
      flexGrow: 1,
    },
      appBar: {
          top: 'auto',
          bottom: 0,
          color:blue[500],
          minHeight:30,
          // zIndex: theme.zIndex.drawer + 1,
          //  background:theme.palette.background.paper
          background:"#f2f2f2"
          
        },
        actionButton:{
          minWidth:110
        },
      
        
  }));

const isEmpty=(obj)=> {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

const touchedAll=(errors,touched)=> {
  for(var key in errors) {
     
      touched[key]=true;
  }
   return touched;
}


const generateFormElements=(props)=>{
    const { errors, touched,formElements,handleChange,handleBlur} = props;

    return(
       
        <Grid container spacing={1}  >
            { formElements.map((item,index)=>(
                
          <Grid item xs={12} md={6} key={index}>
           
                    {item.formControl==="text" && 
                            <CCUPSTextBox fieldName={item.name} errors={errors} touched={touched} label={item.label} handleChange={handleChange} handleBlur={handleBlur}/>

                    }
                    {item.formControl==="select" && 
                        <CCUPSDropDown label={item.label} fieldName={item.name} control={item} errors={errors} touched={touched}/>
                    }
                    { item.formControl==="checkBox" && 
                    <CCUPSCheckBox  name={item.name} handleChange={handleChange} label= {item.label} errors={errors} touched={touched}/>
                         
                  }
                  { item.formControl==="date" && 
                    <CCUPSCalendar fieldName={item.name} label= {item.label} errors={errors} touched={touched}/>
                  }
                 
                  </Grid>  
                 
              ))}
       </Grid>
      
    )
   

        
}


function CCUPSForm(props) {
    const classes = useStyles();
    const [confirmationOpen, setConfirmationOpen] = useState(false);
    let history = useHistory();
    const handleConfirmationClose=()=>{
      setConfirmationOpen(false);
    }
    const handleSnackExit=()=>{

      setConfirmationOpen(false);
      
      history.push("/applicationDataEntry");
    
    }
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
   
    const showSuccessMessage=(message)=>{
      enqueueSnackbar( message , { 
                       variant: 'success',
                       onExited: handleSnackExit() 
                      
                       
                     
                  });
    
    }
   
    return (
        <div>
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Formik 
          initialValues={props.formConfig.model}
          // validate={validateValues}
          validationSchema={props.formConfig.validationSchema}
          validateOnMount={true}
          onSubmit={(values, { setSubmitting }) => {
            
            
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              //todo actual savinf here
              showSuccessMessage("Record Saved");
            //   enqueueSnackbar('Record Saved!', { 
            //     variant: 'success',
            // });
            }, 5000);
          }}
        >
        {({ values, errors, touched,  handleChange, handleBlur, handleSubmit,validateForm,setSubmitting,status ,setTouched, isSubmitting}) => (
          <Form>
          
         
          {generateFormElements({errors, touched,formElements:props.formConfig.formElements,handleChange,handleBlur})}
         

                        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={700}>
                            <AppBar position="fixed" className={classes.appBar} elevation={1}>
                            <Divider/>
                           
                            
                            

                             <Box display="flex" padding={1} >
                                    <Box flexGrow={1}>

                                    </Box>
                                    
                                  
                                            <Box style={{marginRight:3}}>
                                                    <Button variant="outlined" color="primary"  size="small"
                                                      className={classes.actionButton}>
                                                                Cancel
                                                    </Button>
                                                </Box>
                                                <Box>
                                                    <Button variant="contained" color="primary" size="small" onClick={() => 
                                                      validateForm().then(err=>{
                                                        if(isEmpty(err)){
                                                          setConfirmationOpen(true);
                                                        
                                                        }else{
                                                          errors=err;
                                                          setTouched(touchedAll(errors,touched)) ;
                                                      }
                                                        errors={};
                                                        
                                                      })  
                                                  }
                                                      disabled={isSubmitting }
                                                    className={classes.actionButton} >
                                                                Save
                                                    </Button>
                                                    
                                                </Box>
                                      
                                    
                                   </Box>
                          
                            
                                   
                               
                            </AppBar>
                          
                        </Slide>
              <CCUPSConfirmationDialog open={confirmationOpen} handleClose={handleConfirmationClose} isSubmitting={isSubmitting} action={handleSubmit} message="Saving your entry, Please Confirm..."/>
          <CCUPSProgress open={isSubmitting} displayText="Saving Auto Debit Application Please wait..."/>
          </Form>
          )
        }
      </Formik>
    </MuiPickersUtilsProvider>

    
    </div>
    )
}

export default CCUPSForm
