import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors'

import CancelIcon from '@material-ui/icons/Cancel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const useStyles = makeStyles((theme) => ({
    main: {
        //  paddingTop:10,
        margin: 15,
        minWidth: 400,
      },
}));
const Forbiden = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
        <Typography variant="h2" component="h5" style={{color:red[600]}}>
           <FontAwesomeIcon icon={faTimesCircle} />   Forbiden
        </Typography>
    </div>
    )
}

export default Forbiden
