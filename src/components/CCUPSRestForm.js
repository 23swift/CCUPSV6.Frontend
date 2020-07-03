import React, { useEffect, useState } from 'react'
import {    Box,    Divider,    Button,    IconButton,    Slide,    AppBar,    Grid,
    CircularProgress,    Typography,    Badge, TextField, InputLabel, Select, MenuItem, FormControl, FormControlLabel, Checkbox,  } from "@material-ui/core";
  import InfoIcon from "@material-ui/icons/Info";
  import { makeStyles } from "@material-ui/styles";
  import { blue, amber } from "@material-ui/core/colors";
  import { Formik, Form } from "formik";
  import { MuiPickersUtilsProvider } from "@material-ui/pickers";
  import DateFnsUtils from "@date-io/date-fns";
  import { useSnackbar } from "notistack";
  import CCUPSTextBox from "./CCUPSTextBox";
  import CCUPSDropDown from "./CCUPSDropDown";
  import CCUPSCheckBox from "./CCUPSCheckBox";
  import CCUPSCalendar from "./CCUPSCalendar";
  import CheckIcon from "@material-ui/icons/Check";
  import CCUPSConfirmationDialog from "./CCUPSConfirmationDialog";
  import Backdrop from "@material-ui/core/Backdrop";
  import CCUPSProgress from "./CCUPSProgress";
  import { useHistory } from "react-router-dom";
  import { postData, callApi } from "./CCUPSApiService";
  import { createFormConfig, ccupsFormModel } from "./CCUPSFormHelper";
  import NotificationsIcon from "@material-ui/icons/Notifications";
  import CCUPSDropDownNumber from "./CCUPSDropDownNumber";
  import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
  import SaveIcon from '@material-ui/icons/Save';
  import ClearIcon from '@material-ui/icons/Clear';
import { getResource, getProfile } from './CCUPSHelper';

const CCUPSRestForm = () => {
const [formSchema, setFormSchema] = useState({});
    useEffect(() => {
        getProfile('applications')
        .then(data=>{  
             console.log(data.properties);
            Object.keys(data.properties).map(item=>{

                console.log(data.properties[item].format);
            });
            setFormSchema(data.properties);
            
         });
        return () => {
            // cleanup
        }
    }, [])

    return (
        <div>
            <Grid container spacing={2}>
            {formSchema && Object.keys(formSchema).map((item,index)=>(
                
               
               <Grid item xs={12} md={6} key={index} >
                         {formSchema[item].format==undefined && (formSchema[item].type == "string" ||  formSchema[item].type == "integer") &&  (

                           <TextField id={item} label={formSchema[item].title} variant="outlined" fullWidth  size="small"  />
                           
                        )}
                         {formSchema[item].format==='uri' && formSchema[item].type === "string" && (
                           <FormControl variant="outlined" fullWidth size="small" 
                        //    className={classes.margin}
                           >
                           <InputLabel id="demo-customized-select-label">{formSchema[item].title}</InputLabel>
                           <Select
                             labelId="demo-customized-select-label"
                             id="demo-customized-select"
                            //  value={age}
                            //  onChange={handleChange}
                            //  input={<BootstrapInput />}
                           >
                             <MenuItem value="">
                               <em>None</em>
                             </MenuItem>
                             <MenuItem value={10}>Ten</MenuItem>
                             <MenuItem value={20}>Twenty</MenuItem>
                             <MenuItem value={30}>Thirty</MenuItem>
                           </Select>
                        </FormControl>
                        )}
                          {formSchema[item].type == "boolean" && (

                                                    <FormControlLabel
                                                    control={
                                                    <Checkbox
                                                        // onChange={handleChange}
                                                        // checked={value}
                                                        name={item}
                                                        // color="secondary"
                                                    />}
                                                    label={
                                                        <Typography
                                                        variant="body2"
                                                        color="primary"
                                                        >
                                                        {formSchema[item].title}
                                                        </Typography>
                                                    }
                                                    />

                            )}
                </Grid>
            ))}
                    
            </Grid>
        </div>
    )
}

export default CCUPSRestForm
