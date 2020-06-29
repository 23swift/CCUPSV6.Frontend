import React, { useState } from 'react'
import * as Yup from 'yup';
import { createTextBox, createCheckBox, createDropDown, createDropDownNumber, createHidden } from '../../../components/CCUPSFormElement'
import { createField, FormElementType,createFormElement } from '../../../components/CCUPSFormHelper';
import { GetObjectFromLocalStorage, GetAppFromLocalStorage, GetSelectedInstitution } from '../../../components/CCUPSHelper';


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


    product:Yup.object({

      id: Yup.number().default(0).min(1,'Product Required'),
    })
    // product:Yup.lazy(value => {
    //   switch (typeof value) {
    //     case 'object':
    //       return Yup.object().required('Product Required'); // schema for object
    //     case 'number':
    //       return Yup.number().min(1,'Product Required'); // schema for string
    //     default:
    //       return Yup.mixed(); // here you can decide what is the default
    //   }
    // })
   
  // email: Yup.string()
  //   .email('Invalid email')
  //   .required('Required'),
});

export const formConfig=[
  
  // createField("card_number","Card Number *",FormElementType.text)
  createTextBox("card_number","Card Number *")
  ,createDropDownNumber("card_product", "Card Product",null,[{id:19,name:"PHP"},{id:20,name:"USD"}])
  ,createTextBox("reference_no","Reference Number *")
  ,createTextBox("first_name","First Name *")
  ,createTextBox("last_name","Last Name *")
  ,createTextBox("middle_name","Middle Name *")
  ,createDropDown("product", "Product","/api/dd/products",null)
  ,createCheckBox("merchant", "Merchant")
  ,createHidden("institution","Institution *")
  // ,createField("product", "Product", Type.object,null,[{id:1,name:"BDO GOLD"},{id:2,name:"BDO PLATINUM"}])
//   
]

export const Model={
  card_number:""
  ,card_product:0
  ,reference_no:""
  ,first_name:""
  ,last_name:""
  ,middle_name:""
  ,product:{id:0}
  ,merchant:false
  ,institution:{}
  ,id:0
}


    
