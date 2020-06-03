import React, { useState } from 'react'
import PageHeader from '../../../components/PageHeader'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber } from '@material-ui/core/colors';
import DropDown from '../../../components/DropDown';
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
import {ApplicationFormConfig} from "./ApplicationModel";
import FormikDropDown from '../../../components/FormikDropDown';

import CCUPSTextbox from '../../../components/CCUPSTextBox';
import CCUPSForm from '../../../components/CCUPSForm';

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
const ApplicationForm = () => {
    const classes = useStyles();
    const institutionItems=[
      {value:10,displayText:"SSS"},
      {value:20,displayText:"Smart"},
      {value:30,displayText:"Globe"},

    ];
    
   
   
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
               
                <Button variant="outlined" className={classes.closeBUtton}
                  component={Link}
                  to="/applicationDataEntry"
                  size="small"
                  style={{ minWidth: 30,minHeight:30,padding:2 }}
                >
                  <CloseIcon  />
                </Button>
                
              </Box>
             
            </Box>
            }
            />
          
              <Box ml={1} mr={1} mt={0} >
             
                
                    <CCUPSForm formConfig={ApplicationFormConfig}/>
       

        
                    
                  
              </Box>



        </div>
    )
}

export default ApplicationForm
