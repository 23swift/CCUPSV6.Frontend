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
import { Button, Box } from '@material-ui/core';
import CCUPSActionButton from './CCUPSActionButton';
import { withFormik } from 'formik';
import { useHistory } from 'react-router';



const CCUPSRestForm = (props) => {
  const {  submitUrl, validationScheme,legend,update,model,returnUrl,resourceName } = props;
  const [apiAction, setApiAction] = useState(update?"PUT":"POST");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [formSchema, setFormSchema] = useState();
  let history = useHistory();
  const showSuccessMessage = (message) => {
    enqueueSnackbar(message, {
      variant: "success",
      onExited: handleSnackExit(),
    });
  };
  const showSubmitErrorMessage = (error) => {
   
    enqueueSnackbar(error, {
      variant: "error",
      onExited: handleSnackExit(),
    })
};

const cancelAction=(resetForm)=>{
  resetForm();

}
const handleSnackExit = () => {
  //setConfirmationOpen(false);

  setTimeout(() => {
   
  }, 2000);
  
};
const handleOnSubmit =  (values, actions) => {
  
                    setTimeout(() => {
                  
                    
                    callApi(selectedAction.href,values,selectedAction.type).then(data => {
                                              // console.log(data); // JSON data parsed by `response.json()` call
                                              actions.setSubmitting(false);
                                              showSuccessMessage("Entry " +selectedAction.title +"ed !");
                                              if(selectedAction.type=="POST"){ actions.resetForm();}
                                              // else{actions.setValues(data);}
                                              history.push(returnUrl);
                                            },
                                            (error) => {
                                              // showSubmitErrorMessage('An Error has occured! Please Coordinate with ITSD.');
                                              showSubmitErrorMessage(JSON.stringify(error, null, 2));
                                               actions.setSubmitting(false);
                                              
                                            })
                    

                                            
                      
                    }, 2000);
                
  
 
}

let selectedAction=null;

const setSelectedAction=(val)=>{
  selectedAction=val;
  
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
                onSubmit={handleOnSubmit}
               
           >
             {({ values, errors,  touched,   handleChange, handleBlur,handleSubmit,  validateForm,setSubmitting,setValues ,setTouched,isSubmitting,resetForm}
             ) => (
                      
                  
                <>
                
               
               {Object.keys(errors).length>0 && <CCCUPSErroNotification errorList={errors} open={Object.keys(errors).length>0}/>}
                  {formSchema && <CCUPSFormElements formSchema={formSchema} model={model} values={values} errors={errors} touched={touched} handleChange={handleChange}
                  isSubmitting={isSubmitting} handleBlur={handleBlur} handleSubmit={handleSubmit} resetForm={resetForm}/> }
            <Box display="flex" pt={2}> 
              <Box flexGrow={1}>
              
              </Box>
             

                  {values.links && values.links.filter(entity=>{ return entity.rel=='action'}).map((item,index)=>(

                       <Box key={index} mr={1}>   
                          {/* <Button color="secondary" variant="contained" disableElevation onClick={()=> setConfirmationOpen(true)} style={{minWidth:100}}>
                          {item.title}
                          </Button> */}

                           <CCUPSActionButton item={item} handleSubmit={handleSubmit} isSubmitting={isSubmitting} setSelectedAction={setSelectedAction} />
                       
                          </Box> 
                      

                  ))}
                
          </Box>
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
