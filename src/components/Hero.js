import React from 'react';
import { Link } from 'react-router-dom';

const Hero = props => {
    // String for the src url
    const src = "http://localhost:3001/" + props.src;
    // style properties
    const jumbo = {
        "backgroundImage": "url(" + src + ")",
        "backgroundSize": "cover"
    }

    return (
        <div className="jumbotron jumbotron-fluid" style={jumbo}>
            <div className="container text-light text-right">
                <h1 >{props.title}</h1>
                <h3>{props.description}</h3>
                <Link to="/add"><h3 className="text-light">Add a recipe</h3></Link>
                <Link to="/edit"><h3 className="text-light">Edit a recipe</h3></Link>
            </div>
        </div>
    )
}

export default Hero;