import React from 'react';
import InputWVal from './InputWVal';
import IFormWVal from './IFormWVal';
import DFormWVal from './DFormWVal'

const FormEdit = props => {
    if (props.selected) {
        return (
            <div>
                <div className="mb-1">
                    <InputWVal name="title" val={props.selected.title} onChange={props.onChange} />
                </div>
                <div className="mb-2">
                    <InputWVal name="description" val={props.selected.description} onChange={props.onChange} />
                </div>
                <div className="mb-1">
                    <InputWVal name="servings" val={props.selected.servings} onChange={props.onChange} />
                </div>
                <div className="mb-1">
                    <InputWVal name="prepTime" val={props.selected.prepTime} onChange={props.onChange} />
                </div>
                <div className="mb-2">
                    <InputWVal name="cookTime" val={props.selected.cookTime} onChange={props.onChange} />
                </div>
                <div className="mb-2">
                <label>Ingredients:</label>
                <IFormWVal n={props.numIngs} val={props.selected.ingredients} onChange={props.onChange} />
                <button className="btn btn-primary rounded-circle" onClick={props.addIng}>
                    <div className="font-weight-bolder">+</div>
                </button>
            </div>
            <div className="mb-2">
                <DFormWVal n={props.numDirs} val={props.selected.directions} onChange={props.onChange} />
                <button className="btn btn-primary rounded-circle" onClick={props.addDir}>
                    <div className="font-weight-bolder">+</div>
                </button>
            </div>

                <button className="btn btn-primary" onClick={props.editRecipe}>Edit</button>
            </div>

        )
    }
    else{
        return (
            <div>
                <div className="mb-1">
                    <InputWVal name="title" onChange={props.onChange} />
                </div>
                <div className="mb-2">
                    <InputWVal name="description" onChange={props.onChange} />
                </div>
                <div className="mb-1">
                    <InputWVal name="servings" onChange={props.onChange} />
                </div>
                <div className="mb-1">
                    <InputWVal name="prepTime" onChange={props.onChange} />
                </div>
                <div className="mb-2">
                    <InputWVal name="cookTime" onChange={props.onChange} />
                </div>
                {/* <div className="mb-2">
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
            </div> */}

                <button className="btn btn-primary" onClick={props.editRecipe}>Edit</button>
            </div>

        )
    }
}

export default FormEdit;