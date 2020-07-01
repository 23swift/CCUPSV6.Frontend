import React, { useState, useEffect } from 'react'
// import { Select} from 'formik-material-ui';
import { useSnackbar } from 'notistack';
import InfoIcon from '@material-ui/icons/Info';
import { MenuItem, FormControl, InputLabel, InputAdornment, IconButton,Select, TextField } from '@material-ui/core';
import {  Field, ErrorMessage, useFormik } from 'formik';
import { getSelfLink } from './CCUPSHelper';




const CCUPSDropDown = (props) => {
  const {value, errors, touched,fieldName,label,handleBlur,handleChange} = props;
const [data, setData] = useState([]);
const { enqueueSnackbar, closeSnackbar } = useSnackbar();
const [dropDownVal, setDropDownVal] = useState('');

const getMenuItems= async (url)=>{
  const response = await fetch(url);
  const json = await response.json();

   setData(json.content);
   setDropDownVal(value);
   
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



  const handleLocalChange = (event) => {
    // console.log(data.filter(prod => prod.id === event.target.value)[0]);
    // const selectedItem=data.filter(prod => prod.id === event.target.value)[0];
    // event.target.value=selectedItem.links.find(getSelfLink).href;
    // event.target.value=data.filter(prod => prod.id === event.target.value)[0];
    console.log(event.target.value);
    
    // getSelfLink
    handleChange(event)
    // setDropDownVal(event.target.value);

      
  };


    return (
     
      <FormControl variant="outlined" fullWidth size="small" 
      // error={errors[fieldName] && touched[fieldName]}
       error={errors[fieldName] && true}
      >
       
        
      <InputLabel id={fieldName}>{label}</InputLabel>
      
      <Select 
        //  component={Select}
        labelId={fieldName}
         name={fieldName}
        value={value}
         label={label}
         onChange={handleLocalChange} 
         onBlur={handleBlur} 
      >
           <MenuItem value={0}  disabled>
            <em >Please select</em>
          </MenuItem>
          
          {data && data.map((item,index)=>(
              item.links &&  <MenuItem  value={item.links.find(getSelfLink).href} key={index}>{item.name}</MenuItem>

          ))}
          
          
        </Select>
      </FormControl>
      
    )
}

export default CCUPSDropDown
