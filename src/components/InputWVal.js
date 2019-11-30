import React from 'react';

const InputWVal = props => {

    let num;
    if(props.num){
        num = props.num
    }
    else num = 0

    return (
        <input 
            type="text" 
            name={props.name}
            aria-label={props.name} 
            placeholder={props.name}
            onChange={props.onChange}
            id={num}
            value={props.val}
        ></input>
    )
}

export default InputWVal;