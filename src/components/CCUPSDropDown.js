import React, { useState, useEffect } from 'react'
import { Select} from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import InfoIcon from '@material-ui/icons/Info';
import { MenuItem, FormControl, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import {  Field, ErrorMessage, useFormik } from 'formik';



const CCUPSDropDown = (props) => {
  const { errors, touched,fieldName,label,handleBlur,handleChange} = props;
const [data, setData] = useState([]);
const { enqueueSnackbar, closeSnackbar } = useSnackbar();


const getMenuItems= async (url)=>{
  const response = await fetch(url);
  const json = await response.json();

  
    setData(json);
}

useEffect(() => {
  if(props.control.menuItems){
   
    setData( props.control.menuItems );
  }else{

    getMenuItems(props.control.itemsUrl);
  }
  
  return () => {
    
  }
}, [])

// useEffect(() => {
//   // console.log(fieldName +'->' +touched[fieldName] );
//   if(errors[fieldName] && touched[fieldName] ){
//        enqueueSnackbar(errors[fieldName], { 
//           variant: 'error',
//       });
      
//       // console.log(errors[fieldName].name);
      
//   }

//   return () => {
//     // touched[fieldName]=false;
//     // errors[fieldName]="";
//   }
// }, [errors[fieldName] && touched[fieldName]])
 
const showErrorMessage=()=>{
  if(errors[fieldName]  && touched[fieldName]){
    enqueueSnackbar(errors[fieldName], { 
                   variant: 'error',
                 
              });

  }
  
}

    return (
     
      <FormControl variant="outlined" fullWidth size="small" 
      // error={errors[fieldName] && touched[fieldName]}
       error={errors[fieldName] && true}
      >
       
        
      <InputLabel id={fieldName}>{label}</InputLabel>
      
      <Field 
        component={Select}
        name={fieldName}
      
        label={label}

      >
          <MenuItem value={0} disabled>
            <em >Please select</em>
          </MenuItem>
          {data && data.map((item,index)=>(
                <MenuItem value={item} key={index}>{item.name}</MenuItem>

          ))}
          
          
        </Field>
      </FormControl>
      
    )
}

export default CCUPSDropDown
