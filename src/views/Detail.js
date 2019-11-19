import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => {

    let { id } = useParams();
    let details = props.recipes[id];
    // if (details){
    // console.log("detail component:", details.uuid);
    // }

    
    if(details) {
    return (
        <div className="container">
            <h1>
                {details.title}
            </h1>
            <h3>
                {details.description}
            </h3>
            
        </div>
    )
    }
    else {return <div> </div>}
    
}


export default Detail;