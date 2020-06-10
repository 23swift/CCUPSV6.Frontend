import React, { useState } from 'react'
import * as Yup from 'yup';
import { createTextBox, createCheckBox, createDropDown } from '../../../components/CCUPSFormElement'
import { createField, Type } from '../../../components/CCUPSFormHelper';


//Validaton
export const ApplicationFormValidation = Yup.object().shape({
  card_number: Yup.string()
  .trim()
  .matches('^[0-9]+$' , 'Card Number is not in correct format')
  .min(16, 'Card Product must be 16 digit!')
  .required('Card Number Required!'),
   
  card_product: Yup.number()
  .min(1, 'Card Product Required!'),
    // .max(50, 'Card Number Too Long!')
    // .required('Card Number Required!'),

  last_name: Yup.string()
    .max(50, 'Last Name Too Long!')
    .required('Last Name Required'),

  first_name:Yup.string()
    .max(50, 'First Name Too Long!')
    .required('First Name Required'),

  middle_name:Yup.string()
    .max(50, 'Middle Name Too Long!')
    .required('Middle Name Required'),

  reference_no:Yup.string()
    .max(50, 'Reference Number Too Long!')
    .required('Reference Number Required'),

    institution:Yup.lazy(value => {
      switch (typeof value) {
        case 'object':
          return Yup.object().required('Institution Required'); // schema for object
        case 'number':
          return Yup.number().min(1,'Institution Required'); // schema for string
        default:
          return Yup.mixed(); // here you can decide what is the default
      }
    })
   
  // email: Yup.string()
  //   .email('Invalid email')
  //   .required('Required'),
});

export const formConfig=[
  createField("card_number","Card Number *",Type.text)
  ,createField("card_product", "Card Product", Type.number,null,[{id:19,name:"PHP"},{id:20,name:"USD"}])
  ,createField("reference_no","Reference Number *",  Type.text)
  ,createField("first_name","First Name *",  Type.text)
  ,createField("last_name","Last Name *",  Type.text)
  ,createField("middle_name","Middle Name *",  Type.text)
  ,createField("product", "Product", Type.object,"api/dd/products",null)
  ,createField("merchant", "Merchant", Type.bool)
  ,createField("institution","Institution *",  Type.hidden,"api/dd/institutions",null, JSON.parse(localStorage.getItem('selectedInst')))
  // ,createField("product", "Product", Type.object,null,[{id:1,name:"BDO GOLD"},{id:2,name:"BDO PLATINUM"}])
//   
]
export const formConfigWithValues=()=>{ 
const selectedApp=JSON.parse(localStorage.getItem('selectedApp'));

if(selectedApp){
  console.log(selectedApp);
  
   return [
  createField("card_number","Card Number *",Type.text,selectedApp.card_number)
  ,createField("card_product", "Card Product", Type.number,null,[{id:19,name:"PHP"},{id:20,name:"USD"}],selectedApp.card_product)
  ,createField("reference_no","Reference Number *",  Type.text,selectedApp.reference_no)
  ,createField("first_name","First Name *",  Type.text,selectedApp.first_name)
  ,createField("last_name","Last Name *",  Type.text,selectedApp.last_name)
  ,createField("middle_name","Middle Name *",  Type.text,selectedApp.middle_name)
  ,createField("product", "Product", Type.object,"api/dd/products",null,selectedApp.product)
  ,createField("merchant", "Merchant", Type.bool,selectedApp.merchant)
  ,createField("institution","Institution *",  Type.hidden,"api/dd/institutions",null, JSON.parse(localStorage.getItem('selectedInst')))
  // ,createField("product", "Product", Type.object,null,[{id:1,name:"BDO GOLD"},{id:2,name:"BDO PLATINUM"}])
//   
]
}
 
}

    
    
