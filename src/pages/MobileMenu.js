import React, { useState } from 'react'
import { Container, CssBaseline, Grid } from '@material-ui/core'
import { mainMenuList, MenuManager } from '../components/MenuManager'
import MenuCard from '../components/MenuCard'
import AppDrawer from '../components/AppDrawer'

const MobileMenu = () => {
    const [openDrawer, setOpenDrawer] = useState({open:false,menu:[]});
    const toggleDrawer = (isOpen,mainMenuText)  => {
    
        const menuList=MenuManager(mainMenuText);
        setOpenDrawer({open:isOpen,menu:menuList});
        // setState({ ...state, [anchor]: open });
        console.log(openDrawer);
        
      };
    return (
        <div>
             <Container component="main" maxWidth="lg" style={{ marginTop: 0 }}>
                  <CssBaseline />
                     <Grid justify="center"
                            xs={12} container spacing={1}
                    >
                        
                        {
                        mainMenuList.map((item,index)=>(
                            <Grid item key={index}>
                            <MenuCard
                                toggleDrawer={() => toggleDrawer(true, item.mainMenu)}
                                displayText={item.displayText}
                                details={item.details}
                                icon={item.icon}

                            />
                            </Grid>
                        ))
                        } 
                    
                    </Grid> 
             </Container>
       
              <AppDrawer
                openDrawer={openDrawer.open}
                setOpenDrawer={toggleDrawer}
                mainMenu={openDrawer.menu}
            />
        </div>
    )
}

export default MobileMenu
