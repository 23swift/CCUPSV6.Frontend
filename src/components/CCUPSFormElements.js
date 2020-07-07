import React, { useEffect, useState } from 'react'
import {    Box,    Divider,    Button,    IconButton,    Slide,    AppBar,    Grid,
    CircularProgress,    Typography,    Badge, TextField, InputLabel, Select, MenuItem, FormControl, FormControlLabel, Checkbox, InputBase, List, ListItem, ListItemIcon, ListItemText, ListSubheader,  } from "@material-ui/core";
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

const CCUPSFormElements = (props) => {
    const {values, errors,touched,formElements,handleChange,handleBlur,submitAction,resourceName,handleSubmit,formSchema,model,isSubmitting} = props;
  
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
      
    return (
        
            <Form noValidate >
                {

                        <Grid container spacing={2}>
                        
                           
                {model && formSchema && Object.keys(model).map((item,index)=>(
                    
                
                <Grid item xs={12} md={6} key={index} >
               
                            {formSchema && formSchema[item].format===undefined && (formSchema[item].type == "string" ||  formSchema[item].type == "integer") &&  (

                            <CCUPSTextBox  fieldName={item} errors={errors}  touched={touched} label={formSchema[item].title} handleChange={handleChange}
                            handleBlur={handleBlur} value={values[item]} />
                            
                            )}
                            {formSchema && !formSchema[item].hidden && formSchema[item].format==='uri' && formSchema[item].type === "string" && (
                           
                            <CCUPSDropDown label={formSchema[item].title}  fieldName={item}  control={item} errors={errors} touched={touched}
                            value={values[item]} handleChange={handleChange}  handleBlur={handleBlur}/>
                            )}
                            {formSchema[item].type == "boolean" && (
                                 <CCUPSCheckBox  name={item} handleChange={handleChange}   label={formSchema[item].title}                                                        // errors={errors}
                                    touched={touched} value={values[item]}                                                      
                                    />

                                )}
                               
                    </Grid> 
                ))}
                        
                      
                       
                </Grid>
                }
          <Box display="flex">
              <Box flexGrow={1}>

              </Box>
              <Box mr={1}>   
                    <Button color="secondary"  >
                        Cancel
                    </Button>
                </Box>
                <Box>   
                    <Button color="secondary" variant="contained" disableElevation onClick={()=> setConfirmationOpen(true)} style={{minWidth:100}}>
                        Save
                    </Button>
                </Box>
          </Box>
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
           
        
    )
}

export default CCUPSFormElements
