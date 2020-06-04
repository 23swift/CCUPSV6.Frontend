import React, { useState, useEffect } from 'react'
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
// import {ApplicationFormConfig} from "./ApplicationModel";
import FormikDropDown from '../../../components/FormikDropDown';
import FormikForm from '../../../components/FormikForm';
import FormField from '../../../components/FormField';

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
const  ApplicationModel={
  id:0,
  card_number:"",
  last_name:"",
  first_name:"",
  institution:{id:0,name:"",code:"",merchant_id:""},
  middle_name:"",
  product:{id:0,name:"",code:""},
  reference_no:"",
  merchant:false

}
// const getProducts =async ()=> {
//   let response = await fetch('api/dd/products');
//   let data = await response.json();
// console.log(data._embedded.products);

//   return data._embedded.products;

// }
const ApplicationFormConfig= ()=>
    {
     
      //  const formConfig=[
      //       {label:"Card Number", formControl:"text",name:"card_number"},
      //       {label:"Reference Number", formControl:"text",name:"reference_no"},
      //       {label:"Last Name", formControl:"text",name:"last_name"},
      //       {label:"Middle Name", formControl:"text",name:"middle_name"},
      //       {label:"First Name", formControl:"text",name:"first_name"},
      //       // {label:"Institution", formControl:"select",name:"institution",menuItems:[]},
      //       // {label:"Product", formControl:"select",name:"product",
      //       // menuItems:getProducts()},
      //       {label:"Merchant", formControl:"checkBox",name:"merchant"},
      //       // {label:"Date of Birth", formControl:"date",name:"dob"},
      //   ]
      const formConfig=[
        {formControl:(error,touched)=><FormField name="card_number" label="Card Number" errors={error} touched={touched} />},
        {formControl:(error,touched)=><FormField label="Reference Number" name="reference_no" errors={error} touched={touched}/>},
        {formControl:(error,touched)=><FormField label="Last Name" name="last_name" errors={error} touched={touched}/>},
        {formControl:(error,touched)=><FormField label="Middle Name" name="middle_name" errors={error} touched={touched}/>},
        {formControl:(error,touched)=><FormField label="First Name" name="first_name" errors={error} touched={touched}/>},
        // {formControl:(error,touched)=><FormField label="Middle Name" name="middle_name" errors={error} touched={touched}/>},
       
    ]

        return formConfig;
    
    }

const ApplicationForm = () => {
    const classes = useStyles();
    
<<<<<<< HEAD
    // const [AppFormConfigState, setAppFormConfigState] = useState(null);
    
      

    useEffect(() => {
      
      
        fetch("api/dd/institutions")
        .then(res => res.json())
        .then(
          (result) => {
            
            // console.log(result._embedded.products);
            // console.log(result);
            // setDataRows(result);
            // setAppFormConfigState({...AppFormConfigState,ProductMenuItems:result._embedded.products});
            //  setAppFormConfigState([...ApplicationFormConfig(),{label:"Institution", formControl:"select",name:"institution",
            // menuItems:result}]);
          },
          // Note: it's important to handle errors here
          
          (error) => {
            // setIsLoaded(true);
            // setError(error);
            console.log(error);
            
          }
        );


    }, [])
=======
   
   
>>>>>>> fd4429c0df61fb0d006125f38e7a921015afc179
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
          
<<<<<<< HEAD
          {   <FormikForm model={ApplicationModel} FormConfig={ApplicationFormConfig()}/>}
=======
              <Box ml={1} mr={1} mt={0} >
             
                
                    <CCUPSForm formConfig={ApplicationFormConfig}/>
       

        
                    
                  
              </Box>
>>>>>>> fd4429c0df61fb0d006125f38e7a921015afc179



        </div>
    )
}

export default ApplicationForm
