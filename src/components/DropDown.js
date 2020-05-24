import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const DropDown = (props) => {
    return (
        <FormControl variant="outlined" fullWidth margin="dense">
        <InputLabel id="demo-simple-select-outlined-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={age}
          // onChange={handleChange}
          label={props.label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
         { props.ListItem && props.ListItem.map(item=>(
                <MenuItem value={item.value} key={item.value}>{item.displayText}</MenuItem>
          ))}
        
        </Select>
      </FormControl>
    )
}

export default DropDown
