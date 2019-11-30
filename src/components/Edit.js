import React, { Component } from 'react';
import axios from 'axios';
// import uuidv4 from 'uuid/v4';
import FormEdit from './FormEdit';
import Option from './Option';

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numIngs: 1,
            numDirs: 1,
            selectedRec: "",
            recipes: []
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:3001/recipes')
            .then((res) => {
                this.setState({
                    recipes: res.data
                })
            },
                (err) => {
                    if(err){console.log(err)}
                }
            )
    }

    // Add a recipe to the API
    editRecipe = () => {
        console.log("add recipe")
        // axios.post('http://localhost:3001/recipes', this.state.recipe)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
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

    // Find the selected recipe
    selected = event => {
        let i = parseInt(event.target.value);
        let ings = this.state.recipes[i].ingredients.length;
        let dirs = this.state.recipes[i].directions.length;
        this.setState({ 
            selectedRec: i,
            numIngs: ings,
            numDirs: dirs 
        })
    }

    // Allow user to add more ingredients or directions
    numIngredients = () => {
        let n = this.state.numIngs + 1;
        let mod = this.state.recipes[this.state.selectedRec];
        mod.ingredients.push({
            amount: "amount",
            measurement: "measurement",
            name: "name"
        })
        this.setState({
            numIngs: n,
            recipe: mod
        })
    }
    numDirections = () => {
        let n = this.state.numDirs + 1;
        let mod = this.state.recipes[this.state.selectedRec];
        mod.directions.push({
            instructions: "directions",
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
                <h1>Edit a recipe</h1>
                {/* <label>Select a recipe: </label> */}
                <select className="mb-2" name="recipes" value={this.state.selectedRec} onChange={this.selected}>
                    <option value=""></option>
                    {this.state.recipes.map((recipe, index) =>
                        <Option title={recipe.title} index={index} key={index} />)}
                </select>

                <FormEdit
                    onChange={this.handleChange}
                    numIngs={this.state.numIngs}
                    addIng={this.numIngredients}
                    numDirs={this.state.numDirs}
                    addDir={this.numDirections}
                    editRecipe={this.editRecipe}
                    selected={this.state.recipes[this.state.selectedRec]}
                />
            </div>
        )
    }
}


export default Edit;