import React, { useEffect, useState } from 'react'
import { blue, amber } from '@material-ui/core/colors';
import { Box, IconButton, Typography, Button, Divider } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import AddIcon from '@material-ui/icons/Add';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import EditIcon from '@material-ui/icons/Edit';
import { createTextBox } from '../../../../components/CCUPSFormElement';
import CCUPSFormDialog from '../../../../components/CCUPSFormDialog';
import * as Yup from 'yup';
import { callApi } from '../../../../components/CCUPSApiService';
const formModel={
    // id:0,
    code:'',
    name:''
    
}



const InstitutionMaster = (props) => {
    const {name,id,children,code,institution}=props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dataRows, setDataRows] = useState();
    const [createdEntity, setCreatedEntity] = useState();
    
    // formModel.institution=institution;


    return (
        <div>
             {/* <fieldset style={{borderRadius:4,borderColor:blue[500],borderWidth:1}}>
                <legend > </legend> */}
                <Box display="flex"  >
                    <Box style={{padding:4,minWidth:150}}  borderRadius={4} flexGrow={1}><Typography >{name}</Typography> </Box>  

                    <Box>
                    <div style={{width:'100%'}}>
                                                <Box  p={0} display="flex" widt="100%" flexDirection="row">
                                                   
                                                    <Box p={0} mr={1}>
                                                    <Button color="primary" size="small" startIcon={<EditIcon />}>
                                                        Edit
                                                    </Button>
                                                </Box>
                                                
                                                
                                                    <Box p={0}>
                                                <Button color="primary" size="small" startIcon={<DescriptionIcon />}>
                                                    File Mapping
                                                </Button>
                                                    </Box>
                                                </Box>
                                            </div>
                    </Box>
                </Box>
                                 <Box ml={1} color="text.secondary" >
                                                        <Typography variant="subtitle2">Code: {code}</Typography>
                                                       
                                                    </Box>
               
                              {children}         
                                            

            {/* </fieldset> */}
            <Divider style={{marginTop:5}}/>
           
        </div>
    )
}

export default InstitutionMaster
