import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { TextField ,Select} from 'formik-material-ui';
import { Typography } from '@material-ui/core';
const CCUPSTextBox = (props) => {
    const { errors, touched,fieldName,label} = props;
    return (
        
             <Field  name={fieldName} component={TextField} fullWidth variant='outlined' size="small" 
                          label={label}
                          error={errors[fieldName] || touched[fieldName] }
                          helperText={<ErrorMessage name={fieldName} component={Typography} variant="caption" />}
                          />
       
    )
}

export default CCUPSTextBox
