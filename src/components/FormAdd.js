import React from 'react';
import DirForm from './DirForm';
import IngForm from './IngForm';
import Input from './Input';


const FormAdd = (props) => {

    return (
        <div>
            <div className="mb-1">
                <Input name="title" className="col-12" onChange={props.onChange} />
            </div>
            <div className="mb-2">
                <Input name="description" className="col-12" onChange={props.onChange} />
            </div>
            <div className="row mb-1">
                <Input name="servings" className="col-2 ml-3 mr-2" onChange={props.onChange} />
                <label>servings</label>
            </div>
            <div className="row mb-1">
                <Input name="prepTime" className="col-2 ml-3 mr-2" onChange={props.onChange} />
                <label>minutes prep time</label>
            </div>
            <div className="row mb-2">
                <Input name="cookTime" className="col-2 ml-3 mr-2" onChange={props.onChange} />
                <label>minutes cook time</label>
            </div>
            <div className="mb-2">
                <h5>Ingredients:</h5>
                <IngForm n={props.numIngs} onChange={props.onChange} />
                <button className="btn btn-primary rounded-circle" onClick={props.addIng}>
                    <div className="font-weight-bolder">+</div>
                </button>
            </div>
            <div className="mb-2">
            <h5>Instructions:</h5>
                <DirForm n={props.numDirs} onChange={props.onChange} />
                <button className="btn btn-primary rounded-circle" onClick={props.addDir}>
                    <div className="font-weight-bolder">+</div>
                </button>
            </div>

            <button className="btn btn-primary" onClick={props.addRecipe}>Add</button>
        </div>
    )
}

export default FormAdd;