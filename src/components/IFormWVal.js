import React from 'react';
import InputWVal from './InputWVal';

const IFormWVal = props => {

    let ingWVal = props.val.map((ingredient, index) => {
        return (
            <div className="mb-1" key={index}>
                <InputWVal name="amount" className="col-1" val={ingredient.amount} num={index} onChange={props.onChange} />
                <InputWVal name="measurement" className="col-2" val={ingredient.measurement} num={index} onChange={props.onChange} />
                <InputWVal name="name" className="col-9" val={ingredient.name} num={index} onChange={props.onChange} />
            </div>
        )
    })

    return ingWVal;
    
}

export default IFormWVal;