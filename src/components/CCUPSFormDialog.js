import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import {    Box,    Divider,    Button,    IconButton,    Slide,
    AppBar,    Grid,    CircularProgress,    Typography,    Badge,
    DialogContent,    DialogActions,    DialogContentText, Dialog, DialogTitle,  } from "@material-ui/core";
  import InfoIcon from "@material-ui/icons/Info";
  import { makeStyles } from "@material-ui/styles";
  import { blue, amber } from "@material-ui/core/colors";
  import { Formik, Form } from "formik";
  import { MuiPickersUtilsProvider } from "@material-ui/pickers";
  import DateFnsUtils from "@date-io/date-fns";
  import { useSnackbar } from "notistack";
 
  import CCUPSProgress from "./CCUPSProgress";
  import { useHistory } from "react-router-dom";
 
import CCUPSFormElements from './CCUPSFormElements';
import CCCUPSErroNotification from './CCCUPSErroNotification';
import { getProfile } from './CCUPSHelper';
import CCUPSActionButton from './CCUPSActionButton';
import { callApi } from './CCUPSApiService';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      top: "auto",
      bottom: 0,
      // color: blue[500],
      minHeight: 60,
      // zIndex: theme.zIndex.drawer + 1,
      //  background:theme.palette.background.paper
      // background: "#f2f2f2",
      background:"#fff"
    },
    actionButton: {
      minWidth: 110,
    },
    deleteButton:{
      color:theme.palette.error.main,
      minWidth: 110,
    },
    buttonIcon:{
      marginRight:3
    },
    // dialogTextContentRoot:{
    //   paddingTop:5,
    //   minWidth:800
    // }
  }));

const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };
  
  const touchedAll = (errors, touched) => {
    for (var key in errors) {
      // console.log(errors[key]);
      touched[key] = true;
    }
    
    return touched;
  };
  



const CCUPSFormDialog = (props) => {
    const { formConfig, submitUrl, validationScheme,legend,update,model,returnUrl,handleClose,
       open,title ,resourceName} = props;


  const classes = useStyles();
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [errorAlarmOPen, setErrorAlarmOPen] = useState(false);
  const [apiAction, setApiAction] = useState(update?"PUT":"POST");
  const [cancelClicked, setCancelClicked] = useState(false);
  const [formSchema, setFormSchema] = useState();
  let history = useHistory();
  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };
  const handleSnackExit = () => {
    setConfirmationOpen(false);
     history.push(returnUrl);
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showErrorMessage = (pErrors) => {
    Object.values(pErrors).map(error => (
     
      Object.values(error).length==1 ?
      // console.log(Object.values(error).length)
      
              enqueueSnackbar(error.name, {
              variant: "error",
              // onExited: handleSnackExit(),
            })
      :
        enqueueSnackbar(error, {
          variant: "error",
          // onExited: handleSnackExit(),
        })
       
))

pErrors=null

};

  const showSuccessMessage = (message) => {
    enqueueSnackbar(message, {
      variant: "success",
      onExited: handleSnackExit(),
    });
  };
  const showSubmitErrorMessage = (error) => {
   
    enqueueSnackbar(error, {
      variant: "error",
      // onExited: handleSnackExit(),
    })
   


};
  const hasError = (errors,touched) => {
  
    for (var key in errors) {
    
     
     if (errors[key].length>0 ){
      return true;
     }
      // touched[key] = true;
    }
    return false;
  }
  let selectedAction=null;

  const setSelectedAction=(val)=>{
    selectedAction=val;
    
  }

  const handleOnSubmit =  (values, actions) => {
console.log(selectedAction.href);

    setTimeout(() => {
    
      callApi(selectedAction.href,values,selectedAction.type).then(data => {
                              // console.log(data); // JSON data parsed by `response.json()` call
                              actions.setSubmitting(false);
                              showSuccessMessage("Entry Saved!");
                              if(selectedAction.type=="POST"){ actions.resetForm();}
                              // else{actions.setValues(data);}
                              handleClose(data);
                            },
                            (error) => {
                              // showSubmitErrorMessage('An Error has occured! Please Coordinate with ITSD.');
                              showSubmitErrorMessage(JSON.stringify(error, null, 2));
                               actions.setSubmitting(false);
                              
                            })
    

                            
      
    }, 2000);



}

useEffect(() => {
  getProfile(resourceName)
      .then(data=>{ setFormSchema(data.properties); });
  return () => {
    
  }
}, [])

    return (
        <div >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
       
          <Formik
            initialValues={model}
            // validate={validateValues}
            validationSchema={validationScheme}
            //  validateOnMount={true}
            onSubmit={handleOnSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              validateForm,
              setSubmitting,
              status,
              setTouched,
              isSubmitting,
              resetForm
            }) => (
              <Dialog style={{minWidth:800}} open={open } onClose={handleClose} aria-labelledby="form-dialog-title"
              onExited={()=>{resetForm();setConfirmationOpen(false);}}
              maxWidth="md"
              fullWidth={true}
              >
             
                <DialogTitle id="form-dialog-title" color="#efefef"
                  classes={{
                    root:classes.dialogTitleRoot
                  }}
                >{title}</DialogTitle>
                
              <DialogContent style={{marginBottom:10}}>
                  
                {Object.keys(errors).length>0 && <CCCUPSErroNotification errorList={errors} open={Object.keys(errors).length>0}/>}
                  {formSchema && <CCUPSFormElements formSchema={formSchema} model={model} values={values} errors={errors} touched={touched} handleChange={handleChange}
                  isSubmitting={isSubmitting} handleBlur={handleBlur} handleSubmit={handleSubmit} cancelAction={handleClose}/> }
                 
              </DialogContent>
           
              {/* <CCUPSProgress
                open={isSubmitting}
                displayText="Saving Please wait..."
              /> */}
              <DialogActions>
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
              </DialogActions>
              </Dialog>
              
            )}
          </Formik>
         
             
          </MuiPickersUtilsProvider>

      </div>
    )
}


CCUPSFormDialog.propTypes = {
  validationScheme:PropTypes.object.isRequired,
  // update,
  model:PropTypes.object.isRequired,
  returnUrl:PropTypes.string,
  resourceName:PropTypes.string.isRequired,
  handleSubmit:PropTypes.func

}
export default CCUPSFormDialog
