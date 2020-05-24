import React from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, Box, Avatar, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    MuiAvatarRoot: {
        width: 110,
        height: 110,
        // color:"#043673",
        // background: "linear-gradient(90deg, #054594 30%, #043673 90%)",
        // background:"linear-gradient(135deg, rgba(246,230,180,1) 0%,rgba(237,144,23,1) 100%)",
        background: "-moz-linear-gradient(-45deg, rgba(255,214,94,1) 0%, rgba(254,191,4,1) 100%)", /* FF3.6-15 */
        background: "-webkit-linear-gradient(-45deg, rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%)", /* Chrome10-25,Safari5.1-6 */
        background:"linear-gradient(135deg, rgba(255,214,94,1) 0%,rgba(254,191,4,1) 100%)",
        margin: 20,
        // marginTop:-50,
        boxShadow:
          "0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      },
      cardItem: {
        maxWidth: 255,
        height: 300,
        "&:hover": {
          // backgroundColor: 'rgb(7, 177, 77, 0.42)'
          cursor: "pointer",
          boxShadow:
            "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
        },
      },
      title: {
        color:"#054594"
      // color: amber[700],
    },
    focusHighlight:{
      backgroundColor:"#fff"
    }
}));

const MenuCard = (props) => {
    const classes = useStyles();
    return (
        <div>
             <Card className={classes.cardItem} elevation={2}>
                    <CardActionArea 
                     onClick={ props.toggleDrawer}
                     classes={{
                      focusHighlight:classes.focusHighlight
                     }}
                    >
                      <Box display="flex">
                        <Box m="auto">
                          <Avatar className={classes.MuiAvatarRoot}>
                            <FontAwesomeIcon
                              icon={props.icon}
                              size="3x"
                              // color="primary"
                            />
                          </Avatar>
                        </Box>
                      </Box>

                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          className={classes.title}
                        >
                          {props.displayText}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                          
                        >
                          {props.details}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
        </div>
    )
}

export default MenuCard
