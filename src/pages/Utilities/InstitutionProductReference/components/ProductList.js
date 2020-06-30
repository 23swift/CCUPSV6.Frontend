import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemIcon, Grid, ListItemText, Divider, Button } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';
import AddIcon from '@material-ui/icons/Add';
import { createTextBox } from '../../../../components/CCUPSFormElement';

import * as Yup from 'yup';
import { callApi } from '../../../../components/CCUPSApiService';
import CCUPSFormDialog from '../../../../components/CCUPSFormDialog';

const formModel={
    // id:0,
    code:'',
    name:''
    
}
export const formConfig=[
  
    createTextBox("code","Code *"),
    createTextBox("name","Name *"),
    // createTextBox("merchant_Id","Merchant Id"),

  ]
  export const ApplicationFormValidation = Yup.object().shape({
    code: Yup.string()
    .trim()
    .required('Code Required!'),

    name: Yup.string()
    .trim()
    .required('Name Required!'),
  });
  
const ProductList = (props) => {
    const{masterId}=props;
    const [dataRows, setDataRows] = useState();
    const [createdEntity, setCreatedEntity] = useState();
    const [dialogOpen, setDialogOpen] = useState(false);
   

    const handleOnClose=(value)=>{
        setCreatedEntity(value);
        setDialogOpen(false);
      }
  const handleOnSubmit=(values)=>{
      
      return callApi('/api/products?id='+masterId,values,'POST').then(data=>{
     
          setCreatedEntity(data);
          
      });
  }
    useEffect(() => {
        fetch("/api/productsByInstitutionId?Id="+ masterId)
      .then(res => res.json())
      .then(
        (result) => {
         
          // console.log(result._embedded.applications);
          setDataRows(result);
        },
       
        (error) => {
         
          console.log(error);
          
        }
      )
        
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
                                        <CCUPSFormDialog open={dialogOpen} submitUrl="/api/products" validationScheme={ApplicationFormValidation} formConfig={formConfig} model={formModel} handleClose={handleOnClose} handleOnSubmit={handleOnSubmit} />
                
        </div>
    )
}

export default ProductList
