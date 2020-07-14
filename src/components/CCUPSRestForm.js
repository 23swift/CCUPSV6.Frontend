import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
  import InfoIcon from "@material-ui/icons/Info";
  import { makeStyles } from "@material-ui/styles";
  import { blue, amber } from "@material-ui/core/colors";
  import { Formik, Form } from "formik";
  import { MuiPickersUtilsProvider } from "@material-ui/pickers";
  import DateFnsUtils from "@date-io/date-fns";
  import { useSnackbar } from "notistack";
 
  import { postData, callApi } from "./CCUPSApiService";
 
import { getResource, getProfile, getActionUrl } from './CCUPSHelper';
import CCUPSFormElements from './CCUPSFormElements';
import CCCUPSErroNotification from './CCCUPSErroNotification';
import { Button } from '@material-ui/core';
const CCUPSRestForm = (props) => {
  const {  submitUrl, validationScheme,legend,update,model,returnUrl,resourceName, } = props;
  const [apiAction, setApiAction] = useState(update?"PUT":"POST");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [formSchema, setFormSchema] = useState();
  const showSuccessMessage = (message) => {
    enqueueSnackbar(message, {
      variant: "success",
      // onExited: handleSnackExit(),
    });
  };
  const showSubmitErrorMessage = (error) => {
   
    enqueueSnackbar(error, {
      variant: "error",
      // onExited: handleSnackExit(),
    })
};

const cancelAction=(resetForm)=>{
  resetForm();

}

  useEffect(() => {
    
    getProfile(resourceName)
  .then(data=>{  
    setFormSchema(data.properties);
  });


return () => {
   // cleanup
   setFormSchema(null);
}
}, [])
    return (
        <div style={{paddingTop:10}}>
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
           <Formik  initialValues={model}    validationSchema={validationScheme}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                    setTimeout(() => {
                      getResource(resourceName).then(href=>{

                      callApi(href,values,'POST').then(data => {
                                              // console.log(data); // JSON data parsed by `response.json()` call
                                              setSubmitting(false);
                                              showSuccessMessage("Entry Saved!");
                                              resetForm();
                                            },
                                            (error) => {
                                              // showSubmitErrorMessage('An Error has occured! Please Coordinate with ITSD.');
                                              showSubmitErrorMessage(JSON.stringify(error, null, 2));
                                              setSubmitting(false);
                                              
                                            })

                      });
                      
                    }, 2000);
                  }}
           >
             {({ values, errors,  touched,   handleChange, handleBlur, handleSubmit, validateForm,setSubmitting,status,setTouched,isSubmitting,resetForm}
             ) => (
                      
                  
                <>
                
               
               {Object.keys(errors).length>0 && <CCCUPSErroNotification errorList={errors} open={Object.keys(errors).length>0}/>}
                  {formSchema && <CCUPSFormElements formSchema={formSchema} model={model} values={values} errors={errors} touched={touched} handleChange={handleChange}
                  isSubmitting={isSubmitting} handleBlur={handleBlur} handleSubmit={handleSubmit} resetForm={resetForm}/> }
                 
                  </>
                
              )}
            
           </Formik>
             

           </MuiPickersUtilsProvider>
          
          

        </div>
    )
}

CCUPSRestForm.propTypes = {
  submitUrl:PropTypes.string,
  validationScheme:PropTypes.object.isRequired,
  // update,
  model:PropTypes.object.isRequired,
  returnUrl:PropTypes.string,
  resourceName:PropTypes.string.isRequired,
  // formSchema :PropTypes.object.isRequired,
  // handleSubmit:PropTypes.func.isRequired,

}
export default CCUPSRestForm
