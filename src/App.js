import React from 'react';

import './App.css';

import Layout from './pages/Layout';
import Routes from './components/Routes';
import { ThemeProvider } from '@material-ui/core';
import  customTheme  from "./components/theme/customTheme";
function App() {
  return (
   <ThemeProvider theme={customTheme}>
      <Layout>
       <Routes/>
    </Layout>
   </ThemeProvider>
   
  );
}

export default App;
