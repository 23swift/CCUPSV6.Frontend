import React, { useState } from 'react'
import * as Yup from 'yup';

//Validaton
export const ApplicationFormValidation = Yup.object().shape({
  cardNumber: Yup.string()
  .trim()
  .matches('^[0-9]+$' , 'Card Number is not in correct format')
  .min(16, 'Card Product must be 16 digit!')
  .required('Card Number Required!'),
   
  cardProduct: Yup.number()
  .min(1, 'Card Product Required!'),
    // .max(50, 'Card Number Too Long!')
    // .required('Card Number Required!'),

  lastName: Yup.string()
    .max(50, 'Last Name Too Long!')
    .required('Last Name Required'),

  firstName:Yup.string()
    .max(50, 'First Name Too Long!')
    .required('First Name Required'),

  middleName:Yup.string()
    .max(50, 'Middle Name Too Long!')
    .required('Middle Name Required'),

  referenceNo:Yup.string()
    .max(50, 'Reference Number Too Long!')
    .required('Reference Number Required'),
    product:Yup.string().required("Product Required")

    
});



let  Model={
  product:"",
  cardNumber:""
  ,cardProduct:0
  ,referenceNo:""
  ,firstName:""
  ,lastName:""
  ,middleName:""
  // ,product:{id:0}
  
  ,merchant:false
  // ,institution:""
  // ,id:0
}
export const getModel=()=>{ 
  return Model
}

export const resetModel=()=>{

  Model={
    product:"",
    cardNumber:""
    ,cardProduct:0
    ,referenceNo:""
    ,firstName:""
    ,lastName:""
    ,middleName:""
    // ,product:{id:0}
    
    ,merchant:false
    // ,institution:""
    // ,id:0
  }

}

    
