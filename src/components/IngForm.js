import React from 'react';
import Input from './Input';

const IngForm = props => {
    let nInput = [];
    for (let i = 0; i < props.n; i++) {
        nInput.push(
            <div className="mb-1" key={i}>
                <Input name="amount" num={i} onChange={props.onChange} />
                <Input name="measurement" num={i} onChange={props.onChange} />
                <Input name="name" num={i} onChange={props.onChange} />
            </div>
        )
    }
    return nInput
}

export default IngForm;