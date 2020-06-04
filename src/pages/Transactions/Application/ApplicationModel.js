import React, { useState } from 'react'
const  ApplicationModel={
    id:0,
    card_number:"",
    last_name:"",
    first_name:"",
    institution:"",
    middle_name:"",
    product:0,
    reference_no:"",
    merchant:false

}
// const getProducts =async ()=> {
//     let response = await fetch('/api/data/products');
//     let data = await response.json();

 
//     return data._embedded.products;

// }
export const ApplicationFormConfig=
    {
        model:ApplicationModel,ProductMenuItems:[],InstitutionMenuItems:[],
        formConfig:[
            {label:"Card Number", formControl:"text",name:"card_number"},
            {label:"Reference Number", formControl:"text",name:"reference_no"},
            {label:"Last Name", formControl:"text",name:"last_name"},
            {label:"Middle Name", formControl:"text",name:"middle_name"},
            {label:"First Name", formControl:"text",name:"first_name"},
            // {label:"Institution", formControl:"select",name:"institution",menuItems:[]},
            {label:"Product", formControl:"select",name:"product",
            menuItems:[]},
            {label:"Merchant", formControl:"checkBox",name:"merchant"},
            {label:"Date of Birth", formControl:"date",name:"dob"},
        ]
    
    }

    
    
