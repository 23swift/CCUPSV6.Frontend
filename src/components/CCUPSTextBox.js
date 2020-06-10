import React, { useEffect, Fragment } from 'react'
import {  Field, ErrorMessage, useFormik } from 'formik';
// import { TextField } from 'formik-material-ui';
import {TextField, Typography,  InputAdornment, IconButton, Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { useSnackbar } from 'notistack';
import AccountCircle from '@material-ui/icons/AccountCircle';

const CCUPSTextBox = (props) => {
    const { errors, touched,handleChange,handleBlur,fieldName,label} = props;
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    useEffect(() => {
        // if(errors[fieldName] && touched[fieldName] ){
        //      enqueueSnackbar(errors[fieldName], { 
        //         variant: 'error',
        //     });
        // }
       
        return () => {
          // touched[fieldName]=false;
          // errors[fieldName]=null;
        }
      }, [errors[fieldName] && touched[fieldName]])


    
      const showErrorMessage=(message)=>{
        enqueueSnackbar(message, { 
                         variant: 'error',
                       
                    });

    }

    return (
        <div>
              <TextField   name={fieldName}   fullWidth variant='outlined' size="small" 
              onChange={handleChange} onBlur={handleBlur} 
                          label={label}
                          error={errors[fieldName] && true  }
                          // error={errors[fieldName] && true }
                          // helperText={errors[fieldName]}
                        // InputProps={{
                        //     endAdornment: 
                        //     errors[fieldName] && touched[fieldName] ?
                        //     // errors[fieldName] && true ?
                        //     <InputAdornment position="end">
                        //                 <IconButton onClick={()=>showErrorMessage(errors[fieldName])} size="small">
                        //                     <InfoIcon fontSize="small" color="error" />
                        //                 </IconButton>
                                            
                        //     </InputAdornment>:
                        //     ""
                        //   }}
                          
                          
                        />
                       

        </div>
           
       
    )
}

export default CCUPSTextBox
