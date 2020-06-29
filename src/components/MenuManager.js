import {  faHome,  faTools,  faDatabase,  faSearch,  faShieldAlt,  faBell,
    faPowerOff,  faInfo, faArrowDown, faChevronDown, faColumns, faClipboardList, faEnvelopeOpenText, faHeartbeat} from "@fortawesome/free-solid-svg-icons";

export const menuList=[
        {mainMenu:"transaction",displayText:"Transactions",icon:faDatabase,
            subMenu:[{displayText:'End of day',url:''},
                    {displayText:'Application Data Entry',url:'/applicationDataEntry'},
                    {displayText:'Application Approval',url:''},
                    {displayText:'List of Enrolled Cardholders',url:''},
                    {displayText:'List of Unenrolled Cardholders',url:''},
                    {displayText:'Batch Updating of Enrollment',url:''},
                    {displayText:'Batch Auto Enrollment',url:''},
                    {displayText:'Manual Updating of Dis/Enrollment Status',url:''},
                    {displayText:'Upload Billing File',url:'/transaction/uploadBilling'},
                    {displayText:'Merchant Extract',url:''},
                    {displayText:'Merchant Batch Upload',url:''},
                    {displayText:'Merchant Batch Update',url:''},
                    {displayText:'Declined Billing Letter Generation',url:''},
                    {displayText:'Online Transfer of Auto Charge Enrollment',url:''}

                    
                    
                   
                ],
        },
        
        {mainMenu:"utilities",displayText:"Utilities",icon:faTools,
                subMenu:[{displayText:'Institution Reference',url:'/instProdRef'}, 
                                            {displayText:'Institution Product Reference',url:''},
                                            {displayText:'Dis/Enrollment Reason Code',url:''},
                                            {displayText:'Cadencie Decline Reason Code',url:''},
                                            {displayText:'Card ProductType',url:''},
                                            {displayText:'Reports/Letter Management',url:''},
                                            {displayText:'Application Record',url:''}
                                    ]
    },
    {mainMenu:"security",displayText:"Security", icon:faShieldAlt,
        subMenu:[
            {displayText:'Main Menu Maintenance',url:''},
            {displayText:'Submenu Maintenance',url:''},
            {displayText:'Group Profile',url:''},
            {displayText:'Group Access Maintenance',url:''},
            {displayText:'User Profile',url:''},
            {displayText:'Audit Log',url:''},
            {displayText:'Monitor Users',url:''},
            {displayText:'Deactivate Users',url:''},
        
        ]
    },
    {mainMenu:"inquiries",displayText:"Inquiries",icon:faSearch,
        subMenu:[
            {displayText:'View Cardholders Information',url:''},
            {displayText:'Regenerate Billing Return Files',url:''},
            {displayText:'Business Corporate Transactions',url:''},
            {displayText:'Auto-Transfer of Enrollment Inquiry',url:''},
            {displayText:'MerchBatch Extract Inquiry',url:''},
            {displayText:'Dis/Enrollment Extract File',url:''}
        ]

    },
    {mainMenu:"reports",displayText:"Reports",icon:faClipboardList,
        subMenu:[
            {displayText:'Auto-Transfer of Enrollment Report',url:''}
        ]

    },
    {mainMenu:"dashboard",displayText:"Monitoring",icon:faHeartbeat,
        subMenu:[
            {displayText:'Auto-Transfer of Enrollment Report',url:''}
        ]

    },
    {mainMenu:"letter",displayText:"Letter Management",icon:faEnvelopeOpenText,
    subMenu:[
        {displayText:'Auto-Transfer of Enrollment Report',url:''}
    ]

},
    
];

export const mainMenuList=[
        {mainMenu:"transaction",displayText:"Transactions",icon:faDatabase,
            details:"This contains the User, Access level, Group name, Start of day from end of day module, and current date",
            url:""
        },
        
        {mainMenu:"utilities",displayText:"Utilities",icon:faTools,
            details:"This contains the parameter maintenance modules of the system",
            url:"" 
        },
       
        {mainMenu:"inquiries",displayText:"Inquiries",icon:faSearch,
            details:"Inquiry module enables contact center to answer auto-charge related inquiries of the cardholders",
            url:""
        },
        {mainMenu:"security",displayText:"Security", icon:faShieldAlt,
            details:"This module enables the user to create, maintain, and delete the main menus of CCUPS",
            url:""
         },
         {mainMenu:"reports",displayText:"Reports",icon:faClipboardList,
            details:"This module enables the user to define, edit, delete report",
            url:""
        },
        {mainMenu:"letter",displayText:"Letters",icon:faEnvelopeOpenText,
            details:"This module enables the user to define, edit, delete letter templates",
            url:""
        }
        ,
        {mainMenu:"dashboard",displayText:"Monitoring",icon:faHeartbeat,
            details:"Module for batch job execution monitoring",
            url:""
        }
    ];
// const criteria=(item)=>{
//     menuList.filter(x=>x.mainMenu.startsWith("transaction"))
//     item.mainMenu==
// }

export const MenuManager=(text)=> {
    let result=menuList.find(x=>x.mainMenu.startsWith(text));
    return result;
}
