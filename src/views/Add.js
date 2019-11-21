import React, { Component } from 'react';
import axios from 'axios';
// import uuidv4 from 'uuid/v4';
import DirForm from '../components/DirForm';
import IngForm from '../components/IngForm';
import Input from '../components/Input';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numIngs: 1,
            numDirs: 1,

            recipe: {
                uuid: String,
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
                    uuid: String,
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
            let i = parseInt(event.target.id)
            let newIng = mod.ingredients[i];
            newIng[inputName] = inputValue;
            mod.ingredients[i] = newIng;
        }
        else if (inputName === "directions"){
            console.log("direction")
        }
        else {
            mod[inputName] = inputValue;
        }
        this.setState({ recipe: mod })
    }

    numIngredients = () => {
        let n = this.state.numIngs + 1;
        let mod = this.state.recipe;
        mod.ingredients.push({
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
            <div className="container" >
                <div className="mb-1">
                    <Input name="title" onChange={this.handleChange} />
                </div>
                <div className="mb-2">
                    <Input name="description" onChange={this.handleChange} />
                </div>
                <div className="mb-1">
                    <Input name="servings" onChange={this.handleChange} />
                </div>
                <div className="mb-1">
                    <Input name="prepTime" onChange={this.handleChange} />
                </div>
                <div className="mb-2">
                    <Input name="cookTime" onChange={this.handleChange} />
                </div>
                <div className="mb-2">
                    <label>Ingredients:</label>
                    <IngForm n={this.state.numIngs} onChange={this.handleChange} />
                    <button className="btn btn-primary rounded-circle" onClick={this.numIngredients}>
                        <div className="font-weight-bolder">+</div>
                    </button>
                </div>
                <div className="mb-2">
                    <DirForm n={this.state.numDirs} onChange={this.handleChange} />
                    <button className="btn btn-primary rounded-circle" onClick={this.numDirections}>
                        <div className="font-weight-bolder">+</div>
                    </button>
                </div>

                <button className="btn btn-primary" onClick={this.log}>Add</button>
            </div>
        )
    }
}


export default Add;