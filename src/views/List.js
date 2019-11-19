import React from 'react';
import Card from '../components/Card';

const List = (props) => {
    
    let list = props.recipes.map((recipe, index) => {
        let src = "http://localhost:3001/" + recipe.images.small;
        let href = "http://localhost:3000/" + index;
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
    
    return (
        <div className="container">
            <div className="row">
            {list}
            </div>
        </div>
    )
}


export default List;