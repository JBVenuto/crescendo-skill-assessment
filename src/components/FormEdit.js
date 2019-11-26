import React from 'react';
import InputWVal from 'react';

const FormEdit = props =>{
    return(
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

            <button className="btn btn-primary" onClick={props.addRecipe}>Edit</button>
        </div>
    )
}

export default FormEdit;