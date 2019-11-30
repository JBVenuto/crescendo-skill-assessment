import React from 'react';

const Option = props => {
    return(
        <option onChange={props.onChange} value={props.index}>{props.title}</option>
    )
}

export default Option;