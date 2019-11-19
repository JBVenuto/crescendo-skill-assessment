// Package imports
import React from 'react';
import { useParams } from 'react-router-dom';
// Component imports
import Directions from '../components/Directions';
import Hero from '../components/Hero';
import Ingredients from '../components/Ingredients';

const Detail = props => {

    let { id } = useParams();
    let details = props.recipes[id];
    // if (details) {
    //     console.log("detail component:", details);
    // }
    // if(props.specials){console.log("specials:", props.specials)}


    if (details) {
        return (
            <div>
                <Hero src={details.images.full} title={details.title} description={details.description} />
                <div className="container">
                    <div className="row">
                        <div className="col-4">Prep time: {details.prepTime}</div>
                        <div className="col-4">Cook time: {details.cookTime}</div>
                        <div className="col-4">total time: {details.prepTime + details.cookTime}</div>
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
    else { return <div> </div> }
}

export default Detail;