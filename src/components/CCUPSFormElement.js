

export const createTextBox=(name,label)=> {
    return {label,formControl:"text",name};
  }

  export const createCheckBox=(name,label)=>{

    return {label, formControl:"checkBox",name}
  }

  export const createDropDown=(name,label,itemsUrl,menuItems)=>{

    return {label, formControl:"selectObject",name, itemsUrl,menuItems}
  }
  export const createDropDownNumber=(name,label,itemsUrl,menuItems)=>{

    return {label, formControl:"select",name, itemsUrl,menuItems}
  }
  export const createHidden=(name,label,itemsUrl,menuItems)=>{

    return {label, formControl:"hidden",name, itemsUrl,menuItems}
  }

  