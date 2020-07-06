import React, { useState } from 'react'
import { Box, makeStyles, Button, Typography } from '@material-ui/core'
import {mainMenuList,MenuManager} from '../components/MenuManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppDrawer from './AppDrawer';
const useStyles = makeStyles(theme => ({

    buttonMenu:{
        paddingTop:2,
        paddingLeft:5,
        paddingRight:5,
        margin:1,
        // minWidth:70
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      drawer: {
        // width: drawerWidth,
        flexShrink: 0,
      },
}));
const MenuBar = (props) => {
  const{toggleDrawer}=props;
    const classes = useStyles();
   
    
    // const [openDrawer, setOpenDrawer] = useState({open:false,menu:[]});
    // const toggleDrawer = (isOpen,mainMenuText)  => {
    
    //     const menuList=MenuManager(mainMenuText);
    //     setOpenDrawer({open:isOpen,menu:menuList});
    //     // setState({ ...state, [anchor]: open });
        
        
    //   };
    return (
      <>
        <Box display="flex" flexDirection="row" 
        //  maxWidth={85} 
          // className={classes.appBar}
         m={1} >
          <Box
            justifyContent="flex-end"
            mr={1}
            // bgcolor="#f2f2f2"
            pr={2}
            borderRadius={4}
          >
            {mainMenuList.map((item, index) => (
              <Button
                
                size="small"
                className={classes.buttonMenu}
                // variant="outlined"
                onClick={() => toggleDrawer(true, item.mainMenu)}
                key={index}
                startIcon={  
                  <Box color="secondary.main" >
                    <FontAwesomeIcon icon={item.icon} />
                  </Box>
                  
              }
              >   <Typography  variant="caption">
              <Box color="text.primary">
                 {item.displayText}
              </Box>
               
            </Typography>
                {/* <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box color="primary.main" >
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                  </Box>
                  <Typography  variant="caption">
                    <Box color="text.secondary">
                       {item.displayText}
                    </Box>
                     
                  </Typography>
                  
                </Box> */}
              </Button>
            ))}
          </Box>
        </Box>

        {/* <AppDrawer
          openDrawer={openDrawer.open}
          setOpenDrawer={toggleDrawer}
          mainMenu={openDrawer.menu}
        /> */}
      </>
    );
}

export default MenuBar
