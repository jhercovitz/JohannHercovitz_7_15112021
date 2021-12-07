import { recipes } from "./recipes.js"

const searchInput = document.getElementById('recherche')

searchInput.addEventListener('input', function(e) {

    const userInput = e.target.value.toLowerCase();

    const filteredRecipe = recipes.filter(function(recipe) {
        if (userInput.length < 3) {
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


    const chevronIngredientDown = document.getElementById('chevronIngredient');
    const chevronIngredientUp = document.getElementById('chevronIngredientUp');
    const chevronAppareilDown = document.getElementById('chevronAppareil');
    const chevronAppareilUp = document.getElementById('chevronAppareilUp');
    const chevronUstensileDown = document.getElementById('chevronUstensile');
    const chevronUstensileUp = document.getElementById('chevronUstensileUp');

    chevronIngredientDown.addEventListener('click', function() {
        const ingredientBig = document.getElementById('ingredient');
            ingredientBig.style.width = "667px";
            ingredientBig.style.height = "397px";
            chevronIngredientDown.style.display = "none";
            chevronIngredientUp.style.display = "block";    
            console.log('devient big');
    });
    chevronIngredientUp.addEventListener('click', function() {
        const ingredientBig = document.getElementById('ingredient');
            ingredientBig.style.width = "190px";
            ingredientBig.style.height = "75px";
            chevronIngredientDown.style.display = "block";
            chevronIngredientUp.style.display = "none";    
            console.log('devient petit');
    });

    chevronAppareilDown.addEventListener('click', function() {
        const appareilBig = document.getElementById('appareil');
        appareilBig.style.width = "667px";
        appareilBig.style.height = "397px"; 
        chevronAppareilDown.style.display = "none";
        chevronAppareilUp.style.display = "block";    
            console.log('devient big 2');
    });
    chevronAppareilUp.addEventListener('click', function() {
        const appareilBig = document.getElementById('appareil');
        appareilBig.style.width = "190px";
        appareilBig.style.height = "75px";
        chevronAppareilDown.style.display = "block";
        chevronAppareilDown.style.display = "none";    
            console.log('devient petit');
    });

    chevronUstensileDown.addEventListener('click', function() {
        const ustensileBig = document.getElementById('ustensile');
        ustensileBig.style.width = "667px";
        ustensileBig.style.height = "397px";  
        chevronUstensileDown.style.display = "none";
        chevronUstensileUp.style.display = "block";  
            console.log('devient big 3');
    });
    chevronUstensileUp.addEventListener('click', function() {
        const ustensileBig = document.getElementById('ustensile');
        ustensileBig.style.width = "190px";
        ustensileBig.style.height = "75px";
        chevronUstensileDown.style.display = "block";
        chevronUstensileUp.style.display = "none";    
            console.log('devient petit');
    });