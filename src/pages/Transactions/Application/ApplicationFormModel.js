import React, { useState } from 'react'
import * as Yup from 'yup';
import { createTextBox, createCheckBox, createDropDown } from '../../../components/CCUPSFormElement'
const  ApplicationModel={
    id:0,
    card_number:"",
    last_name:"",
    first_name:"",
    institution:"",
    middle_name:"",
    product:{id:0,name:""},
    reference_no:"",
    merchant:false,
    dob:""

}

const ApplicationFormValidation = Yup.object().shape({
    card_number: Yup.string()
    //   .min(2, 'Card Number Too Short!')
      .max(50, 'Card Number Too Long!')
      .required('Card Number Required'),
      last_name: Yup.string()
    //   .min(2, 'Last Name Too Short!')
      .max(50, 'Last Name Too Long!')
      .required('Last Name Required'),
    first_name:Yup.string()
    //   .min(2, 'First Name Too Short!')
      .max(50, 'First Name Too Long!')
      .required('First Name Required'),
    // email: Yup.string()
    //   .email('Invalid email')
    //   .required('Required'),
  });
export const ApplicationFormConfig=
    {
        validationSchema:ApplicationFormValidation,
        model:ApplicationModel,
        formElements:[
            createTextBox("card_number","Card Number"),
            createTextBox("reference_no","Reference Number"),
            createTextBox("first_name","First Name"),
            createTextBox("last_name","Last Name"),
            createTextBox("middle_name","Middle Name"),
            createDropDown("product","Product","api/dd/products",null),
            createCheckBox("merchant","Merchant"),
            //  {label:"Date of Birth", formControl:"date",name:"dob"},
        ]
    
    }

    
    
