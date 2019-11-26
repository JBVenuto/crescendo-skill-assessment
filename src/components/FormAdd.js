import React from 'react';
import DirForm from './DirForm';
import IngForm from './IngForm';
import Input from './Input';


const FormAdd = (props) => {

    return (
        <div>
            <div className="mb-1">
                <Input name="title" onChange={props.onChange} />
            </div>
            <div className="mb-2">
                <Input name="description" onChange={props.onChange} />
            </div>
            <div className="mb-1">
                <Input name="servings" onChange={props.onChange} />
            </div>
            <div className="mb-1">
                <Input name="prepTime" onChange={props.onChange} />
            </div>
            <div className="mb-2">
                <Input name="cookTime" onChange={props.onChange} />
            </div>
            <div className="mb-2">
                <label>Ingredients:</label>
                <IngForm n={props.numIngs} onChange={props.onChange} />
                <button className="btn btn-primary rounded-circle" onClick={props.addIng}>
                    <div className="font-weight-bolder">+</div>
                </button>
            </div>
            <div className="mb-2">
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