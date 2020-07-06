import React, { useEffect, useState } from 'react'
import {    Box,    Divider,    Button,    IconButton,    Slide,    AppBar,    Grid,
    CircularProgress,    Typography,    Badge, TextField, InputLabel, Select, MenuItem, FormControl, FormControlLabel, Checkbox,  } from "@material-ui/core";
  import InfoIcon from "@material-ui/icons/Info";
  import { makeStyles } from "@material-ui/styles";
  import { blue, amber } from "@material-ui/core/colors";
  import { Formik, Form } from "formik";
  import { MuiPickersUtilsProvider } from "@material-ui/pickers";
  import DateFnsUtils from "@date-io/date-fns";
  import { useSnackbar } from "notistack";
  import CCUPSTextBox from "./CCUPSTextBox";
  import CCUPSDropDown from "./CCUPSDropDown";
  import CCUPSCheckBox from "./CCUPSCheckBox";
  import CCUPSCalendar from "./CCUPSCalendar";
  import CheckIcon from "@material-ui/icons/Check";
  import CCUPSConfirmationDialog from "./CCUPSConfirmationDialog";
  import Backdrop from "@material-ui/core/Backdrop";
  import CCUPSProgress from "./CCUPSProgress";
  import { useHistory } from "react-router-dom";
  import { postData, callApi } from "./CCUPSApiService";
  import { createFormConfig, ccupsFormModel } from "./CCUPSFormHelper";
  import NotificationsIcon from "@material-ui/icons/Notifications";
  import CCUPSDropDownNumber from "./CCUPSDropDownNumber";
  import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
  import SaveIcon from '@material-ui/icons/Save';
  import ClearIcon from '@material-ui/icons/Clear';
import { getResource, getProfile } from './CCUPSHelper';
import CCUPSFormElements from './CCUPSFormElements';






const CCUPSRestForm = (props) => {
  const {  submitUrl, validationScheme,legend,update,model,returnUrl,resourceName } = props;
  const [apiAction, setApiAction] = useState(update?"PUT":"POST");
  const [formSchema, setFormSchema] = useState();

  useEffect(() => {
    
    
    getProfile(resourceName)
    .then(data=>{  
        //  console.log(data.properties);
        setFormSchema(data.properties);
        
     });
    return () => {
        // cleanup
    }
}, [])
    return (
        <div>
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <Formik  initialValues={model}   validationSchema={validationScheme}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    setTimeout(() => {
                    
                    }, 2000);
                  }}
           >
             {({ values, errors,  touched,   handleChange, handleBlur, handleSubmit, validateForm,setSubmitting,status,setTouched,isSubmitting}
             ) => (
                      
                  //  <CCUPSFormElements formSchema={formSchema} model={model} values={values} errors={errors} touched={touched}/>
                <>
                  { <CCUPSFormElements formSchema={formSchema} model={model} values={values} errors={errors} touched={touched}/> }
                  
                  </>
                
              )}
            
           </Formik>
             

           </MuiPickersUtilsProvider>
          
          

        </div>
    )
}

export default CCUPSRestForm
