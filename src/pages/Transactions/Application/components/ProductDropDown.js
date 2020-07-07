import React, { useState } from 'react'
import { Box, Divider, Button, IconButton, Slide, AppBar, Grid, FormControl, InputLabel, MenuItem, FormControlLabel, Checkbox, fade, Typography, InputAdornment, Paper, Toolbar, Select, ListSubheader } from '@material-ui/core'
import { useEffect } from 'react';
import { getResource } from '../../../../components/CCUPSHelper';
import { isThisMinute } from 'date-fns';

const ProductDropDown = (props) => {
    const [product, setProduct] = useState();
    const [productList, setProductList] = useState();
    const handleProdChange = (event) => {
        setProduct(event.target.value);
        alert(event.target.value);
      };

      useEffect(() => {
          fetch(getResource('products').replace('{?projection}','?projection=forDropDown')).then(res=>res.json())
          .then(data=>{
              console.log(data.content);
              
            setProductList(data.content);
        });
          return () => {
            //   cleanup
          }
      }, [])
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} md={6} >
         <FormControl variant="outlined" fullWidth size="small"  >
             <InputLabel id="product">Product</InputLabel>
             <Select
             labelId="product"
             name="product"
             value={product}
             label="Product"
             onChange={handleProdChange}
             // input={<BootstrapInput   />}
             >
                 
                         {/* <ListSubheader>Smart Communication</ListSubheader>
                         
                              <MenuItem value={1} style={{paddingLeft:30}}>Smart Communication - Platinum </MenuItem>
                             <MenuItem value={2} style={{paddingLeft:30}}>Smart Communication - Gold</MenuItem>
                         
                        
                         <ListSubheader>PLDT</ListSubheader>
                         <MenuItem value={3} style={{paddingLeft:30}}>PLDT - My DSL</MenuItem>
                         <MenuItem value={4} style={{paddingLeft:30}}>PLDT - Business</MenuItem> */}
                        
                       {productList &&  productList.map((item,index)=>(

                            <MenuItem value={3} style={{paddingLeft:30}}>{item.name}</MenuItem>
                       ))
                        
                        }
           
             </Select>
         </FormControl>
     </Grid>
   </Grid>
    )
}

export default ProductDropDown
