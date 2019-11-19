import React from 'react';
import Card from '../components/Card';
import Hero from '../components/Hero';

const List = props => {
    const images = [];

    // Go through the recipies to send props down to the card component
    const list = props.recipes.map((recipe, index) => {
        const src = "http://localhost:3001/" + recipe.images.medium;
        images.push(recipe.images.full);
        const href = "/" + index;
        return (

            <Card
                href={href}
                key={recipe.uuid}
                imgsrc={src}
                title={recipe.title}
                description={recipe.description}
            />
        )
    })
    // Select a random picture from the recipes for the hero image
    const i = Math.floor(Math.random() * images.length);
    const randImg = images[i];

    return (
        <div>
            <Hero title="Recipes" description="Find new recipes and ingredient specials" src={randImg} />
            <div className="container">
                <div className="row">
                    {list}
                </div>
            </div>
        </div>
    )
}


export default List;