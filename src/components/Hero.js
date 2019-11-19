import React from 'react';

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
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Hero;