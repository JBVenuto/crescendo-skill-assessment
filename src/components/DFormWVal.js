import React from 'react';
import InputWVal from './InputWVal';

const DFormWVal = props => {
    // let nInput = [];
    // for (let i = 0; i < props.n; i++) {
    //     nInput.push(
    //         <div className="mb-1" key={i}>
    //             <label className="mr-2">{i + 1}. </label>
    //             <InputWVal name="directions" num={i} onChange={props.onChange} val={props.val[i].instructions} />
    //         </div>
    //     )
    // }
    // return nInput
    let dirWVal = props.val.map((direction, index) => {
        return (
            <div className="mb-1" key={index}>
                <label className="mr-2">{index + 1}. </label>
                <InputWVal name="directions" num={index} onChange={props.onChange} val={direction.instructions} />
            </div>
        )
    })

    return dirWVal;
}

export default DFormWVal;