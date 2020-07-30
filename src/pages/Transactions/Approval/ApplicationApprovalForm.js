import React, { useState, useEffect } from 'react'
import PageHeader from '../../../components/PageHeader'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment, Paper, Toolbar, Select, ListSubheader } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber, grey } from '@material-ui/core/colors';

import CCUPSForm from '../../../components/CCUPSForm';
import { ApplicationFormValidation,formConfig,  resetModel, getModel} from './ApplicationFormModel';
import {   faDatabase} from "@fortawesome/free-solid-svg-icons";
import * as Yup from 'yup';
import InstitutionSelection from '../../../components/InstitutionSelection';
import { GetSelectedInstitution, GetAppFromLocalStorage, getSelfLink, getProfile, getLinkedResource } from '../../../components/CCUPSHelper';
import { CCUPSPaper } from '../../../components/CCUPSPaper';
import CCUPSRestForm from '../../../components/CCUPSRestForm';

import { getLinkedResources } from './../../../components/CCUPSHelper';
const useStyles = makeStyles((theme)=>({
  
      closeBUtton:{
        color:grey[400],
        // opacity:.4
      }
      
}));




const ApplicationApprovalForm = () => {
  
    const classes = useStyles();
    const selectedApp=GetAppFromLocalStorage('selectedApp');
    // const selectedInstitution=GetSelectedInstitution();
    // Model.institution=selectedInstitution.links.find(getSelfLink).href;
   
    
const [formModel, setFormModel] = useState();
  
    useEffect(() => {
      
      
      if(selectedApp!=null){
       
        getLinkedResources(getModel(),selectedApp).then(model=>{
         
          setFormModel(model);
        });
        
      }else{
        
        setFormModel(getModel());

      }
      return () => {
        setFormModel(null);
        resetModel();
      }
    }, [])

        
    return (
        <div>
            <PageHeader title="Application Approval" icon={faDatabase} returnUrl="/applicationDataEntry"/>
          <Box mr={1} ml={1} component={Paper}  pb={2} pt={1} pr={2} pl={2}  elevation={1}

          >  
                   {formModel && <CCUPSRestForm model={formModel} resourceName="applications" returnUrl="/applicationApproval"  validationScheme={ApplicationFormValidation}   />}
              
              </Box>
        
    

               
        </div>
    )
}

export default ApplicationApprovalForm
