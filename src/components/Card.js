import React from 'react';

const Card = props => {
    const divStyle = {
        width: "18rem",
        margin: "1rem"
    }
    return (
        <a href={props.href} className="card col-3" style={divStyle}>
            <img className="card-img-top" src={props.imgsrc} alt={props.title}></img>
            <div className="card-body">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </a>
    )
}

export default Card;