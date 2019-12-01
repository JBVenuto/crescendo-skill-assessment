import React from 'react';
import InputWVal from './InputWVal';
import IFormWVal from './IFormWVal';
import DFormWVal from './DFormWVal';
import IngForm from './IngForm';
import DirForm from './DirForm';

const FormEdit = props => {
    if (props.selected) {
        return (
            <div>
                <div className="mb-1">
                    <InputWVal name="title" className="col-12" val={props.selected.title} onChange={props.onChange} />
                </div>
                <div className="mb-2">
                    <InputWVal name="description" className="col-12" val={props.selected.description} onChange={props.onChange} />
                </div>
                <div className="row mb-1">
                    <InputWVal className="col-2 ml-3 mr-2" name="servings" val={props.selected.servings} onChange={props.onChange} />
                    <label > servings</label>
                </div>
                <div className="row mb-1">
                    <InputWVal className="col-2 ml-3 mr-2" name="prepTime" val={props.selected.prepTime} onChange={props.onChange} />
                    <label > minutes prep time</label>
                </div>
                <div className="row mb-2">
                    <InputWVal className="col-2 ml-3 mr-2" name="cookTime" val={props.selected.cookTime} onChange={props.onChange} />
                    <label > minutes cook time</label>
                </div>
                <div className="mb-2">
                <h5>Ingredients:</h5>
                <IFormWVal n={props.numIngs} val={props.selected.ingredients} onChange={props.onChange} />
                <button className="btn btn-primary rounded-circle" onClick={props.addIng}>
                    <div className="font-weight-bolder">+</div>
                </button>
            </div>
            <div className="mb-2">
                <h5>Instructions:</h5>
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

                <button className="btn btn-primary" onClick={props.editRecipe}>Edit</button>
            </div>

        )
    }
}

export default FormEdit;