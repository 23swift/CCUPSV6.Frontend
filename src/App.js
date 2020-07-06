import React, { useEffect } from 'react';

import './App.css';

import Layout from './pages/Layout';
import Routes from './components/Routes';
import { ThemeProvider } from '@material-ui/core';
import  customTheme  from "./components/theme/customTheme";
import { SaveObjectToLocalStorage } from './components/CCUPSHelper';
function App() {
  
  useEffect(() => { 
    fetch(process.env.REACT_APP_REST_DATA)
    .then(res => res.json())
    .then((data)=>{
<<<<<<< HEAD
    
        SaveObjectToLocalStorage('rest_profile',data);
=======
        SaveObjectToLocalStorage('rest_data',data);
>>>>>>> 738272803ba08b4a6fba61591c339e1cac10003f
    });

   
    
    return () => {
      // cleanup
    }
  }, [])

  return (
   <ThemeProvider theme={customTheme}>
      <Layout>
       <Routes/>
    </Layout>
   </ThemeProvider>
   
  );
}

export default App;
