import React, { useState, useEffect } from 'react'
import PageHeader from '../../../components/PageHeader'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment, Paper, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber, grey } from '@material-ui/core/colors';

import CCUPSForm from '../../../components/CCUPSForm';
import { ApplicationFormValidation,formConfig, Model } from './ApplicationFormModel';
import {   faDatabase} from "@fortawesome/free-solid-svg-icons";
import * as Yup from 'yup';
import InstitutionSelection from '../../../components/InstitutionSelection';
import { GetSelectedInstitution, GetAppFromLocalStorage, getSelfLink } from '../../../components/CCUPSHelper';
import { CCUPSPaper } from '../../../components/CCUPSPaper';
import CCUPSRestForm from '../../../components/CCUPSRestForm';
const useStyles = makeStyles((theme)=>({
  
      closeBUtton:{
        color:grey[400],
        // opacity:.4
      }
      
}));




const ApplicationForm = () => {
  
    const classes = useStyles();
    const selectedApp=GetAppFromLocalStorage('selectedApp');
    const selectedInstitution=GetSelectedInstitution();
    Model.institution=selectedInstitution.links.find(getSelfLink).href;
   
    
    const [formModel, setFormModel] = useState(selectedApp?selectedApp:Model);

    //  if(selectedApp){setFormModel(selectedApp)}else{setFormModel(Model)}
   
    const [hasSelectedApp, setHasSelectedApp] = useState(()=>{return selectedApp ? true :false});
      
   
        
    return (
        <div>
            <PageHeader title="Application Data Entry" icon={faDatabase} returnUrl="/applicationDataEntry"
            subTitle="Create an entry"/>
          <Box mr={1} ml={1} component={Paper}  pb={1} pt={2} pr={2} pl={2}  elevation={1}>
             
                      <Typography variant="body1" color="primary"  style={{marginBottom:5,marginTop:5}} >{GetSelectedInstitution().name}</Typography>             
             <Divider style={{marginBottom:20}}/>
           
           
           
            {/* {formModel &&  <CCUPSForm formConfig={formConfig(selectedInstitution)} validationScheme={ApplicationFormValidation} submitUrl="/api/data/applications" 
              model={formModel} returnUrl="/applicationDataEntry"
              update={hasSelectedApp}
            />} */}

                    <CCUPSRestForm model={formModel} resourceName="applications"  />
             
              </Box>
        
            

               
        </div>
    )
}

export default ApplicationForm
