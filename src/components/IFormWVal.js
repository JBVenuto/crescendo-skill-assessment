import React from 'react';
import InputWVal from './InputWVal';

const IFormWVal = props => {

    let ingWVal = props.val.map((ingredient, index) => {
        return (
            <div className="mb-1" key={index}>
                <InputWVal name="amount" val={ingredient.amount} num={index} onChange={props.onChange} />
                <InputWVal name="measurement" val={ingredient.measurement} num={index} onChange={props.onChange} />
                <InputWVal name="name" val={ingredient.name} num={index} onChange={props.onChange} />
            </div>
        )
    })

    return ingWVal;
    
}

export default IFormWVal;