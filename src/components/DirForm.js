import React from 'react';
import Input from './Input';

const DirForm = props => {
    let nInput = [];
    for (let i = 0; i < props.n; i++) {
        nInput.push(
            <div className="row mb-1" key={i}>
                <label className="col-1 text-center">{i + 1}. </label>
                <Input name="directions" className="col-11" num={i} onChange={props.onChange} />
            </div>
        )
    }
    return nInput
}

export default DirForm;