import React, { useState, useEffect } from 'react'
import PageHeader from '../../../components/PageHeader'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment, Paper, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber } from '@material-ui/core/colors';

import CCUPSForm from '../../../components/CCUPSForm';
import { ApplicationFormValidation,formConfig, formConfigWithValues } from './ApplicationFormModel';
import { createField,Type } from '../../../components/CCUPSFormHelper';
import * as Yup from 'yup';
import InstitutionSelection from '../../../components/InstitutionSelection';
import { GetSelectedInstitution } from '../../../components/CCUPSHelper';
const useStyles = makeStyles((theme)=>({
  
      closeBUtton:{
        color:theme.palette.common.black,
        opacity:.4
      }
      
}));


const ApplicationForm = () => {
    const classes = useStyles();
 
    return (
        <div>
            <PageHeader title="Application Data Entry" 
            subTitle="Create an entry"
            tools={
                <Box display="flex" flexWrap="nowrap" mt={1} pb={1}>
             <Box mr={1}>
                <Divider orientation="vertical" />
              </Box>
              
              <Box >
               
                <Button variant="outlined" className={classes.closeBUtton}
                  component={Link}
                  to="/applicationDataEntry"
                  size="small"
                  style={{ minWidth: 30,minHeight:30,padding:2 }}
                >
                  <CloseIcon  />
                </Button>
                
              </Box>
             
            </Box>
            }
            />
          
              <Box mr={2} ml={2} component={Paper} p={2} pt={1} variant="outlined" >
             
                      <Typography variant="h6" color="primary"  style={{marginBottom:35,marginTop:5}} >{GetSelectedInstitution().name}</Typography>
             
             
           
             {/* <CCUPSForm formConfig={formConfig} validationScheme={ApplicationFormValidation} submitUrl="/api/applications" legend={GetSelectedInstitution().name}/> */}
           
             <CCUPSForm formConfig={formConfigWithValues()} validationScheme={ApplicationFormValidation} submitUrl="/api/applications" legend={GetSelectedInstitution().name}/>
             
              </Box>

               
        </div>
    )
}

export default ApplicationForm
