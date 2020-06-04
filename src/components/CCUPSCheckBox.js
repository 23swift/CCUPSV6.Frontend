import React from 'react'
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core'

function CCUPSCheckBox(props) {
    const{handleChange,name,label}=props;
    return (
        <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  name={name}
                                  color="secondary"
                                />}
                                label={
                                  <Typography
                                    variant="subtitle2"
                                    color="secondary"
                                  >
                                    {label}
                                  </Typography>
                                }
                          />
    )
}

export default CCUPSCheckBox
