import React, { useEffect, useState } from 'react'
import { Select} from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import InfoIcon from '@material-ui/icons/Info';
import { MenuItem, FormControl, InputLabel, InputAdornment, IconButton } from '@material-ui/core';
import {  Field, ErrorMessage, useFormik } from 'formik';
const CCUPSDropDownNumber = (props) => {
    const { value,errors, touched,fieldName,label,handleBlur,handleChange} = props;
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
    
   
    const showErrorMessage=()=>{
      if(errors[fieldName]  && touched[fieldName]){
        enqueueSnackbar(errors[fieldName], { 
                       variant: 'error',
                     
                  });
    
      }
      
    }
    
    
    return (
        <div>
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
                <MenuItem value={item.id} key={index}>{item.name}</MenuItem>

          ))}
          
          
        </Field>
      </FormControl>
        </div>
    )
}

export default CCUPSDropDownNumber
