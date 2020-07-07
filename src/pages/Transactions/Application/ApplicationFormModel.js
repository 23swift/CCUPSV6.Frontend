import React, { useState } from 'react'
import * as Yup from 'yup';
import { createTextBox, createCheckBox, createDropDown, createDropDownNumber, createHidden } from '../../../components/CCUPSFormElement'
import { createField, FormElementType,createFormElement } from '../../../components/CCUPSFormHelper';
import { GetObjectFromLocalStorage, GetAppFromLocalStorage, GetSelectedInstitution, getSelfLink, getResource } from '../../../components/CCUPSHelper';


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

export const formConfig=(institution)=>{
  
  // institution.links.find(getSelfLink)
  
  return [
  
  // createField("card_number","Card Number *",FormElementType.text)
  createTextBox("card_number","Card Number *")
  ,createDropDownNumber("card_product", "Card Product",null,[{id:19,name:"PHP"},{id:20,name:"USD"}])
  ,createTextBox("reference_no","Reference Number *")
  ,createTextBox("first_name","First Name *")
  ,createTextBox("last_name","Last Name *")
  ,createTextBox("middle_name","Middle Name *")
  ,createDropDown("product", "Product",getResource('products')+"/search/findByInstitutionId?id="+institution.id,null)
  ,createCheckBox("merchant", "Merchant")
  ,createHidden("institution","Institution *",)
  // ,createField("product", "Product", Type.object,null,[{id:1,name:"BDO GOLD"},{id:2,name:"BDO PLATINUM"}])
//   
]
}

export const Model={
  "cardNumber":""
  ,"cardProduct":0
  ,referenceNo:""
  ,firstName:""
  ,lastName:""
  ,middleName:""
  // ,product:{id:0}
  ,product:""
  ,merchant:false
  ,institution:""
  // ,id:0
}


    
