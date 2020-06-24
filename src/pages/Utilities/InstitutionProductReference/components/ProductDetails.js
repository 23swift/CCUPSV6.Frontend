import React from 'react'
import { List, ListItem, ListItemIcon, Grid, ListItemText, Divider } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';
const ProductDetails = (props) => {
    const{items}=props;

    return (
        <div>
             <List dense style={{padding:0,marginBottom:3}} >
                                      <Grid container spacing={0}>
                                          {items.map((item,index)=>(

                                        <Grid item md={2} p={0} key={index}>
                                            <ListItem button style={{padding:2,borderRadius:4}}>
                                                <ListItemIcon style={{marginRight:0}}>
                                                    <AdjustIcon fontSize="small" color="secondary"/>
                                                </ListItemIcon>
                                                <ListItemText style={{marginLeft:0}} primary={item.name}/>
                                            </ListItem>
                                           
                                          </Grid>
                                          ))}
                                          
                                          
                                      </Grid>
                                            
                                            
                                            
                                            
                                        </List>
                
        </div>
    )
}

export default ProductDetails
