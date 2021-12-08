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



function divBigger(){
    const chevronIngredientDown = document.getElementById('chevronIngredient');
    const chevronIngredientUp = document.getElementById('chevronIngredientUp');
    const chevronAppareilDown = document.getElementById('chevronAppareil');
    const chevronAppareilUp = document.getElementById('chevronAppareilUp');
    const chevronUstensileDown = document.getElementById('chevronUstensile');
    const chevronUstensileUp = document.getElementById('chevronUstensileUp');
    const ingredientBig = document.getElementById('ingredient');
    const appareilBig = document.getElementById('appareil');
    const ustensileBig = document.getElementById('ustensile');

    chevronIngredientDown.addEventListener('click', function() {
        ingredientBig.style.width = "667px";
        ingredientBig.style.height = "397px";
        ingredientBig.style.paddingBottom = "320px";
        ingredientBig.placeholder = "Recherche un ingrédient";
        // ingredientBig.placeholder.style.color = "red";
        chevronIngredientDown.style.display = "none";
        chevronIngredientUp.style.display = "block";
        chevronIngredientUp.style.marginLeft = "620px";
        appareilBig.style.marginLeft = "480px"; 
        ustensileBig.style.marginLeft = "480px";
        chevronAppareilDown.style.marginLeft = "630px";
        chevronUstensileDown.style.marginLeft = "630px";
    });
    chevronIngredientUp.addEventListener('click', function() {
        ingredientBig.style.width = "190px";
        ingredientBig.style.height = "75px";
        ingredientBig.style.paddingBottom = "0";
        ingredientBig.placeholder = "Ingrédients";
        chevronIngredientDown.style.display = "block";
        chevronIngredientUp.style.display = "none";   
        appareilBig.style.marginLeft = "0"; 
        ustensileBig.style.marginLeft = "0";
        chevronAppareilDown.style.marginLeft = "152px";
        chevronUstensileDown.style.marginLeft = "152px";
    });

    chevronAppareilDown.addEventListener('click', function() {      
        appareilBig.style.width = "667px";
        appareilBig.style.height = "397px";
        appareilBig.style.paddingBottom = "320px";
        appareilBig.placeholder = "Recherche un appareil" 
        chevronAppareilDown.style.display = "none";
        chevronAppareilUp.style.display = "block";
        chevronAppareilUp.style.marginLeft = "620px";
        ustensileBig.style.marginLeft = "480px";
        chevronUstensileDown.style.marginLeft = "630px"; 
    });
    chevronAppareilUp.addEventListener('click', function() {
        appareilBig.style.width = "190px";
        appareilBig.style.height = "75px";
        appareilBig.style.paddingBottom = "0";
        appareilBig.placeholder = "Appareil";
        chevronAppareilDown.style.display = "block";
        chevronAppareilUp.style.display = "none";
        ustensileBig.style.marginLeft = "0";
        chevronUstensileDown.style.marginLeft = "152px"    
    });

    chevronUstensileDown.addEventListener('click', function() {
        ustensileBig.style.width = "667px";
        ustensileBig.style.height = "397px";
        ustensileBig.style.paddingBottom = "320px";
        ustensileBig.placeholder = "Recherche un ustensil";  
        chevronUstensileDown.style.display = "none";
        chevronUstensileUp.style.display = "block";
        chevronUstensileUp.style.marginLeft = "620px";  
    });
    chevronUstensileUp.addEventListener('click', function() {
        ustensileBig.style.width = "190px";
        ustensileBig.style.height = "75px";
        ustensileBig.style.paddingBottom = "0";
        ustensileBig.placeholder = "Ustensiles";
        chevronUstensileDown.style.display = "block";
        chevronUstensileUp.style.display = "none";    
    });
}
divBigger()


function generateIngredients() {
    const searchIngredient = document.getElementById('ingredient');

    searchIngredient.addEventListener('input', function() {
        const filteredIngredient = recipes.filter(function(recipes) {
            if (userInput.length < 3) {
                return recipes.ingredients
            }
            console.log('liste ok');
        });     
    })
}
generateIngredients(filteredIngredient)