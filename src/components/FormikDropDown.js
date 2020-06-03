import React, { useState, useEffect } from 'react'
import { Select} from 'formik-material-ui';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { MenuItem, FormControl, InputLabel } from '@material-ui/core';

const FormikDropDown = (props) => {

const [data, setData] = useState([]);
const getMenuItems= async (url)=>{
  const response = await fetch(url);
  const json = await response.json();

    setData(json);
}

useEffect(() => {
  if(props.menuItems){
    setData( props.menuItems );
  }else{

    getMenuItems(props.itemsUrl);
  }
  
  return () => {
    
  }
}, [])


    return (
        <div>
             <FormControl variant="outlined" fullWidth size="small" >
        <InputLabel id="demo-simple-select-outlined-label">Product</InputLabel>
        <Field component={Select}
          labelId="demo-simple-select-outlined-label"
        //   id="product"
          name={props.name}
          // onChange={handleChange}
          label={props.label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {data && data.map((item)=>(
                <MenuItem value={item} key={item.id}>{item.name}</MenuItem>

          ))}
          
          
        </Field>
      </FormControl>
        </div>
    )
}

export default FormikDropDown
