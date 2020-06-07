import React, { useState } from 'react'
import * as Yup from 'yup';
import { createTextBox, createCheckBox, createDropDown } from '../components/CCUPSFormElement'




export const Type={
  text:"text",
  bool:"bool",
  object:"object",
  

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
const config=[
  createField("card_number","Card Nnumber",Type.text)
  ,createField("reference_no","Reference Number",  Type.text)
  ,createField("first_name","First Name",  Type.text)
  ,createField("last_name","Last Name",  Type.text)
  ,createField("middle_name","Middle Name",  Type.text)
  ,createField("product", "Product", Type.object,"api/dd/products",null)
  ,createField("institution","Institution",  Type.object,"api/dd/institutions",null)
  ,createField("merchant", "Merchant", Type.bool)
  // ,createField("product", "Product", Type.object,null,[{id:1,name:"BDO GOLD"},{id:2,name:"BDO PLATINUM"}])
//   
]
const createElement=(fieldName,label,type,itemsUrl,menuItems)=>{
  switch(type) {
    case 'text':
      ccupsFormModel[fieldName]="";
    return  createTextBox(fieldName,label)
      break;
    case 'bool':
      ccupsFormModel[fieldName]=false;
      return  createCheckBox(fieldName,label)
      break;
    case 'object':
      ccupsFormModel[fieldName]=0
      
      // ccupsFormModel[fieldName]='0';
        return  createDropDown(fieldName,label,itemsUrl,menuItems)
        break;
    default:
      ccupsFormModel[fieldName]="";
      return  createTextBox(fieldName,label)
  }

 }
export const createFormConfig=(pconfig)=>{
  let formElements=[];
    for(var item in pconfig) {
      
    //  displayFields(pconfig[item]);
      formElements.push(createElement(pconfig[item].fieldName,pconfig[item].label,
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


// //Validaton
// const ApplicationFormValidation = Yup.object().shape({
//   card_number: Yup.string()
//     //   .min(2, 'Card Number Too Short!')
//     .max(50, 'Card Number Too Long!')
//     .required('Card Number Required!'),

//   last_name: Yup.string()
//     .max(50, 'Last Name Too Long!')
//     .required('Last Name Required'),

//   first_name:Yup.string()
//     .max(50, 'First Name Too Long!')
//     .required('First Name Required'),

//   middle_name:Yup.string()
//     .max(50, 'Middle Name Too Long!')
//     .required('Middle Name Required'),

//   reference_no:Yup.string()
//     .max(50, 'Reference Number Too Long!')
//     .required('Reference Number Required'),
//   // email: Yup.string()
//   //   .email('Invalid email')
//   //   .required('Required'),
// });

// export const ApplicationFormConfig=
//     {
//         validationSchema:ApplicationFormValidation,
//         model:ccupsFormModel,
//         formElements:createFormConfig(config)
//         // [
//         //     createTextBox("card_number","Card Number"),
//         //     createTextBox("reference_no","Reference Number"),
//         //     createTextBox("first_name","First Name"),
//         //     createTextBox("last_name","Last Name"),
//         //     createTextBox("middle_name","Middle Name"),
//         //     createDropDown("product","Product","api/dd/products",null),
//         //     createDropDown("institution","Institution","api/dd/institutions",null),
//         //     createCheckBox("merchant","Merchant"),
//         //     //  {label:"Date of Birth", formControl:"date",name:"dob"},
//         // ]
    
//     }

    
    
