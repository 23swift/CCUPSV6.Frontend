import React from 'react'
import PageHeader from '../components/PageHeader'
import { TextField, Grid, Button, Container, Box,Typography } from '@material-ui/core'
import{CCUPSPaper} from '../components/CCUPSPaper'
import payBillsImg from '../img/payBills.png'
import { fakeAuth } from '../components/AuthenticatedRoute'
const Login = () => {
    return (
        <div>
            <PageHeader />

            <Container maxWidth="sm">
                <CCUPSPaper>
                
                <form>
                    <Grid container spacing={2}>
                    <Box display="flex" flexDirection="column">
                    <Box pl={1}>
                        <img src={payBillsImg} style={{ width:486,borderRadius:4 }} />
                    </Box> 
                    <Box  p={1} pl={1} borderRadius={3} >
                    
                        <Typography variant="h6" color="primary">
                           Credit Card Utility Payment System
                       </Typography>
                    
                       
                    </Box>  
                 </Box>
                        <Grid item xs={12} md={12}>
                            <TextField id="outlined-basic" fullWidth label="User Id" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField id="outlined-basic" fullWidth label="Password" variant="outlined" />
                        </Grid>
                <Grid item xs={12} md={12} >
                        <Button onClick={fakeAuth.authenticate}  color="secondary" variant="contained" disableElevation style={{minWidth:'100%'}}> Submit </Button>
                </Grid>

                                            
                    </Grid>
                            
                </form>
            </CCUPSPaper>
            </Container>
            
           
        </div>
    )
}

export default Login
