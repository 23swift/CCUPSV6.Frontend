
import React from 'react'
import { useHistory } from 'react-router';

export const postData= async (url = '', data = {},token='')=>{
  const myHeaders = new Headers();
    myHeaders.append('Authorization',localStorage.key('auth_token') ?`Bearer ${JSON.parse( localStorage.getItem("auth_token")).token}`:"");
  
  
    // Default options are marked with *
    const response = await fetch(url, {
      // return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
       mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization':localStorage.key('auth_token') ?`Bearer ${JSON.parse( localStorage.getItem("auth_token")).token}`:""
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    
      const result = await response.json()
      // return result;
      // console.log(result);
          if(response.ok){return result}
          else{ 
            
            throw new Error(result.error);
            
          }
        
 
  
  
}

export const callApi=  (url = '', data = {},httpVerb='GET')=>{
  // console.log(JSON.stringify(data));
  // Default options are marked with *
  
    
    // process.env.REACT_APP_REST_DATA
  
const options={
      method:httpVerb,
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization':localStorage.key('auth_token') ?`Bearer ${JSON.parse( localStorage.getItem("auth_token")).token}`:""
      },

};
if( httpVerb!=='GET'){options.body= JSON.stringify(data) }


  return fetch(url,options).then(response => {
    const result = response.json()


    if(response.ok){return result}
    else{ 
      
      result.then(data=>{
      console.log(data);
    //   window.location("/login");
      localStorage.removeItem('auth_token');
      window.location.replace("/login");
      throw new Error(data.message);
  
    });
  
    }
});
  
    // if(response.ok){return response.json();}
    // else{
    //   console.log(response);
      
    //   response.then(result=>{
    //     localStorage.removeItem('auth_token');
    //     window.location.replace("/login");
    //     throw Error(result.message);
    //   });
    // }

   // parses JSON response into native JavaScript objects
  
}

export const deleteData= async (url = '', data = {})=>{
  
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects

}