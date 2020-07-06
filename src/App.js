import React, { useEffect } from 'react';

import './App.css';

import Layout from './pages/Layout';
import Routes from './components/Routes';
import { ThemeProvider } from '@material-ui/core';
import  customTheme  from "./components/theme/customTheme";
import { SaveObjectToLocalStorage } from './components/CCUPSHelper';
function App() {
  
  useEffect(() => { 
    fetch(process.env.REACT_APP_REST_PROFILE)
    .then(res => res.json())
    .then((data)=>{
    
        SaveObjectToLocalStorage('rest_profile',data);
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
