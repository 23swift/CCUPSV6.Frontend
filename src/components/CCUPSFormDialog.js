import React,{useState} from 'react'

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
import { ConfirmationButton } from './theme/customTheme';

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
  

const generateFormElements = (props) => {
    const { values,errors,touched,formElements,handleChange,handleBlur,      submitAction,    } = props;
  
    return (
      <Grid container spacing={2}>
        {formElements.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            {item.formControl === "text" && (
              <CCUPSTextBox
                fieldName={item.name}
                errors={errors}
                touched={touched}
                label={item.label}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values[item.name]}
              />
            )}
            {item.formControl === "selectObject" && (
              <CCUPSDropDown
                label={item.label}
                fieldName={item.name}
                control={item}
                errors={errors}
                touched={touched}
                value={values[item.name]}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
             
            )}
             {item.formControl === "select" && (
              <CCUPSDropDownNumber
                label={item.label}
                fieldName={item.name}
                control={item}
                errors={errors}
                touched={touched}
                value={values[item.name]}
              />
            )}
            {item.formControl === "checkBox" && (
              <CCUPSCheckBox
                name={item.name}
                handleChange={handleChange}
                label={item.label}
                errors={errors}
                touched={touched}
                value={values[item.name]}
              />
            )}
            {item.formControl === "date" && (
              <CCUPSCalendar
                fieldName={item.name}
                label={item.label}
                errors={errors}
                touched={touched}
              />
            )}
          </Grid>
        ))}
      </Grid>
    );
  };

const CCUPSFormDialog = (props) => {
    const { formConfig, submitUrl, validationScheme,legend,update,model,returnUrl,handleClose,
      handleOnSubmit, open} = props;
  // let formConfiguration = createFormConfig(formConfig);

  
  const classes = useStyles();
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [errorAlarmOPen, setErrorAlarmOPen] = useState(false);
  const [apiAction, setApiAction] = useState(update?"PUT":"POST");
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
    return (
        <div >
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
       
          <Formik
            initialValues={model}
            // validate={validateValues}
            validationSchema={validationScheme}
            //  validateOnMount={true}
            onSubmit={(values, { setSubmitting,resetForm }) => {
              setTimeout(() => {
                  //  alert(JSON.stringify(values, null, 2));
                
                
                // callApi(submitUrl,values,apiAction).then(data => {
                //   // console.log(data); // JSON data parsed by `response.json()` call
                //   setSubmitting(false);
                //   showSuccessMessage("Entry Saved!");
                //   resetForm();
                //   handleClose(data);
                // },
                // (error) => {
                //   // showSubmitErrorMessage('An Error has occured! Please Coordinate with ITSD.');
                //   showSubmitErrorMessage(JSON.stringify(error, null, 2));
                //   setSubmitting(false);
                //   // handleClose(false);
                  
                // })
                handleOnSubmit(values).then(data => {
                    // console.log(data); // JSON data parsed by `response.json()` call
                    setSubmitting(false);
                    showSuccessMessage("Entry Saved!");
                    resetForm();
                    handleClose(data);
                  },
                  (error) => {
                    // showSubmitErrorMessage('An Error has occured! Please Coordinate with ITSD.');
                    showSubmitErrorMessage(JSON.stringify(error, null, 2));
                    setSubmitting(false);
                    // handleClose(false);
                    
                  })
                
              }, 2000);
            }}
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
              <Dialog style={{minWidth:800}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title"
              onExited={()=>{resetForm();setConfirmationOpen(false);}}
              maxWidth="md"
              fullWidth={true}
              >
               <Form >
                <DialogTitle id="form-dialog-title" color="#efefef"
                  classes={{
                    root:classes.dialogTitleRoot
                  }}
                >Create Entry</DialogTitle>
                
              <DialogContent style={{marginBottom:10}}>
                    {generateFormElements({
                      values,
                      errors,
                      touched,
                      formElements: formConfig,
                      handleChange,
                      handleBlur,
                    })
                    }
                
              </DialogContent>
              <DialogActions style={{backgroundColor:"#f2f2f2"}}>
              <Box display="flex"  p={1}  >
                <Box flexGrow={1}></Box>
                {errors && hasError(errors) &&
                        <Box mr={2}>
                          <IconButton color="inherit" color="secondary" size="small" onClick={()=>showErrorMessage(errors)}>
                            <Badge badgeContent={Object.values(errors).length}  color="error">
                              <NotificationsIcon />
                            </Badge>
                          </IconButton>
                        </Box>
                      }
                <Box mr={1}>

                   <Button onClick={handleClose} color="secondary"  variant={"outlined"} >
                    Cancel
                  </Button>
                  </Box>
                  {confirmationOpen ?  
                  <Box mr={1}>
                     <ConfirmationButton startIcon={<CheckIcon/>}  onClick={handleSubmit}>
                              Saving your entry, Please Confirm
                      </ConfirmationButton>
                      </Box>
                    :
                  
                  <Box>
                     <Button onClick={()=>setConfirmationOpen(true)} color="secondary" disableElevation  variant="contained">
                      Save Entry
                    </Button>
                  </Box>
                   
                   
                
                    }
                    

              </Box>
              </DialogActions>
             
              </Form>
              <CCUPSProgress
                open={isSubmitting}
                displayText="Saving Please wait..."
              />
              </Dialog>
              
             
             
           
          
            )}
          </Formik>
         
             
          </MuiPickersUtilsProvider>

      </div>
    )
}

export default CCUPSFormDialog
