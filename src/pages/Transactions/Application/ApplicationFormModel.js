import React, { useState } from 'react'
import * as Yup from 'yup';
import { createTextBox, createCheckBox, createDropDown } from '../../../components/CCUPSFormElement'
import { createField, Type } from '../../../components/CCUPSFormHelper';


//Validaton
export const ApplicationFormValidation = Yup.object().shape({
  card_number: Yup.string()
    //   .min(2, 'Card Number Too Short!')
    .max(50, 'Card Number Too Long!')
    .required('Card Number Required!'),

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
  createField("card_number","Card Nnumber *",Type.text)
  ,createField("reference_no","Reference Number *",  Type.text)
  ,createField("first_name","First Name *",  Type.text)
  ,createField("last_name","Last Name *",  Type.text)
  ,createField("middle_name","Middle Name *",  Type.text)
  ,createField("product", "Product", Type.object,"api/dd/products",null)
  ,createField("institution","Institution *",  Type.object,"api/dd/institutions",null)
  ,createField("merchant", "Merchant", Type.bool)
  // ,createField("product", "Product", Type.object,null,[{id:1,name:"BDO GOLD"},{id:2,name:"BDO PLATINUM"}])
//   
]

    
    
