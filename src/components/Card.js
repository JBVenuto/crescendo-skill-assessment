import React from 'react';

const Card = props => {
    const divStyle = {
        width: "18rem"
    }
    return (
        <div className="card" style={divStyle}>
            <img className="card-img-top" src={props.imgsrc} alt={props.title}></img>
            <div className="card-body">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;