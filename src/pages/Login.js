import React from 'react'
import PageHeader from '../components/PageHeader'
import { TextField, Grid, Button, Container, Box,Typography } from '@material-ui/core'
import{CCUPSPaper} from '../components/CCUPSPaper'
import payBillsImg from '../img/payBills.png'
import { fakeAuth } from '../components/AuthenticatedRoute'
import { Formik } from 'formik'
import CCUPSTextBox from '../components/CCUPSTextBox'
import { postData } from '../components/CCUPSApiService'
import CCUPSProgress from '../components/CCUPSProgress'
import { useHistory } from 'react-router'

const model={
    username:""
    ,password:""
}
const Login = () => {
const history=useHistory();
  
    return (
        <div>
            <PageHeader />

            <Container maxWidth="sm">
                <CCUPSPaper>
                
                

                <Formik
                        initialValues={model}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            // actions.setSubmitting(false);
                            postData(process.env.REACT_APP_REST_SERVER+"/api/authenticate",values)
                              .then(data=>{

                                // console.log(data);
                                localStorage.removeItem('auth_token');
                                localStorage.setItem('auth_token',JSON.stringify(data));

                                actions.setSubmitting(false);
                                history.push("/applicationDataEntry");
                    
                             }).catch(err=>{

                                actions.setSubmitting(false);
                                console.log("err");
                                
                                // error.then(err=>{
                                //     alert(err.message);
                                // });

                                
                             });
                            }, 1000);

                        }}

                        >

                            {({ values, errors,  touched,   handleChange, handleBlur,handleSubmit,  validateForm,setSubmitting,setValues ,setTouched,isSubmitting,resetForm}
                             ) => (

                                <form onSubmit={handleSubmit}>
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
                                       

                                        <CCUPSTextBox  fieldName="username" errors={errors}  touched={touched} label="User Name" handleChange={handleChange}
                                         handleBlur={handleBlur} value={values["username"]} />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                    <CCUPSTextBox  fieldName="password" errors={errors}  touched={touched} label="Password" handleChange={handleChange}
                                         handleBlur={handleBlur} value={values["password"]} />
                                    </Grid>
                                <Grid item xs={12} md={12} >
                                    <Button type="submit"  size="large" color="secondary" variant="contained" disableElevation style={{minWidth:'100%'}}> Submit </Button>
                                </Grid>

                                                        
                                </Grid>
                                        <CCUPSProgress open={isSubmitting} displayText="Authenticating user please wait..." />
                                </form>

                            )}

                 </Formik>
                </CCUPSPaper>
                </Container>
            
            
           
        </div>
    )
}

export default Login
