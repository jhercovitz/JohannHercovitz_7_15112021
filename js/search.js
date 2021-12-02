import { recipes } from "./recipes.js"

const searchInput = document.getElementById('recherche')

searchInput.addEventListener('input', function(e) {

    const userInput = e.target.value.toLowerCase();

    const filteredRecipe = recipes.filter(function(recipe) {
        if (userInput.length < 3) {
            console.log('entrez au minimum 3 characteres');
            return recipes
        } else {
            return recipe.name.toLowerCase().includes(userInput) || recipe.description.toLowerCase().includes(userInput) || recipe.ingredients.includes(userInput)
        }

    });



    console.log(filteredRecipe);
    displayRecipeList(filteredRecipe);

})


function displayRecipe(name, description, time, ingredients) {
    let recipeCard = ``;
    recipeCard =
        recipeCard +
        `<div class="recettes">
<div class="gris_fonce"></div>
<p class="p1">${name}</p>
<i class="far fa-clock item">
<p class="p4">${time} min</p></i>
<div class="ingredients_recette">
<p class="p2">${ingredients.map(ingredient => `${ingredient.ingredient}: ${ingredient.quantity || ""} ${ingredient.unit ? ingredient.unit : ""}<br>`).join(' ')}</p>
</div>
<div class="description">
<p class="p3">${description}</p>
</div>
</div>`;
document.querySelector('section').innerHTML += recipeCard;
}

function displayRecipeList(recipeList) {
    document.querySelector('section').innerHTML = "";
    recipeList.forEach(function(recipe) {
        displayRecipe(recipe.name, recipe.description, recipe.time, recipe.ingredients)
    });
}
 displayRecipeList(recipes)