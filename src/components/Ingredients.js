import React from 'react';

const Ingredients = props => {
    // Map the ingredients array to look for sales and build jsx
    let ings = props.ings.map(ingredient => {
                return (
            <div>
            <p key={ingredient.uuid}>{ingredient.amount} {ingredient.measurement} {ingredient.name}</p>
            </div>
        )
    })

    return (
        <div>{ings}</div>
    )
}

export default Ingredients