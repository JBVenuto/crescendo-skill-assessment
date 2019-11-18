import React from 'react';
import Card from '../components/Card';

const List = (props) => {
    

    let list = props.recipes.map(recipe => {
        let src = "http://localhost:3001/" + recipe.images.small
        return (
            // <div className="card" style={divStyle}>
            //     <img className="card-img-top" src={src} alt={recipe.title}></img>
            //     <div className="card-body">
            //         <h5>{recipe.title}</h5>
            //         <p>{recipe.description}</p>
            //     </div>
            // </div>
            <Card 
                key={recipe.uuid}
                imgsrc={src}
                title={recipe.title}
                description={recipe.description}
            />
        )
    })
    
    console.log("props:", props.recipes)
    return (
        <div>{list}</div>
    )
}


export default List;