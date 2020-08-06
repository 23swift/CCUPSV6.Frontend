import React, { useEffect, useState } from 'react'
import {    Box,    Divider,    Button,    IconButton,    Slide,    AppBar,    Grid,
    CircularProgress,    Typography,    Badge, TextField, InputLabel, Select, MenuItem, FormControl, FormControlLabel, Checkbox, InputBase, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Paper,  } from "@material-ui/core";
  import InfoIcon from "@material-ui/icons/Info";
  import { makeStyles, withStyles } from "@material-ui/styles";
import { getProfile } from './CCUPSHelper';
import CCUPSTextBox from './CCUPSTextBox';
import { Form } from 'formik';
import CCUPSDropDown from './CCUPSDropDown';
import { CCUPSPaper } from './CCUPSPaper';
import CCUPSConfirmationDialog from './CCUPSConfirmationDialog';
import CCUPSProgress from './CCUPSProgress';
import { useSnackbar } from 'notistack';
import CCUPSCheckBox from './CCUPSCheckBox';
import PropTypes from 'prop-types';
import CCUPSActionButton from './CCUPSActionButton';
import { blue } from '@material-ui/core/colors';
import CCUPSStatus from './CCUPSStatus';


const CCUPSFormElements = (props) => {
    const {values, errors,touched,formElements,handleChange,handleBlur,handleSubmit,formSchema,model,isSubmitting,
      resetForm,disabled} = props;
  
    const [confirmationOpen, setConfirmationOpen] = useState(false);

            

    const handleConfirmationClose = () => {
        setConfirmationOpen(false);
      };
      const handleSnackExit = () => {
        //setConfirmationOpen(false);
    
        setTimeout(() => {
        //    history.push(returnUrl);
        }, 2000);
        
      };
      
const actionButtonClick=(event,id)=>{

  setConfirmationOpen(true)
  console.log(event.target);
  

}

    return (
        
            <Form noValidate >
                {

                        <Grid container spacing={2} style={{marginTop:5}}>
                        
                           
                {model && formSchema && Object.keys(model).map((item,index)=>(
                    
                
                <Grid item xs={12} md={item=="status"?12:6} key={index} >

                            {formSchema &&   item=="status" && values[item]!=="" &&

                                
                                // <Alert severity="info">{values[item]}</Alert>
                              
                                <CCUPSStatus displayText= {values[item]}/>
                            }
                            {formSchema && formSchema[item] && formSchema[item].format===undefined && (formSchema[item].type == "string" ||  formSchema[item].type == "integer") &&  
                               item!=="status" &&
                            (

                            <CCUPSTextBox disabled={disabled}  fieldName={item} errors={errors}  touched={touched} label={formSchema[item].title} handleChange={handleChange}
                            handleBlur={handleBlur} value={values[item]} />
                            
                            )}
                            {formSchema && formSchema[item] && formSchema[item].format=="uri" && formSchema[item].type === "string" && (
                           
                            <CCUPSDropDown  disabled={disabled} label={formSchema[item].title}  fieldName={item}  control={item} errors={errors} touched={touched}
                            value={values[item]} handleChange={handleChange}  handleBlur={handleBlur}/>
                            )}
                            {formSchema && formSchema[item] && formSchema[item].type == "boolean" && (
                                 <CCUPSCheckBox disabled={disabled}  name={item} handleChange={handleChange}   label={formSchema[item].title}                                                        // errors={errors}
                                    touched={touched} value={values[item]}                                                      
                                    />

                                )}
                               
                    </Grid> 
                ))}
                        
                      
                       
                </Grid>
                }
          
          {/* <CCUPSConfirmationDialog
                      open={confirmationOpen}
                      handleClose={handleConfirmationClose}
                      isSubmitting={isSubmitting}
                      action={handleSubmit}
                      message="Saving your entry, Please Confirm..."
                    />
                    <CCUPSProgress
                      open={isSubmitting}
                    
                      displayText="Saving Please wait..."
                    /> */}
            </Form>
           
        
    )
}


CCUPSFormElements.propTypes = {

  values:PropTypes.object.isRequired,
  errors:PropTypes.object.isRequired,
  touched:PropTypes.object.isRequired,
  
  // update,
  model:PropTypes.object.isRequired,
  // returnUrl:PropTypes.string,
  // resourceName:PropTypes.string.isRequired,
  // handleSubmit:PropTypes.func.isRequired,

}
export default CCUPSFormElements
