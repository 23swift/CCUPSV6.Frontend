import React from 'react'
import { Paper, Box, Typography } from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors';
import InfoIcon from "@material-ui/icons/Info";
import { PropTypes } from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
const CCUPSStatus = (props) => {
    const{displayText}=props
    return (
        <Paper variant="outlined" style={displayText=="Declined" ? {borderColor:red[400]}:{borderColor:blue[400]}}>
                                  
        <Box p={1}  color={displayText=="Declined" ? "error.main" : "success.main"} borderRadius={2}>
    <Typography variant="h4" >{displayText=="Approved" &&<CheckIcon fontSize="large"   style={{marginRight:5}}/>}
                            {displayText=="Declined" && <CloseIcon fontSize="large" color="error"   style={{marginRight:5}}/>}
          {displayText}
        </Typography>
        
        </Box>

      </Paper>
    )
}

CCUPSStatus.propTypes = {
  displayText:PropTypes.string.isRequired,


}
export default CCUPSStatus
