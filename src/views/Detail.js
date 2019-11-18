import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {

    let { id } = useParams();
    console.log(id)

    return (
        <div>
        <h1>Selected food:</h1>
        <h2>{props.info[id]}</h2>
        </div>
    )
}


export default Detail;