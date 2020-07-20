export const GetSelectedInstitution=()=>{


    return(JSON.parse(localStorage.getItem('selectedInst')?localStorage.getItem('selectedInst'):{}))
}
export const SetSelectedInstitution=(inst)=>{

    localStorage.removeItem('selectedInst');
    localStorage.setItem('selectedInst',JSON.stringify(inst));
}
export const GetObjectFromLocalStorage=(key)=>{


    return(JSON.parse(localStorage.getItem(key)))
}
export const SaveObjectToLocalStorage=(key,object)=>{
    localStorage.removeItem(key);
    return(localStorage.setItem(key,JSON.stringify(object)))
}
export const SaveAppToLocalStorage=(app)=>{
    localStorage.removeItem('selectedApp');
    return(localStorage.setItem('selectedApp',JSON.stringify(app)));
}

export const RemoveAppToLocalStorage=(app)=>{
    localStorage.removeItem('selectedApp');
    
}

export const GetAppFromLocalStorage=(app)=>{


    return(JSON.parse(localStorage.getItem('selectedApp')))
}


export const getSelfLink=(resource)=>{

    return resource.links.find(entity=>{
        return entity.rel==="self"
    }).href
}

export const getResource=(resourceName,projection,page,size,sort)=>{

    // const rest_data= GetObjectFromLocalStorage('rest_data');
    
    
    // process.env.REACT_APP_REST_DATA
    const myHeaders = new Headers();
    // myHeaders.append('Authorization',localStorage.key('auth_token') ?`Bearer ${localStorage.getItem("auth_token")}`:"");
    // myHeaders.append('Content-Type', 'application/json');
    
    
    const myRequest = new Request('http://localhost:8080/api/', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    });

    return fetch('http://localhost:8080/api/')
    .then(response => {
        const result = response.json()


        if(response.ok){return result}
        else{ 
          
          result.then(data=>{
          console.log(data);
          throw new Error(data.message);
          // if(data.message==='Unauthorized')
          // {fakeAuth.authenticate(); }

        });
        // return Error('Test Error');
        }
    })
    .then((data)=>{
    
        return data.links.find(entity=>{
            return entity.rel===resourceName
        }).href.replace('{?projection}',projection ? '?projection='+projection:'' )
        .replace('{?page,size,sort,projection}',page==undefined || size==undefined || sort==undefined ? '':'?page='+page+',size='+size+',sort='+sort+',projection='+projection);
    });
    
   

}
export const getActionUrl=(resourceName)=>{

    const profile= GetObjectFromLocalStorage('rest_data');
    
    
    return profile.links.find(entity=>{
        return entity.rel===resourceName
    }).href.replace('{?projection}','').replace('{?page,size,sort,projection}','');
   
}

export const getProfile=(resourceName)=>{

    return fetch(process.env.REACT_APP_REST_PROFILE+'/'+resourceName,{ headers: {'Accept': 'application/schema+json'}})
    .then(res=>res.json());
    
}

export const getRestData=()=>{

    fetch(process.env.REACT_APP_REST_DATA)
    .then(res => res.json())
    .then((data)=>{
        SaveObjectToLocalStorage('rest_data',data);
    });
}


export const getLinkedResources =(model,resourceHref)=> new Promise(function(resolve, reject) {
         
        return fetch(resourceHref).then(res=>res.json()).then(data=>{
                    Object.keys(model).map(key=>{
         
                        if(data.links.find(entity=>{ return entity.name===key })!=undefined){

                            model[key]=data.links.find(entity=>{ return entity.name===key }).href;
                        }else{ model[key]=data[key];}  
                 
                })
                resolve(model)
        });


})
