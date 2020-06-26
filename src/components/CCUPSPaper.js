import React from 'react'
import { Paper, Box } from '@material-ui/core'

export const CCUPSPaper = (props) => {
    return (
        <Box m={1} >
        <Paper style={{padding:13}} variant="outlined">
                {props.children}
        </Paper>
        </Box>
        
    )
}
