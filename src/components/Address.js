import React from 'react';


// Props -- properties
// share data from parent to child component
// address need data
// state,city, pincode [optional]




// props are passed as function parameter
export function Address(props) {
  
    return (
        <div>
            <p>Address</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Pincode: {props.pincode}</p>
        </div>
    )
}