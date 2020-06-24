import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createTextBox } from '../../../../components/CCUPSFormElement';
import CCUPSForm from '../../../../components/CCUPSForm';
import CCUPSFormDialog from '../../../../components/CCUPSFormDialog';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';
const formModel={
    id:0,
    code:'',
    name:'',
    merchant_Id:''
}

export const formConfig=[
  
    createTextBox("code","Code *"),
    createTextBox("name","Name *"),
    createTextBox("merchant_Id","Merchant Id"),

  ]
  export const ApplicationFormValidation = Yup.object().shape({
    code: Yup.string()
    .trim()
    .required('Code Required!'),

    name: Yup.string()
    .trim()
    .required('Name Required!'),
  });

  const useStyles = makeStyles((theme)=>({
  
    dialogTitleRoot:{
      paddingBottom:5
    },
    dialogTextContentRoot:{
      paddingBottom:5,
      minWidth:800
    }

    
}));
const ProductDialog = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
    const [dataRows, setDataRows] = useState();
    const [createdEntity, setCreatedEntity] = useState();
    const handleOnClose=(value)=>{
      setCreatedEntity(value);
      setDialogOpen(false);
    }

    useEffect(() => {
        fetch("/api/institutions")
      .then(res => res.json())
      .then(
        (result) => {
         
          // console.log(result._embedded.applications);
          setDataRows(result);
        },
       
        (error) => {
         
          console.log(error);
          
        }
      )
        
        return () => {
            // cleanup
        }
    }, [createdEntity])
    return (
        <div style={{width:'100%'}}>
        
       
          
          <CCUPSFormDialog submitUrl="/api/institutions" validationScheme={ApplicationFormValidation} formConfig={formConfig} model={formModel} handleClose={handleClose} />
        
     
        </div>
    )
}

export default ProductDialog
