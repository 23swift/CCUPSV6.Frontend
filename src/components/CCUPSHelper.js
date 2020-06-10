export const GetSelectedInstitution=()=>{


    return(JSON.parse(localStorage.getItem('selectedInst')))
}
export const SetSelectedInstitution=(inst)=>{


    localStorage.setItem(inst);
}