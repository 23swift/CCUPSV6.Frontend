import React from 'react'

const FormCheckBox = (props) => {
    return (
        <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name={item.name}
            color="secondary"
          />
        }
        label={
          <Typography
            variant="subtitle2"
            color="secondary"
          >
            {item.label}
          </Typography>
        }
      />
    )
}

export default FormCheckBox
