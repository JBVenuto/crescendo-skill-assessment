class Recipe {
    constructor(title, description, servings, prepTime, cookTime, ingredients, directions) {
        this.title = title
        this.description = description
        // this.images = {
        //     full= String
        //     medium= String,
        //     small= String
        // }
        this.servings = servings
        this.prepTime = prepTime
        this.cookTime = cookTime
        // this.postDate = Date
        // this.editDate = Date
        this.ingredients = ingredients
        
        this.directions = directions
    }
}

export default Recipe;
