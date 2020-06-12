import React from 'react'
import { blue } from '@material-ui/core/colors';
import { Box, IconButton, Typography, Button } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import AddIcon from '@material-ui/icons/Add';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import EditIcon from '@material-ui/icons/Edit';
const ProductMaster = (props) => {
    const {name,id,children}=props;
    return (
        <div>
             <fieldset style={{borderRadius:4,borderColor:blue[500],borderWidth:1}}>
                <legend ><Typography color="primary">{name}</Typography> </legend>
                <div style={{width:'100%'}}>
                                                <Box  p={0} display="flex" widt="100%" flexDirection="row-reverse">
                                                <Box p={0}>
                                                    <Button color="primary" size="small" startIcon={<AddIcon />}>
                                                        Add Product
                                                    </Button>
                                                </Box>
                                                <Box p={0}>
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
                              {children}         
                                            

            </fieldset>
        </div>
    )
}

export default ProductMaster
