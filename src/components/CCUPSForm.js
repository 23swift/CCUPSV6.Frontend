import React, { useEffect, useState, Fragment } from "react";
import {
  Box,
  Divider,
  Button,
  IconButton,
  Slide,
  AppBar,
  Grid,
  CircularProgress,
  Typography,
  Badge,
} from "@material-ui/core";
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
  }
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
  const {
    values,
    errors,
    touched,
    formElements,
    handleChange,
    handleBlur,
    submitAction,
  } = props;
  


  return (
    <Grid container spacing={1}>
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




function CCUPSForm(props) {
  const { formConfig, submitUrl, validationScheme,legend,update,model,returnUrl } = props;
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

    setTimeout(() => {
       history.push(returnUrl);
    }, 2000);
    
  };
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showSuccessMessage = (message) => {
    enqueueSnackbar(message, {
      variant: "success",
      onExited: handleSnackExit(),
    });
  };
  const showErrorMessage = (pErrors) => {
  
    
        Object.values(pErrors).map(error => (
         
          Object.values(error).length==1 ?
          // console.log(Object.values(error).length)
          
                  enqueueSnackbar(error.id, {
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
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={model}
          // validate={validateValues}
          validationSchema={validationScheme}
          //  validateOnMount={true}
          onSubmit={(values, { setSubmitting,resetForm }) => {
            setTimeout(() => {
                //  alert(JSON.stringify(values, null, 2));
              
              
              callApi(submitUrl,values,apiAction).then(data => {
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
          }) => (
         
            <Form >
            
           {
            generateFormElements({
              values,
              errors,
              touched,
              formElements: formConfig,
              handleChange,
              handleBlur,
            })
            }
           
          

              <Slide
                direction="up"
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={700}
              >
                <AppBar
                  position="fixed"
                  className={classes.appBar}
                  elevation={1}
                >
                  <Divider />

                  <Box display="flex" padding={1}>
                    <Box flexGrow={1}></Box>
                    {errors && hasError(errors) &&
                      <Box mr={2}>
                        <IconButton  size="small" onClick={()=>showErrorMessage(errors)}>
                          <Badge badgeContent={Object.values(errors).length}  color="error">
                            <NotificationsIcon />
                          </Badge>
                        </IconButton>
                      </Box>
                    }
                    

                    {/* <Box style={{ marginRight: 3 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        className={classes.actionButton}
                      >
                        Cancel
                      </Button>
                    </Box> */}
                    {update && 
                        <Box style={{ marginRight: 3 }} >
                            <Button
                            variant="outlined"
                            color="inherit"
                          
                            startIcon={<ClearIcon />}
                            classes={{
                              outlined:classes.deleteButton
                              
                            }}

                            onClick={() =>
                          
                              validateForm().then((err) => {
                                if (isEmpty(err)) {
                                  setApiAction('DELETE');
                                  setConfirmationOpen(true);
                                  setErrorAlarmOPen(false);
                                } else {
                                  errors = err;
                                  setErrorAlarmOPen(true);
                                  setTouched(touchedAll(errors, touched));
                                }
                                errors = {};
                              })
                            }
                            disabled={isSubmitting || hasError(errors)}
                          >
                            Delete
                          </Button>
                        </Box>
                    }
                    <Box>
                      <Button
                        variant="contained"
                        disableElevation
                        color="secondary"
                        // size="small"
                        startIcon={<SaveIcon className={classes.buttonIcon}/>}
                        onClick={() =>
                          
                          validateForm().then((err) => {
                            if (isEmpty(err)) {
                             
                              setConfirmationOpen(true);
                              setErrorAlarmOPen(false);
                            } else {
                              errors = err;
                              setErrorAlarmOPen(true);
                              setTouched(touchedAll(errors, touched));
                            }
                            errors = {};
                          })
                        }
                        disabled={isSubmitting || hasError(errors)}
                        className={classes.actionButton}
                      >
                         Save
                      </Button>
                    </Box>
                  </Box>
                </AppBar>
              </Slide>
              <CCUPSConfirmationDialog
                open={confirmationOpen}
                handleClose={handleConfirmationClose}
                isSubmitting={isSubmitting}
                action={handleSubmit}
                message="Saving your entry, Please Confirm..."
              />
              <CCUPSProgress
                 open={isSubmitting}
               
                displayText="Saving Please wait..."
              />
              
            
            </Form>

             
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default CCUPSForm;
