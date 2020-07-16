import React from 'react'
import { Paper, Box } from '@material-ui/core'
import { blue } from '@material-ui/core/colors';
import InfoIcon from "@material-ui/icons/Info";
import { PropTypes } from 'prop-types';
const CCUPSStatus = (props) => {
    const{displayText}=props
    return (
        <Paper variant="outlined" style={{borderColor:blue[400]}}>
                                  
        <Box p={1}  color="info.main" borderRadius={2}><InfoIcon fontSize="small"  style={{marginRight:5}}/>
        {displayText}
        </Box>

      </Paper>
    )
}

CCUPSStatus.propTypes = {
  displayText:PropTypes.string.isRequired,


}
export default CCUPSStatus
