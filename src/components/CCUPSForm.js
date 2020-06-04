import React, { useEffect } from 'react'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber } from '@material-ui/core/colors';

import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { TextField ,Select} from 'formik-material-ui';
import {TimePicker, DatePicker,  DateTimePicker} from 'formik-material-ui-pickers';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import { useSnackbar } from 'notistack';

import CCUPSTextBox from './CCUPSTextBox';
import CCUPSDropDown from './CCUPSDropDown';
import CCUPSCheckBox from './CCUPSCheckBox';
import CCUPSCalendar from './CCUPSCalendar';

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
        CheckboxLabel:{
          color:theme.palette.secondary.main,
          fontSize:14,
          marginLeft:0
        },
        closeBUtton:{
          color:theme.palette.common.black,
          opacity:.4
        },
        textHelperText:{
          marginLeft:2
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        
  }));


const generateFormElements=(props)=>{
    const { errors, touched,formElements,handleChange,handleBlur} = props;

 
 
    return(
       
        <Grid container spacing={1}  >
            { formElements.map((item,index)=>(
                
          <Grid item xs={12} md={6} key={index}>
           
                    {item.formControl=="text" && 
                            <CCUPSTextBox fieldName={item.name} errors={errors} touched={touched} label={item.label} handleChange={handleChange} handleBlur={handleBlur}/>

                    }
                    {item.formControl=="select" && 
                        <CCUPSDropDown label={item.label} fieldName={item.name} control={item} errors={errors} touched={touched}/>
                    }
                    { item.formControl=="checkBox" && 
                    <CCUPSCheckBox  name={item.name} handleChange={handleChange} label= {item.label} errors={errors} touched={touched}/>
                         
                  }
                  { item.formControl=="date" && 
                    <CCUPSCalendar fieldName={item.name} label= {item.label} errors={errors} touched={touched}/>
                  }
                 
                  </Grid>  
                 
              ))}
       </Grid>
      
    )
   

        
}



function CCUPSForm(props) {
    const classes = useStyles();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const validateValues = values => {
      const errors = {};
      // if (!values.email) {
      //   errors.email = 'Required';
      // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      //   errors.email = 'Invalid email address';
      // }
      
      
      if (!values.card_number) {
        errors.card_number = 'Card Number Required';
      }
      if (!values.first_name) {
        errors.first_name = 'First Name Required';
      }

      return errors;
    }

    
    return (
        <div>
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Formik
          initialValues={props.formConfig.model}
          // validate={validateValues}
          validationSchema={props.formConfig.validationSchema}
         
          onSubmit={(values, { setSubmitting }) => {
          
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              enqueueSnackbar('Record Saved!', { 
                variant: 'success',
            });
            }, 200);
          }}
        >
        {({ values, errors, touched,  handleChange, handleBlur, handleSubmit, isSubmitting}) => (
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
                                        <Button variant="contained" color="primary" size="small" onClick={handleSubmit}
                                          disabled={isSubmitting }
                                        className={classes.actionButton} >
                                                    Save
                                        </Button>
                                        
                                    </Box>
                                </Box>
                            </AppBar>
                          
                        </Slide>

          </Form>
          )
        }
      </Formik>
    </MuiPickersUtilsProvider>
        </div>
    )
}

export default CCUPSForm
