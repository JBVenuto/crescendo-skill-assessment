import React from 'react';

const Input = props => {

    let num;
    if(props.num){
        num = props.num
    }
    else num = 0

    return (
        <input 
            className={props.className}
            type="text" 
            name={props.name}
            aria-label={props.name} 
            placeholder={props.name}
            onChange={props.onChange}
            id={num}
        ></input>
    )
}

export default Input;