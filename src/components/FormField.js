import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { TextField ,Select} from 'formik-material-ui';
import { Typography } from '@material-ui/core';
const FormField = (props) => {
    return (
        <Field name={props.name}  component={TextField}   fullWidth variant="outlined" size="small"label={props.label} {...props}
        
        error={props.errors[props.name] || props.touched[props.name]}
        helperText={
          <ErrorMessage
            name={props.name}
            component={Typography}
            variant="caption"
          />
        }
        />
    )
}

export default FormField
