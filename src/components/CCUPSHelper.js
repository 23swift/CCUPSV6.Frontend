export const GetSelectedInstitution=()=>{


    return(JSON.parse(localStorage.getItem('selectedInst')))
}
export const SetSelectedInstitution=(inst)=>{

    localStorage.removeItem('selectedInst');
    localStorage.setItem('selectedInst',JSON.stringify(inst));
}
export const GetObjectFromLocalStorage=(key)=>{


    return(JSON.parse(localStorage.getItem(key)))
}
export const SaveObjectFromLocalStorage=(key,object)=>{
    localStorage.removeItem(key);
    return(localStorage.setItem(key,JSON.stringify(object)))
}
export const SaveAppToLocalStorage=(app)=>{
    localStorage.removeItem('selectedApp');
    return(localStorage.setItem('selectedApp',JSON.stringify(app)));
}
export const GetAppFromLocalStorage=(app)=>{


    return(JSON.parse(localStorage.getItem('selectedApp')))
}