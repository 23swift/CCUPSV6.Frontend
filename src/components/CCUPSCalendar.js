import React from 'react'
import { Field } from 'formik'
import { DatePicker } from 'formik-material-ui-pickers'

const CCUPSCalendar = (props) => {
    const { errors, touched,fieldName,label} = props;
    return (
        <div>
                 <Field
                              name={fieldName}
                              component={DatePicker}
                              variant="dialog"
                              label={label}
                              inputVariant="outlined"
                              error={errors[fieldName] || touched[fieldName] }
                              fullWidth
                              size="small"
                              format="MM/dd/yyyy"
                              // autoOk
                              // rightArrowIcon={<CalendarTodayIcon/>}
                            />
        </div>
    )
}

export default CCUPSCalendar
