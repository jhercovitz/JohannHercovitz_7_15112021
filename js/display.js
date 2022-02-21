import { recipes } from "./recipes.js"

const ingredientContainer = document.getElementById('ingredient_container');
const appareilContainer = document.getElementById('appareil_container');
const ustensileContainer = document.getElementById('ustensile_container');
const chevronIngredientDown = document.getElementById('chevronIngredient')
const chevronIngredientUp = document.getElementById('chevronIngredientUp');
const chevronAppareilDown = document.getElementById('chevronAppareil');
const chevronAppareilUp = document.getElementById('chevronAppareilUp');
const chevronUstensileDown = document.getElementById('chevronUstensile');
const chevronUstensileUp = document.getElementById('chevronUstensileUp');


// Affichage des recettes
export function displayRecipe(name, description, time, ingredients) {
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

// Affichage des recettes filtrées
export function displayRecipeList(recipeList) {
    document.querySelector('section').innerHTML = "";
    recipeList.forEach(function(recipe) {
        displayRecipe(recipe.name, recipe.description, recipe.time, recipe.ingredients)
    });
}



//  // Affichage des listes dans les dropdowns
export function displayIngredient(ingredient) {
    ingredientContainer.innerHTML += `<li>${ingredient}</li>`;

    chevronIngredientDown.addEventListener('click', function() {
        ingredientContainer.style.display = "flex";
    })
    chevronIngredientUp.addEventListener('click', function() {
        ingredientContainer.style.display = "none";
    })
}

export function displayIngredientList(listIng) {
    const ingredientContainer = document.getElementById('ingredient_container');
    ingredientContainer.innerHTML = "";
    listIng.forEach(function(ingredient) {
        displayIngredient(ingredient)
    });
}


export function displayAppliance(appliance) {
    appareilContainer.innerHTML += `<li>${appliance}</li>`;

    chevronAppareilDown.addEventListener('click', function() {
        appareilContainer.style.display = "flex";
    })
    chevronAppareilUp.addEventListener('click', function() {
        appareilContainer.style.display = "none";
    })
}

export function displayApplianceList(listApp) {
    appareilContainer.innerHTML = "";
    listApp.forEach(function(appliance) {
        displayAppliance(appliance)
    });
}

export function displayUstensil(ustensil) {
    ustensileContainer.innerHTML += `<li>${ustensil}</li>`;

    chevronUstensileDown.addEventListener('click', function() {
        ustensileContainer.style.display = "flex";
    })
    chevronUstensileUp.addEventListener('click', function() {
        ustensileContainer.style.display = "none";
    })
}

export function displayUstensilList(listUst) {
    ustensileContainer.innerHTML = "";
    listUst.forEach(function(ustensil) {
        displayUstensil(ustensil)
    });
}

displayRecipeList(recipes)