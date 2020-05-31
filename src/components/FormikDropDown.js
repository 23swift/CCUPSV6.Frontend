import React from 'react'
import { Select} from 'formik-material-ui';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { MenuItem, FormControl, InputLabel } from '@material-ui/core';
const FormikDropDown = (props) => {
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
          {props.menuItems.map((item)=>(
                <MenuItem value={item.value} key={item.value}>{item.displayText}</MenuItem>

          ))}
          
          
        </Field>
      </FormControl>
        </div>
    )
}

export default FormikDropDown
