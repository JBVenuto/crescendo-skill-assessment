import React from 'react';

const Ingredients = props => {
    const sale = {
        border: "1px dashed black",
        backgroundColor: "#edeaea",
        paddingLeft: "5px",
        paddingBottom: "5px"
    }
    // Map the ingredients array to look for sales and build jsx
    const ings = props.ings.map(ingredient => {
        const spec = props.specials.map(special => {
            if (special.ingredientId === ingredient.uuid) {
                // Remove html tags
                let text = special.text.replace("<p>", "")
                text = text.replace("</p>", "")
                text = text.replace("<b>", "")
                text = text.replace("</b>", "")

                return (
                    <div style={sale}>
                        <div className="font-weight-bold">On Special:</div>
                        <div>{special.title}</div>
                        <div>{special.type}</div>
                        <div>{text}</div>
                    </div>
                )
            } else { return <div></div> }
        })

        return (
            <div key={ingredient.uuid}>
                <p>{ingredient.amount} {ingredient.measurement} {ingredient.name}</p>
                <div>{spec}</div>
            </div>
        )
    })

    return (
        <div>{ings}</div>
    )
}

export default Ingredients