import React, { useState } from 'react'
import PageHeader from '../../../components/PageHeader'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber } from '@material-ui/core/colors';
import DropDown from '../../../components/DropDown';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { TextField } from 'formik-material-ui';
import {TimePicker, DatePicker,  DateTimePicker,} from 'formik-material-ui-pickers';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
    appBar: {
        top: 'auto',
        bottom: 0,
        color:blue[500],
        minHeight:30,
        zIndex: theme.zIndex.drawer + 1,
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
      }
      
}));
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
}
const ApplicationForm = () => {
    const classes = useStyles();
    const institutionItems=[
      {value:"10",displayText:"SSS"},
      {value:"20",displayText:"Smart"},
      {value:"30",displayText:"Globe"},

    ];
    
    const formik = useFormik({
      initialValues: {
        
        password: '',
        email: '',
      },
      validate,
      onSubmit: values => {
        console.log(formik.errors);
        
        alert(JSON.stringify(values, null, 2));
      },
    });
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <div>
            <PageHeader title="Application Data Entry" 
            subTitle="Create an entry"
            tools={
                <Box display="flex" flexWrap="nowrap" mt={1} pb={1}>
             <Box mr={1}>
                <Divider orientation="vertical" />
              </Box>
              <Box >
                {/* <IconButton component={Link} to="/applicationDataEntry" size="small"  >
                    <CloseIcon className={classes.closeBUtton}  />
                </IconButton> */}
                <Button variant="outlined" className={classes.closeBUtton}
                  component={Link}
                  to="/applicationDataEntry"
                  size="small"
                  style={{ minWidth: 40,padding:2 }}
                >
                  <CloseIcon  />
                </Button>
                
              </Box>
             
            </Box>
            }
            />
          
<Box ml={1} mr={1} mt={0}>
{/* <Divider/> */}
<MuiPickersUtilsProvider utils={DateFnsUtils}>
<Formik
      initialValues={{ email: '', password: '' ,name:'',address:'',phone:'',dob:''}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting,errors,touched }) => (
        <Form>
          
          <Grid container spacing={1}  >
          <Grid item xs={12} md={6} >
           
           <Field type="name" name="name" component={TextField} fullWidth variant='outlined' size="small" 
           label="Name"
           error={errors.name || touched.name}
           helperText={<ErrorMessage name="name" component={Typography} variant="caption" />}
           />
         
        
              
       </Grid>
       <Grid item xs={12} md={6} >
           
           <Field type="address" name="address" component={TextField} fullWidth variant='outlined' size="small" 
           label="Address"
           error={errors.address || touched.address}
           helperText={<ErrorMessage name="address" component={Typography} variant="caption" />}
           />
         
        
              
       </Grid>
       <Grid item xs={12} md={6} >
           
           <Field type="phone" name="phone" component={TextField} fullWidth variant='outlined' size="small" 
           label="Phone"
           error={errors.phone || touched.phone}
           helperText={<ErrorMessage name="phone" component={Typography} variant="caption" />}
           />
         
        
              
       </Grid>
            <Grid item xs={12} md={6} >
           
                <Field type="email" name="email" component={TextField} fullWidth variant='outlined' size="small" 
                label="Email"
                error={errors.email || touched.email}
                helperText={<ErrorMessage name="email" component={Typography} variant="caption" />}
                />
              
             
                   
            </Grid>
            <Grid item xs={12} md={6}>
              <Field type="password"  name="password" component={TextField}  fullWidth  size="small"
          label="Password" variant="outlined"
           helperText={ <ErrorMessage name="password" component={Typography} variant="caption"/>}
          error={errors.password || touched.password}
         
          />
         
            </Grid>
            <Grid item xs={12} md={6} >
           
                <Field type="dob" name="dob" component={DatePicker}  
               variant="dialog"
                label="Date of Birth"
                inputVariant="outlined"
                error={errors.dob || touched.dob}
                fullWidth  size="small" 
                format="MM/dd/yyyy"
                // autoOk
                // rightArrowIcon={<CalendarTodayIcon/>}
                startAdornment={
                  <InputAdornment position="start">
                    <CalendarTodayIcon/>
                  </InputAdornment>
                }  />
                  
           
         
        
              
       </Grid>
         
         
         </Grid>


<Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={700}>
     <AppBar position="fixed" className={classes.appBar} elevation={1}>
     <Divider/>
         <Box display="flex" padding={2} >
             <Box flexGrow={1}>

             </Box>
             <Box style={{marginRight:3}}>
                 <Button variant="outlined" color="primary"  size="small"
                  className={classes.actionButton}>
                            Cancel
                 </Button>
             </Box>
             <Box>
                 <Button variant="contained" color="primary" size="small" type="submit"
                  disabled={formik.isSubmitting || formik.errors.email}
                 className={classes.actionButton} >
                            Save
                 </Button>
                
             </Box>
         </Box>
    </AppBar>
  
 </Slide>

        </Form>
      )}
    </Formik>
   </MuiPickersUtilsProvider>
       

        
        
      
    
</Box>



        </div>
    )
}

export default ApplicationForm
