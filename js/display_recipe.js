class Search {
    constructor(Recipes) {
        this.Recipes = Recipes
    }

    search(query) {
        return this.filterRecipes(query)
    }
}


class IngredientSearch extends Search {
    constructor(Recipes) {
        super(Recipes)
    }

    filterRecipes(query) {
        return this.Recipes.filter(Recipe =>
            Recipe.ingredients.toLowerCase().includes(query.toLowerCase())
        )
    }
}


class ApplianceSearch extends Search {
    constructor(Recipes) {
        super(Recipes)
    }

    filterRecipes(query) {
        return this.Recipes.filter(Recipe =>
            Recipe.appliance.toLowerCase().includes(query.toLowerCase())
        )
    }
}

class UstensilSearch extends Search {
    constructor(Recipes) {
        super(Recipes)
    }

    filterRecipes(query) {
        return this.Recipes.filter(Recipe =>
            Recipe.ustensils.toLowerCase().includes(query.toLowerCase())
        )
    }
}