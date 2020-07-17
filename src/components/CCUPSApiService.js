
import React from 'react'
import { useHistory } from 'react-router';
export const postData= async (url = '',token='', data = {})=>{
  
  
  
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Authorization': "Bearer " + localStorage.key('auth_token') ? JSON.parse(localStorage.getItem('auth_token').token):""
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    // return response.json(); // parses JSON response into native JavaScript objects
// console.log(response);
  const result = await response.json()

    if(!response.ok)
    {
      //  throw Error(response);
      result.then();
       response.text().then(text=>{

        console.log("test: "+text);
        
       });
    }
    else{
     return result;
     
    }
  
}

export const callApi= async (url = '', data = {},httpVerb)=>{
  // console.log(JSON.stringify(data));
  // Default options are marked with *
  
  const response = await fetch(url, {
    method: httpVerb, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': "Bearer " +localStorage.key('auth_token')!==null ? JSON.parse(localStorage.getItem('auth_token').token):""
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
    if(response.ok){return response.json();}
    else{
      response.then(result=>{
        // window.location("/loginsdasd")    ;
        throw Error(result.message);
      });
    }

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