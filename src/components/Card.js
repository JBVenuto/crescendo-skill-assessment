import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
    // Style properties
    const divStyle = {
        width: "18rem",
        margin: "1rem"
    }
    return (
        <Link to={props.href} className="card col-sm-11 col-md-5 col-lg-3" style={divStyle}>
            <img className="card-img-top" src={props.imgsrc} alt={props.title}></img>
            <div className="card-body">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
        </Link>
    )
}

export default Card;