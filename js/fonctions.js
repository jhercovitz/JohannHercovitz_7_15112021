const recipes = []
const ingredients = []
const appareils = []
const ustensiles = []

// const searchByIngredient = query => ingredients.filter(
//     ingredients => ingredients.ingredient.toLowerCase().includes(query.toLowerCase())
// )

// const searchByAppliance = query => appareils.filter(
//     appareils => appareils.appliance.toLowerCase().includes(query.toLowerCase())
// )

// const searchByUstensils = query => ustensiles.filter(
//     ustensiles => ustensiles.ustensils.toLowerCase().includes(query.toLowerCase())
// )


class Search {
    constructor(recipes) {
        this.recipes = recipes
    }

    search(query) {
        return this.filterRecipes(query)
    }
}


class IngredientSearch extends Search {
    constructor(recipes) {
        super(recipes)
    }

    filterRecipes(query) {
        return this.recipes.filter(recipes =>
            recipes.ingredients.toLowerCase().includes(query.toLowerCase())
        )
    }
}


class ApplianceSearch extends Search {
    constructor(recipes) {
        super(recipes)
    }

    filterRecipes(query) {
        return this.recipes.filter(recipes =>
            recipes.appliance.toLowerCase().includes(query.toLowerCase())
        )
    }
}

class UstensilSearch extends Search {
    constructor(recipes) {
        super(recipes)
    }

    filterRecipes(query) {
        return this.recipes.filter(recipes =>
            recipes.ustensils.toLowerCase().includes(query.toLowerCase())
        )
    }
}