import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    main: {
        //  paddingTop:10,
        margin: 15,
        minWidth: 400,
      },
}));
const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Typography variant="h2" component="h5" style={{color:blue[600]}}>
               Page Not Found
            </Typography>
        </div>
    )
}

export default NotFoundPage
