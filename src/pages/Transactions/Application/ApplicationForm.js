import React, { useState, useEffect } from 'react'
import PageHeader from '../../../components/PageHeader'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment, Paper, Toolbar, Select, ListSubheader } from '@material-ui/core'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { blue, amber, grey } from '@material-ui/core/colors';

import CCUPSForm from '../../../components/CCUPSForm';
import { ApplicationFormValidation,formConfig, Model } from './ApplicationFormModel';
import {   faDatabase} from "@fortawesome/free-solid-svg-icons";
import * as Yup from 'yup';
import InstitutionSelection from '../../../components/InstitutionSelection';
import { GetSelectedInstitution, GetAppFromLocalStorage, getSelfLink, getProfile } from '../../../components/CCUPSHelper';
import { CCUPSPaper } from '../../../components/CCUPSPaper';
import CCUPSRestForm from '../../../components/CCUPSRestForm';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { BootstrapInput } from './../../../components/CCUPSFormHelper';
import ProductDropDown from './components/ProductDropDown';
const useStyles = makeStyles((theme)=>({
  
      closeBUtton:{
        color:grey[400],
        // opacity:.4
      }
      
}));




const ApplicationForm = () => {
  
    const classes = useStyles();
    // const selectedApp=GetAppFromLocalStorage('selectedApp');
    // const selectedInstitution=GetSelectedInstitution();
    // Model.institution=selectedInstitution.links.find(getSelfLink).href;
    const [formSchema, setFormSchema] = useState();
    
    const [formModel, setFormModel] = useState(Model);

    //  if(selectedApp){setFormModel(selectedApp)}else{setFormModel(Model)}
  
    // const [hasSelectedApp, setHasSelectedApp] = useState(()=>{return selectedApp ? true :false});
    
    useEffect(() => {
    
     
         getProfile('applications')
      .then(data=>{  
         
        data.properties.institution.hidden=true;
          setFormSchema(data.properties);
          
       });
     
     
      return () => {
          // cleanup
      }
  }, [])
        
    return (
        <div>
            <PageHeader title="Application Data Entry" icon={faDatabase} returnUrl="/applicationDataEntry"
            subTitle="Create an entry"
            tools={
              <Box display="flex" flexWrap="nowrap"  p={1}>
                
                
  
                <Box ml={1} mr={1}>
                  <Button color="secondary" startIcon={<AddIcon />} disableElevation variant="contained"
                    // size="small" component={Link} to="/applicationForm" 
                   size="small"
                    >
                    New Application
                  </Button>
                
                </Box>
                
               
              </Box>
            }
            />
          <Box mr={1} ml={1} component={Paper}  pb={1} pt={1} pr={2} pl={2}  elevation={1}
         
          >
             
                      {/* <Typography variant="body1" color="primary"  style={{marginBottom:5,marginTop:5}} >{GetSelectedInstitution().name}</Typography>              */}
                    
                      {/* <ProductDropDown /> */}
             {/* <Divider style={{marginBottom:20,marginTop:10}}/> */}
           
           
           
            {/* {formModel &&  <CCUPSForm formConfig={formConfig(selectedInstitution)} validationScheme={ApplicationFormValidation} submitUrl="/api/data/applications" 
              model={formModel} returnUrl="/applicationDataEntry"
              update={hasSelectedApp}
            />} */}

                  {formSchema &&  <CCUPSRestForm model={formModel} resourceName="applications" formSchema ={formSchema} submitUrl="/api/data/applications" validationScheme={ApplicationFormValidation}   />}
             
              </Box>
        
            

               
        </div>
    )
}

export default ApplicationForm
