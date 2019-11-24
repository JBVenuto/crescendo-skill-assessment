import React from 'react';
import Input from './Input';

const DirForm = props => {
    let nInput = [];
    for (let i = 0; i < props.n; i++) {
        nInput.push(
            <div className="mb-1" key={i}>
                <label className="mr-2">{i + 1}. </label>
                <Input name="directions" num={i} onChange={props.onChange} />
            </div>
        )
    }
    return nInput
}

export default DirForm;