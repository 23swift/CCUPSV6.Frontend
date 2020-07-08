import React, { useState, useEffect } from 'react'
import  PageHeader  from "../../../components/PageHeader";
import { List, ListItem, ListItemText, Paper, Typography, FormGroup, Box, Grid, ListItemIcon, IconButton, Divider, Button } from '@material-ui/core';
import { CCUPSPaper } from '../../../components/CCUPSPaper';
import SearchIcon from '@material-ui/icons/Search';
import InstitutionMaster from './components/InstitutionMaster';

import AddIcon from '@material-ui/icons/Add';

import CCUPSFormDialog from '../../../components/CCUPSFormDialog';
import * as Yup from 'yup';
import { createTextBox } from '../../../components/CCUPSFormElement';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import ProductList from './components/ProductList';
import { getSelfLink, getResource, getProfile } from '../../../components/CCUPSHelper';
import { callApi } from '../../../components/CCUPSApiService';

const formModel={
    code:'',
    name:'',
    merchantId:''
}


  export const institutionFormValidation = Yup.object().shape({
    code: Yup.string()
    .trim()
    .required('Code Required!'),

    name: Yup.string()
    .trim()
    .required('Name Required!'),
  });


const InstitutionReference = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dataRows, setDataRows] = useState();
    const [createdEntity, setCreatedEntity] = useState();

    const handleOnClose=(value)=>{
      setCreatedEntity(value);
      setDialogOpen(false);
    }
    const handleOnSubmit=(values)=>{
      return callApi(getResource('institutions'),values,'POST').then(data=>{
          setCreatedEntity(data);
      });
  }
    useEffect(() => {
        fetch(getResource("institutions",'withProducts'))
      .then(res => res.json())
      .then( (result) => { setDataRows(result.content); },
             (error) => { console.log(error); }
      );

     
        
        return () => {
            // cleanup
        }
    }, [createdEntity])
    return (
        <div>
            <PageHeader title="Institution Products"  icon={faTools} tools={
            <Box display="flex" flexDirection="row">
                <Box flexGrow={1}></Box>
                <Box mr={1}>
                    <Button
                    color="secondary"
                    variant="outlined"
                    startIcon={<SearchIcon />}
                    size="small"
                    >
                    Search
                    </Button>
                    
            </Box>
            <Box>
                <Button variant="contained" size="small" color="secondary" disableElevation startIcon={<AddIcon/>}
                onClick={()=>setDialogOpen(true)}>Create Institution</Button>

              
            </Box></Box>
                   }/>    
            

            <CCUPSPaper>
          
                <div  style={{marginLeft:10, marginRight:10,marginTop:25 }}>


                <Grid container spacing={1} >
                {dataRows && dataRows.map((item,index)=>(
                        <Grid item xs={12} md={12} key={index}>
                                <InstitutionMaster name={item.name} code={item.code} institution={item}>
                                    <ProductList master={item} />
                                </InstitutionMaster>

                                
                        </Grid>


                ))}
                    </Grid>
                    
                   
                      
                </div>
                
            </CCUPSPaper>
           
           {/* <InstitutionDialog open={dialogOpen} handleClose={()=>setDialogOpen(false)} setCreatedEntity={setCreatedEntity}/> */}

          { <CCUPSFormDialog title="Create Institution Entry" resourceName="institutions" validationScheme={institutionFormValidation} model={formModel}
           model={formModel} open={dialogOpen} handleClose={handleOnClose} handleOnSubmit={handleOnSubmit} />}
            
        </div>
    )
}

export default InstitutionReference
