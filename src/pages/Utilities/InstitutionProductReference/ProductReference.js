import React from 'react'
import  PageHeader  from "../../../components/PageHeader";
import { List, ListItem, ListItemText, Paper, Typography, FormGroup, Box, Grid, ListItemIcon, IconButton, Divider, Button } from '@material-ui/core';
import { CCUPSPaper } from '../../../components/CCUPSPaper';
import SearchIcon from '@material-ui/icons/Search';
import ProductMaster from './components/ProductMaster';
import ProductDetails from './components/ProductDetails';
import AddIcon from '@material-ui/icons/Add';
const testItems=[
    {id:1,name:"SMART",products:[
        {id:1,name:'SMART GOLD'}
        ,{id:2,name:'SMART PLATINUM'}
        ,{id:3,name:'SMART BRO'}
    ]}
    ,{id:2,name:"GLOBE",products:[

        {id:1,name:'GLOBE GOLD'}
        ,{id:2,name:'GLOBE PLATINUM'}
        ,{id:3,name:'GLOBE BRO'}
    ]}
    ,{id:3,name:"MERALCO",products:[]}
    ,{id:4,name:"PLDT",products:[]}
];

const ProductReference = () => {
    return (
        <div>
            <PageHeader title="Institution Products" tools={
            <Box display="flex" flexDirection="row">
                <Box flexGrow={1}></Box>
                <Box mr={1}>
                    <Button
                    color="secondary"
                    variant="outlined"
                    startIcon={<SearchIcon />}
                    size="small"
                    >
                    Search
                    </Button>
                     {/* <IconButton color="secondary">
                    <SearchIcon/>
                    </IconButton> */}
            </Box>
            <Box>
                <Button variant="contained" size="small" color="secondary" startIcon={<AddIcon/>}>Create Institution</Button>

                {/* <IconButton color="secondary">
                <AddIcon/>
                </IconButton> */}
            </Box></Box>
                   }/>    
            

            <CCUPSPaper>
          
                <div  style={{ width: '100%' }}>


                <Grid container spacing={1}>
                {testItems.map((item,index)=>(
                        <Grid item xs={12} md={12} key={index}>
                                <ProductMaster name={item.name}>
                                    <ProductDetails items={item.products} />
                                </ProductMaster>

                                
                        </Grid>


                ))}
                    </Grid>
                    
                   
                      
                </div>
                
            </CCUPSPaper>
           
            
        </div>
    )
}

export default ProductReference
