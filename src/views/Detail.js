// Package imports
import React from 'react';
import { Link, useParams } from 'react-router-dom';
// Component imports
import Directions from '../components/Directions';
import Hero from '../components/Hero';
import Ingredients from '../components/Ingredients';

const Detail = props => {
    // Use the url paramaters to specify which recipe
    let { id } = useParams();
    let details = props.recipes[id];

    // Check to see if the get requests have been completed
    // and if the url matches an actual recipe
    if (details && props.specials) {
        return (
            <div>
                <Hero src={details.images.full} title={details.title} description={details.description} />
                <div className="container">
                    <div className="row">
                        <div className="col-4 text-center">Prep time: {details.prepTime}</div>
                        <div className="col-4 text-center">Cook time: {details.cookTime}</div>
                        <div className="col-4 text-center">total time: {details.prepTime + details.cookTime}</div>
                    </div>
                    <hr></hr>

                    <h3 >Ingredients:</h3>
                    <Ingredients ings={details.ingredients} specials={props.specials} />
                    <hr></hr>
                    <h3>Directions:</h3>
                    <Directions steps={details.directions} />
                </div>
            </div>
        )
    }
    // Link to the homepage if they end up at the wrong link
    else {
        return (
            <div>
                Looks like something went wrong.<Link to="/"> Click to go back to the homepage.</Link>
            </div>
        )
    }
}

export default Detail;