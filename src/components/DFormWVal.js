import React from 'react';
import InputWVal from './InputWVal';

const DFormWVal = props => {

    let dirWVal = props.val.map((direction, index) => {
        return (
            <div className="row mb-1" key={index}>
                <label className="col-1 text-center">{index + 1}. </label>
                <InputWVal name="directions" className="col-11" num={index} onChange={props.onChange} val={direction.instructions} />
            </div>
        )
    })

    return dirWVal;
}

export default DFormWVal;