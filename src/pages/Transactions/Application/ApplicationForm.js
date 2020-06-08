import React, { useState, useEffect } from 'react'
import PageHeader from '../../../components/PageHeader'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber } from '@material-ui/core/colors';

import CCUPSForm from '../../../components/CCUPSForm';
import { ApplicationFormValidation,formConfig } from './ApplicationFormModel';
import { createField,Type } from '../../../components/CCUPSFormHelper';
import * as Yup from 'yup';
import InstitutionSelection from '../../../components/InstitutionSelection';
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
          
              <Box ml={1} mr={1} mt={2} >
             
                 <CCUPSForm formConfig={formConfig} validationScheme={ApplicationFormValidation} submitUrl="/api/applications"/>
             
              </Box>

               
        </div>
    )
}

export default ApplicationForm
