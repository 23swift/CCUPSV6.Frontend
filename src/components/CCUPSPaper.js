import React from 'react'
import { Paper, Box } from '@material-ui/core'

export const CCUPSPaper = (props) => {
    return (
        <Box m={2} >

             <Paper elevation={1} style={{paddingTop:5,paddingBottom:2}} >
            <Box ml={2}  mr={2} mt={2} mb={1} >{props.children}
            </Box>
                
        </Paper>
        </Box>
       
        
        
    )
}
