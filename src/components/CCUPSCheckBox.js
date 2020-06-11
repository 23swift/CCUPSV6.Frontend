import React from 'react'
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core'

function CCUPSCheckBox(props) {
    const{value,handleChange,name,label}=props;
    
    
    return (
        <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  checked={value}
                                  name={name}
                                  // color="secondary"
                                />}
                                label={
                                  <Typography
                                    variant="body2"
                                    color="primary"
                                  >
                                    {label}
                                  </Typography>
                                }
                          />
    )
}

export default CCUPSCheckBox
