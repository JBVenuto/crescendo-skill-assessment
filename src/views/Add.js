import React, { Component } from 'react';
import axios from 'axios';
import uuidv4 from 'uuid/v4';
import FormAdd from '../components/FormAdd';
import Hero from '../components/Hero';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numIngs: 1,
            numDirs: 1,

            recipe: {
                uuid: uuidv4(),
                title: String,
                description: String,
                images: {
                    "full": "/img/default.jpg",
                    "medium": "/img/default--m.jpg"
                },
                servings: Number,
                prepTime: Number,
                cookTime: Number,
                postDate: Date,
                editDate: Date,
                ingredients: [{
                    uuid: uuidv4(),
                    amount: Number,
                    measurement: String,
                    name: String
                }],
                directions: [{
                    instructions: String,
                    optional: Boolean
                }]
            }
        }
    }

    // Add a recipe to the API
    addRecipe = () => {
        console.log("add recipe")
        // Make the API call
        axios.post('http://localhost:3001/recipes', this.state.recipe)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    // Update the state with user input
    handleChange = event => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        let mod = this.state.recipe;

        if (inputName === "name" || inputName === "amount" || inputName === "measurement") {
            let i = parseInt(event.target.id);
            let newIng = mod.ingredients[i];
            newIng[inputName] = inputValue;
            mod.ingredients[i] = newIng;
        }
        else if (inputName === "directions") {
            let i = parseInt(event.target.id);
            let newDir = mod.directions[i];
            newDir.instructions = inputValue;
            mod.directions[i] = newDir;
        }
        else {
            mod[inputName] = inputValue;
        }
        this.setState({ recipe: mod })
    }

    // Allow user to add more ingredients or directions
    numIngredients = () => {
        let n = this.state.numIngs + 1;
        let mod = this.state.recipe;
        mod.ingredients.push({
            uuid: uuidv4(),
            amount: Number,
            measurement: String,
            name: String
        })
        this.setState({
            numIngs: n,
            recipe: mod
        })
    }
    numDirections = () => {
        let n = this.state.numDirs + 1;
        let mod = this.state.recipe
        mod.directions.push({
            instructions: String,
            optional: Boolean
        })
        this.setState({
            numDirs: n,
            recipe: mod
        })
    }

    render() {
        return (
            <div>
                <Hero src="/img/default.jpg" title="Add a Recipe" description="Add your favorite recipe to our collection" />
                <div className="container" >
                    <h1>Add a new recipe</h1>
                    <FormAdd
                        onChange={this.handleChange}
                        numIngs={this.state.numIngs}
                        addIng={this.numIngredients}
                        numDirs={this.state.numDirs}
                        addDir={this.numDirections}
                        addRecipe={this.addRecipe}
                    />
                </div>
            </div>
        )
    }
}


export default Add;