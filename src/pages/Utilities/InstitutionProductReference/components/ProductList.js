import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemIcon, Grid, ListItemText, Divider, Button } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';
import AddIcon from '@material-ui/icons/Add';
import { createTextBox } from '../../../../components/CCUPSFormElement';

import * as Yup from 'yup';
import { callApi } from '../../../../components/CCUPSApiService';
import CCUPSFormDialog from '../../../../components/CCUPSFormDialog';
import { getSelfLink, getResource, getProfile, getActionUrl } from '../../../../components/CCUPSHelper';
import ProductDialog from './ProductDialog';

const formModel={
    code:'',
    name:'',
    
}

   const productFormValidation = Yup.object().shape({
    code: Yup.string()
    .trim()
    .required('Code Required!'),

    name: Yup.string()
    .trim()
    .required('Name Required!'),
  });
  
const ProductList = (props) => {
    const{master}=props;
    const [dataRows, setDataRows] = useState();
    const [createdEntity, setCreatedEntity] = useState();
    const [dialogOpen, setDialogOpen] = useState(false);
   const [formSchema, setFormSchema] = useState();
    // formModel.institution=master.links.find(getSelfLink).href;


    const handleOnClose=(value)=>{
        setCreatedEntity(value);
        setDialogOpen(false);
      }
  const handleOnSubmit=(values)=>{
     values.institution=getSelfLink( master);
        return callApi(getActionUrl('products'),values,'POST').then(data=>{
            console.log(values);
            setCreatedEntity(data);
            
        });
      
  }
    useEffect(() => {


    getResource("products").then(href=>{
        // console.log(result);
       
        fetch(href+"/search/findByInstitutionId?id="+ master.id)
        .then(res => res.json())
        .then((result) => { setDataRows(result.content); }, (error) => {  console.log(error);});

        getProfile('products')
        .then(data=>{ setFormSchema(data.properties); });
    });
        
        return () => {
            // cleanup
            // setCreatedEntity({});
        }
    }, [createdEntity])
    return (
        <div>
             <Button color="primary" size="small" startIcon={<AddIcon />} onClick={()=>setDialogOpen(true)}>
                                                            Add Product
                                                        </Button>
             <List dense style={{padding:0,marginBottom:3}} >
                                      <Grid container spacing={0}>
                                          {dataRows && dataRows.map((item,index)=>(

                                        <Grid item md={2} p={0} key={index}>
                                            <ListItem button style={{padding:2,borderRadius:4}}>
                                                <ListItemIcon style={{marginRight:0}}>
                                                    <AdjustIcon fontSize="small" color="secondary"/>
                                                </ListItemIcon>
                                                <ListItemText style={{marginLeft:0,fontSize:13}} primary={item.name}/>
                                            </ListItem>
                                           
                                          </Grid>
                                          ))}
                                          
                                          
                                      </Grid>
                                            
                                            
                                            
                                            
                                        </List>
                                        <CCUPSFormDialog resourceName="products"  title="Create Product Entry" formSchema={formSchema} open={dialogOpen} submitUrl={getResource('products')} validationScheme={productFormValidation} model={formModel} handleClose={handleOnClose} handleOnSubmit={handleOnSubmit} />
                
        </div>
    )
}

export default ProductList
