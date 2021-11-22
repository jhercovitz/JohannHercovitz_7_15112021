class displaySearch {
    constructor(Recipes) {
        this.Recipes = Recipes
        this.isSearchingByAppliance = false
        this.isSearchingByUstensil = false

        this.IngredientSearch = new IngredientSearch(Recipes)
        this.ApplianceSearch = new ApplianceSearch(Recipes)
        this.UstensilSearch = new UstensilSearch(Recipes)

        this.wrapper = document.createElement('div')
        this.searchWrapper = document.getElementById('recherche')
        this.recipesWrapper = document.getElementsByClassName('.recettes')
    }

    search(query) {
        let SearchedRecipes = null

        if (this.isSearchingByAppliance) {
            SearchedRecipes = this.ApplianceSearch.search(query)
        } else if (this.isSearchingByUstensil) {
            SearchedRecipes = this.UstensilSearch.search(query)
        } else {
            SearchedRecipes = this.IngredientSearch.search(query)
        }
        this.displayRecipes(SearchedRecipes)
        console.log('recherche ok')
    }

    // clearRecipesWrapper() {
    //     this.recipesWrapper.innerHTML = ""
    // }

    displayRecipes(Recipes) {
        this.clearRecipesWrapper()

        Recipes.forEach(Recipe => {
            const Template = new RecipeCard(Recipe)
            this.recipesWrapper.appendChild(Template.createRecipeCard())
        })
    }

    onSearch() {
        this.wrapper
            .getElementById('recherche')
            .addEventListener('keyup', e => {
                const query = e.target.value

                if (query.length >= 3) {
                    this.search(query)
                    console.log('c\'est bon')
                } else if (query.length === 0) {
                    this.displayRecipes(this.Recipes)
                    console.log('minimum 3 caracteres')
                }
            })
    }
}