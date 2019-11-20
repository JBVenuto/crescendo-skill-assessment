import React, { Component } from 'react';
import axios from 'axios';
// import uuidv4 from 'uuid/v4';
import Input from '../components/Input';

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numIngs: 1,
            numDirs: 1,
            // test: {
            //     name: String,
            //     age: Number
            // },
            // recipe: {
            //     uuid: String,
            //     title: String,
            //     description: String,
            //     images: {
            //         "full": "/img/default.jpg", 
            //         "medium": "/img/default--m.jpg"       
            //     },
            //     servings: Number,
            //     prepTime: Number,
            //     cookTime: Number,
            //     postDate: Date,
            //     editDate: Date,
            //     ingredients: [{
            //         uuid: String,
            //         amount: Number,
            //         measurement: String,
            //         name: String
            //     }],
            //     directions: [{
            //         instructions: String,
            //         optional: Boolean
            //     }]
            // }
            recipe: {
                uuid: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
                title: "Test Title",
                description: "Test description",
                images: {
                    "full": "/img/default.jpg",
                    "medium": "/img/default--m.jpg"
                },
                servings: 4,
                prepTime: 10,
                cookTime: 10,
                postDate: "11/19/2019 05:32:33 PM",
                editDate: "11/19/2019 05:32:33 PM",
                ingredients: [{
                    uuid: "1b9d9bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
                    amount: "3",
                    measurement: "cups",
                    name: "test ingredient"
                }],
                directions: [{
                    instructions: "Mix",
                    optional: false
                },
                {
                    instructions: "cook",
                    optional: true
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

    log = () => {

        console.log(this.state.test);
    }

    // Update the state with user input
    handleChange = event => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        let mod = this.state.test;
        mod[inputName] = inputValue;
        this.setState({ test: mod })
    }

    render() {
        return (
            <div className="container">
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
                </div>

                <button className="btn btn-primary" onClick={this.log}>Add</button>
            </div>
        )
    }
}

export default Add;