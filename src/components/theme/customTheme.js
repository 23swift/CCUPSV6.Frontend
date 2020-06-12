import React from 'react'
import { createMuiTheme } from '@material-ui/core';
import { blue, amber, grey, yellow, indigo } from '@material-ui/core/colors';

const cutomeTheme = createMuiTheme({
  overrides: {
    MuiInputBase:{
      
      underline:{
        background:"#efefef",
       
        border:0
      }
  },
   
    MuiFormHelperText:{
      contained:{
        marginLeft:2
      }
      
    },
    MuiOutlinedInput: {
      
            root: {
            //   backgroundColor: 'red',
            // backgroundColor:"#efefef",
            border:0,
            borderWidth: 0,
            
              // backgroundColor: 'red',
             color:"#043673",
              
            '&:hover $notchedOutline': {
                
                
                borderColor:blue[200]
                // border:0
              },
              '&$focused $notchedOutline': {
              // borderColor: 'red',
                borderWidth: 1,
                borderColor:blue[200]
            },
              
          },
          notchedOutline:{
            // borderColor:"#efefef",
            borderColor:"#e6e6e6",
            // borderColor:"#d9d9d9",  
            // borderColor:blue[200],
            // border:0,
            color:"#043673",
          }
      },
    MuiInputLabel: {
      root: {
       fontSize:14,
      //  color:"#054594",
      // color:blue[700],
      
      },
      outlined:{
        color:"#043673",
        transform: "translate(14px, 12px) scale(0.75)",
        "&$shrink":{
            transform: "translate(14px, -6px) scale(0.90)"
          },
          
        
      },
      
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      startIcon: {
        marginRight: 1,
      },
    },
    MuiTableCell: {
      head: {
        // backgroundColor: blue[500],
        backgroundColor:"#054594",
        color: "#054594",
      },
      stickyHeader:{
        // backgroundColor: amber[400],
        // backgroundColor:"#0072ce",
        backgroundColor:"#fff",
        color:blue[600],
        fontWeight:400,
   
    
      }
    },
    MuiPaper:{
      elevation1:{
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
      }
    },
    MuiListItemIcon:{
      root: {
        minWidth:30
     }
    },
  },
  palette: {
    primary: {
      // main: "#054594",
      // dark:"#f7af19",
      main:"#043673",
      contrastText:"#fff"
    },
    secondary: {
      main: blue[700],
      // main: "#efefef",
      // main:"#0072ce",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
  },
});

  export default cutomeTheme;