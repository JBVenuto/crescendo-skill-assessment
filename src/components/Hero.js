import React from 'react';

const Hero = props => {
    let src = "http://localhost:3001/" + props.src
    const jumbo = {
        "background-image": "url(" + src + ")",
        "background-size": "cover"
    }

    return (
        <div className="jumbotron jumbotron-fluid" style={jumbo}>
            <div className="container text-light">
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