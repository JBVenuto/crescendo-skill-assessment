import React from 'react';

const Input = props => {

    return (
        <input 
            type="text" 
            name={props.name}
            aria-label={props.name} 
            placeholder={props.name}
            onChange={props.onChange}    
        ></input>
    )
}

export default Input;