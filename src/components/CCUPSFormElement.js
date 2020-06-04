

export const createTextBox=(name,label)=> {
    return {label,formControl:"text",name};
  }

  export const createCheckBox=(name,label)=>{

    return {label, formControl:"checkBox",name}
  }

  export const createDropDown=(name,label,itemsUrl,menuItems)=>{

    return {label, formControl:"select",name, itemsUrl,menuItems}
  }