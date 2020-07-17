import React, { useEffect } from 'react';

import './App.css';

import Layout from './pages/Layout';
import Routes from './components/Routes';
import { ThemeProvider } from '@material-ui/core';
import  customTheme  from "./components/theme/customTheme";
import { SaveObjectToLocalStorage } from './components/CCUPSHelper';
import { useHistory } from 'react-router';
import { fakeAuth } from './components/AuthenticatedRoute';
function App() {
  // const history=useHistory();
  useEffect(() => { 
    // fetch(process.env.REACT_APP_REST_DATA)
    // .then(response => 
    //   {
    //     const result = response.json()

    //     if(response.ok){return result}
    //     else{ 
          
    //       result.then(data=>{
    //       // console.log(data);
    //       throw new Error(data.message);
    //       // if(data.message==='Unauthorized')
    //       // {fakeAuth.authenticate(); }

    //     });
    //     // return Error('Test Error');
    //     }
    //   }
    
    // )
    // .then((data)=>{
    //     if(data) {SaveObjectToLocalStorage('rest_data',data);}
    // }).catch((error) => { 
    //  console.log(error);
    //   console.error( error);
    // });

   
    
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
