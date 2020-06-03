import React from 'react'
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

import FormikDropDown from '../components/FormikDropDown';

import CCUPSTextBox from './CCUPSTextBox';

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
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  }

//   const formConfig=[
//     {label:"Card Number", formControl:"text",name:"card_number"},
//     {label:"Reference Number", formControl:"text",name:"reference_no"},
//     {label:"Last Name", formControl:"text",name:"last_name"},
//     {label:"Middle Name", formControl:"text",name:"middle_name"},
//     {label:"First Name", formControl:"text",name:"first_name"},
//     {label:"Institution", formControl:"text",name:"institution"},
//     {label:"Product", formControl:"select",name:"product",
//     menuItems:[]}
// ];


// const createTextBox=(props)=>{

//     return(
//         <CCUPSTextBox fieldName="card_number" errors={props.errors} touched={props.touched} label="Card Number"/>
//     )
// }
const generateFormElements=(props)=>{
    const { errors, touched} = props;
    return(
       
        <Grid container spacing={1}  >
            { props.formElements.map((item,index)=>(
                
          <Grid item xs={12} md={6} >
           
                    {item.formControl=="text" && 
                            <CCUPSTextBox fieldName={item.name} errors={errors} touched={touched} label={item.label}/>

                    }
                    {item.formControl=="select" && 
                        <FormikDropDown label={item.label} name={item.name} menuItems={item.menuItems} />
                    }
                    

                  </Grid>  
                 
              ))}
       </Grid>
      
    )
   

        
}

function CCUPSForm(props) {
    const classes = useStyles();
    


    return (
        <div>
             <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Formik
          initialValues={props.formConfig.model}
          validate={values => {
            const errors = {};
            if (!values.card_number) {
              errors.card_number = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Submitted");
            
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 200);
          }}
        >
        {({ values, errors, touched,  handleChange, handleBlur, handleSubmit, isSubmitting,}) => (
          <Form>
          
         
          {generateFormElements({errors, touched,formElements:props.formConfig.formElements})}
         
         
            
        
       


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
