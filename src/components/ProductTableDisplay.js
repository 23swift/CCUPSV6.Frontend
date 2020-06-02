import React, { useEffect, useState } from 'react'

const ProductTableDisplay = (props) => {
const [value, setValue] = useState("");
console.log(props.link);

    useEffect(() => {
        fetch(props.link)
        //   .then(res => res.json())
          .then(
            (result) => {
             
               console.log(result);
              setValue(result.description)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              // setIsLoaded(true);
              // setError(error);
              console.log(error);
              
            }
          )
      }, [])
    
    return (
        <div>
            {value}
        </div>
    )
}

export default ProductTableDisplay
