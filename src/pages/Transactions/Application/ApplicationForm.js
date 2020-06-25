import React, { useState, useEffect } from 'react'
import PageHeader from '../../../components/PageHeader'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment, Paper, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber } from '@material-ui/core/colors';

import CCUPSForm from '../../../components/CCUPSForm';
import { ApplicationFormValidation,formConfig, Model } from './ApplicationFormModel';

import * as Yup from 'yup';
import InstitutionSelection from '../../../components/InstitutionSelection';
import { GetSelectedInstitution, GetAppFromLocalStorage } from '../../../components/CCUPSHelper';
const useStyles = makeStyles((theme)=>({
  
      closeBUtton:{
        color:theme.palette.common.black,
        opacity:.4
      }
      
}));




const ApplicationForm = () => {
    const classes = useStyles();
    const selectedApp=GetAppFromLocalStorage('selectedApp');
    Model.institution=GetSelectedInstitution();
   
    
    const [formModel, setFormModel] = useState(selectedApp?selectedApp:Model);

    //  if(selectedApp){setFormModel(selectedApp)}else{setFormModel(Model)}
   
    const [hasSelectedApp, setHasSelectedApp] = useState(()=>{return selectedApp ? true :false});
      
   
        
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
          
              <Box mr={2} ml={2} component={Paper} p={2} pt={1}  >
             
                      <Typography variant="h6" color="primary"  style={{marginBottom:15,marginTop:5}} >{GetSelectedInstitution().name}</Typography>
             
             
           
             {/* <CCUPSForm formConfig={formConfig} validationScheme={ApplicationFormValidation} submitUrl="/api/applications" legend={GetSelectedInstitution().name}/> */}
           
            {formModel &&  <CCUPSForm formConfig={formConfig} validationScheme={ApplicationFormValidation} submitUrl="/api/applications" 
              model={formModel} returnUrl="/applicationDataEntry"
              update={hasSelectedApp}
            />}
             
              </Box>

               
        </div>
    )
}

export default ApplicationForm
