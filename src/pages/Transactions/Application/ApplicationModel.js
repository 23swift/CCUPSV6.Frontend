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

export const ApplicationFormConfig=
    {
        model:ApplicationModel,
        formConfig:[
            {label:"Card Number", formControl:"text",name:"card_number"},
            {label:"Reference Number", formControl:"text",name:"reference_no"},
            {label:"Last Name", formControl:"text",name:"last_name"},
            {label:"Middle Name", formControl:"text",name:"middle_name"},
            {label:"First Name", formControl:"text",name:"first_name"},
            {label:"Institution", formControl:"text",name:"institution"},
            {label:"Product", formControl:"select",name:"product",
            menuItems:[
                
                {value:10,displayText:"SSS"},
                {value:20,displayText:"Smart"},
                {value:30,displayText:"Globe"},

                ]},
            {label:"Merchant", formControl:"checkBox",name:"merchant"},
            {label:"Date of Birth", formControl:"date",name:"dob"},
        ]
    
    }

    
    
