import React, { useState } from 'react'
import * as Yup from 'yup';
import { createTextBox, createCheckBox, createDropDown, createDropDownNumber } from '../components/CCUPSFormElement'
import { createHidden } from './CCUPSFormElement';
import { withStyles } from '@material-ui/styles';
import { InputBase } from '@material-ui/core';




export const FormElementType={
  text:"text",
  bool:"bool",
  select:"select",
  selectObject:'selectObject',
  number:"number",
  hidden:"hidden"
  

}


const createElements=(obj)=> {
  let formElements=[];
  let element={};
  
  for(var key in obj) {
  if (obj.hasOwnProperty(key)) {
      // console.log(key + " -> " + obj[key]);
    //  /element[key]
      // if(config[field]==Type.text){
      //   formElements.push()
      // }
  }
  }
  return true;
}

export const ccupsFormModel={}

 const createModel=(fieldName, initialValue)=>{
  let model={};
 
  return model[fieldName]=initialValue;

 }

 export const createField=(fieldName,label,type,itemsUrl,menuItems)=>{
  
  return {fieldName,label,type,itemsUrl,menuItems};
}
// const config=[
//   createField("card_number","Card Nnumber",Type.text)
//   ,createField("reference_no","Reference Number",  Type.text)
//   ,createField("first_name","First Name",  Type.text)
//   ,createField("last_name","Last Name",  Type.text)
//   ,createField("middle_name","Middle Name",  Type.text)
//   ,createField("product", "Product", Type.object,"api/dd/products",null)
//   ,createField("institution","Institution",  Type.object,"api/dd/institutions",null)
//   ,createField("merchant", "Merchant", Type.bool)
//   // ,createField("product", "Product", Type.object,null,[{id:1,name:"BDO GOLD"},{id:2,name:"BDO PLATINUM"}])
// //   
// ]
 const createFormElement=(fieldName,label,type,itemsUrl,menuItems)=>{
  // console.log(defaultValue);

  switch(type) {
    // case 'text':
     
    // return  createTextBox(fieldName,label)
    // break;
    case 'bool':
     
    
      return  createCheckBox(fieldName,label)
      break;
    case 'selectObject':
      // ccupsFormModel[fieldName]=0
     

        return  createDropDown(fieldName,label,itemsUrl,menuItems)
        break;
    case 'select':
    
      // ccupsFormModel[fieldName]='0';
      
        return  createDropDownNumber(fieldName,label,itemsUrl,menuItems)
      
       
        break;
      case 'hidden':
        
            return  createHidden(fieldName,label,null,null)
            break;
    default:
     
      return  createTextBox(fieldName,label)
  }

 }
export const createFormConfig=(pconfig)=>{
  let formElements=[];
    for(var item in pconfig) {
      
    //  displayFields(pconfig[item]);
      formElements.push(createFormElement(pconfig[item].fieldName,pconfig[item].label,
      pconfig[item].type,pconfig[item].itemsUrl,pconfig[item].menuItems));

      // console.log(createElement(config[item].fieldName,config[item].label,
      // config[item].type,config[item].itemsUrl,config[item].menuItems));
      
    }
    

    return formElements;
}
//Model
const  ApplicationModel={
    id:0,
    card_number:"",
    last_name:"",
    first_name:"",
    institution:{},
    middle_name:"",
    product:{},
    reference_no:"",
    merchant:false,
    // dob:""

}


    
export const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);