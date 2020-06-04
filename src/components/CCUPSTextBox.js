import React, { useEffect } from 'react'
import {  Field, ErrorMessage, useFormik } from 'formik';
import { TextField } from 'formik-material-ui';
import { Typography,  InputAdornment, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useSnackbar } from 'notistack';
const CCUPSTextBox = (props) => {
    const { errors, touched,handleChange,handleBlur,fieldName,label} = props;
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    // useEffect(() => {
    //     if(errors[fieldName] || touched[fieldName] ){
    //          enqueueSnackbar(errors[fieldName], { 
    //             variant: 'error',
    //         });
    //     }
       
    //     return () => {
    //       // cleanup
    //     }
    //   }, [errors[fieldName] && touched[fieldName]])

    const showErrorMessage=(message)=>{
        enqueueSnackbar(message, { 
                        variant: 'error',
                    });

    }

    return (
        <div>
              {/* <TextField  name={fieldName}  fullWidth variant='outlined' size="small" onChange={handleChange} onBlur={handleBlur} onTouchEnd={handleBlur}
                          label={label}
                          error={errors[fieldName] && touched[fieldName] }
                        //   helperText={<ErrorMessage name={fieldName} component={Typography} variant="caption" />}
                        InputProps={{
                            startAdornment: 
                            errors[fieldName] && touched[fieldName] ?
                            <InputAdornment position="start">
                                        <IconButton onClick={()=>showErrorMessage(errors[fieldName])} size="small">
                                            <InfoIcon fontSize="small" color="error" />
                                        </IconButton>
                                            
                            </InputAdornment>:
                            ""
                          }}
                          
                          
                        /> */}
                        <Field name={fieldName} component={TextField}  fullWidth   variant="outlined"
                              size="small"  label={label}   error={errors[fieldName] || touched[fieldName]}
                              helperText={
                                <ErrorMessage
                                  name={fieldName}
                                  component={Typography}
                                  variant="caption"
                                />
                              }
                            />

        </div>
           
       
    )
}

export default CCUPSTextBox
