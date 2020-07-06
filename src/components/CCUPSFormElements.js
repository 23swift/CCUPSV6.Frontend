import React, { useEffect, useState } from 'react'
import {    Box,    Divider,    Button,    IconButton,    Slide,    AppBar,    Grid,
    CircularProgress,    Typography,    Badge, TextField, InputLabel, Select, MenuItem, FormControl, FormControlLabel, Checkbox,  } from "@material-ui/core";
  import InfoIcon from "@material-ui/icons/Info";
  import { makeStyles } from "@material-ui/styles";
import { getProfile } from './CCUPSHelper';
import CCUPSTextBox from './CCUPSTextBox';
import { Form } from 'formik';
import CCUPSDropDown from './CCUPSDropDown';

const CCUPSFormElements = (props) => {
    const {values, errors,touched,formElements,handleChange,handleBlur,submitAction,resourceName,handleSubmit,formSchema,model} = props;

    // console.log(formSchema);
    
    return (
        
            <Form onSubmit={handleSubmit}>
                {

                        <Grid container spacing={2}>
                           
                           
                {model && formSchema && Object.keys(model).map((item,index)=>(
                    
                
                <Grid item xs={12} md={6} key={index} >
               
                            {formSchema && formSchema[item].format===undefined && (formSchema[item].type == "string" ||  formSchema[item].type == "integer") &&  (

                            <CCUPSTextBox  fieldName={item} errors={errors}  touched={touched} label={formSchema[item].title} handleChange={handleChange}
                            handleBlur={handleBlur} value={values[item]} />
                            
                            )}
                            {formSchema && formSchema[item].format==='uri' && formSchema[item].type === "string" && (
                           
                            <CCUPSDropDown label={formSchema[item].title}  fieldName={item}  control={item} errors={errors} touched={touched}
                            value={values[item]} handleChange={handleChange}  handleBlur={handleBlur}/>
                            )}
                            {formSchema[item].type == "boolean" && (

                                                        <FormControlLabel
                                                        control={
                                                        <Checkbox
                                                            // onChange={handleChange}
                                                            // checked={value}
                                                            name={item}
                                                            // color="secondary"
                                                        />}
                                                        label={
                                                            <Typography
                                                            variant="body2"
                                                            color="primary"
                                                            >
                                                            {formSchema[item].title}
                                                            </Typography>
                                                        }
                                                        />

                                )}
                                {/* <p>{JSON.stringify (formSchema)}</p>
                            <p>{formSchema && formSchema['cardNumber'].type}</p>
                                <p>{JSON.stringify (item)}</p>
                                <p>{JSON.stringify (model)}</p> */}
                    </Grid> 
                ))}
                        
                </Grid>
                }
          

            </Form>
           
        
    )
}

export default CCUPSFormElements
