import React from 'react';

const Directions = (props) => {
   let steps = props.steps.map((step, index) => {
        return (
        <p key={index}>{index + 1}. {step.optional ? <span className="font-italic">(Optional)</span> : <span></span>} {step.instructions}</p>
        )
    })

    return (
        <div>{steps}</div>
    )
}

export default Directions