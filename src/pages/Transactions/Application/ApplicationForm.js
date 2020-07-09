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
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { BootstrapInput } from './../../../components/CCUPSFormHelper';
import ProductDropDown from './components/ProductDropDown';
import { getLinkedResources } from './../../../components/CCUPSHelper';
const useStyles = makeStyles((theme)=>({
  
      closeBUtton:{
        color:grey[400],
        // opacity:.4
      }
      
}));




const ApplicationForm = () => {
  
    const classes = useStyles();
    const selectedApp=GetAppFromLocalStorage('selectedApp');
    // const selectedInstitution=GetSelectedInstitution();
    // Model.institution=selectedInstitution.links.find(getSelfLink).href;
    // const Model={
    //   product:"",
    //   cardNumber:""
    //   ,cardProduct:0
    //   ,referenceNo:""
    //   ,firstName:""
    //   ,lastName:""
    //   ,middleName:""
    //   // ,product:{id:0}
      
    //   ,merchant:false
    //   // ,institution:""
    //   // ,id:0
    // }
    
    const [formModel, setFormModel] = useState();
  
    useEffect(() => {
      
      
      if(selectedApp!=null){
        console.log(selectedApp);
        
        getLinkedResources(getModel(),selectedApp).then(model=>{
          fetch(model.product).then(res=>res.json()).then(data=>{
            model.product=getSelfLink(data);
            setFormModel(model);
          });
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
            <PageHeader title="Application Data Entry" icon={faDatabase} returnUrl="/applicationDataEntry"
            subTitle="Create an entry"/>
          <Box mr={1} ml={1} component={Paper}  pb={2} pt={1} pr={2} pl={2}  elevation={1}
         
          >
             
                   {formModel && <CCUPSRestForm model={formModel} resourceName="applications"  validationScheme={ApplicationFormValidation}   />}
             
              </Box>
        
    

               
        </div>
    )
}

export default ApplicationForm
