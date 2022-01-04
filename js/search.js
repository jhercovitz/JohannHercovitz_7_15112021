import { recipes } from "./recipes.js"


const searchInput = document.getElementById('recherche');
let filteredRecipe = [];
const chevronIngredientDown = document.getElementById('chevronIngredient')
const chevronIngredientUp = document.getElementById('chevronIngredientUp');
const chevronAppareilDown = document.getElementById('chevronAppareil');
const chevronAppareilUp = document.getElementById('chevronAppareilUp');
const chevronUstensileDown = document.getElementById('chevronUstensile');
const chevronUstensileUp = document.getElementById('chevronUstensileUp');
const ingredientBig = document.getElementById('ingredient');
const appareilBig = document.getElementById('appareil');
const ustensileBig = document.getElementById('ustensile');
const section = document.querySelector('section');
let ingredientList = [];
let applianceList = [];
let ustensilList = [];
const ingredientContainer = document.getElementById('ingredient_container');
const appareilContainer = document.getElementById('appareil_container');
const ustensileContainer = document.getElementById('ustensile_container');
const ingredientInput = document.getElementById('ingredient');
let filteredIngredient = [];


searchInput.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    filteredRecipe = recipes.filter(function(recipe) {
        if (userInput.length < 3) {
            return recipes
        } else {
            return recipe.name.toLowerCase().includes(userInput) || recipe.description.toLowerCase().includes(userInput) || recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(userInput))
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


// function divBigger(){
    chevronIngredientDown.addEventListener('click', function(e) {
	     const myParent = e.target.parentNode;
         const input = myParent.querySelector("input");
        //  const placeholder = document.querySelector('::placeholder');
         input.style.width = "667px";
         input.style.height = "397px";
         input.style.paddingBottom = "320px";
        input.placeholder = "Recherche un ingrédient";
        // placeholder.style.color = "red";
        e.target.style.display = "none";
        chevronIngredientUp.style.display = "block";
        chevronIngredientUp.style.marginLeft = "620px";
        chevronAppareilDown.style.marginLeft = "630px";
        chevronUstensileDown.style.marginLeft = "630px";
        section.style.marginTop = "-244px";
    });
    chevronIngredientUp.addEventListener('click', function(e) {
        const myParent = e.target.parentNode;
         const input = myParent.querySelector("input");

        input.style.width = "190px";
        input.style.height = "75px";
        input.style.paddingBottom = "0";
        input.placeholder = "Ingrédients";
        chevronIngredientDown.style.display = "block";
        e.target.style.display = "none";   
        chevronAppareilDown.style.marginLeft = "152px";
        chevronUstensileDown.style.marginLeft = "152px";
        section.style.marginTop = "62px"; 
    });

    chevronAppareilDown.addEventListener('click', function() {      
        appareilBig.style.width = "667px";
        appareilBig.style.height = "397px";
        appareilBig.style.paddingBottom = "320px";
        appareilBig.placeholder = "Recherche un appareil" 
        chevronAppareilDown.style.display = "none";
        chevronAppareilUp.style.display = "block";
        chevronAppareilUp.style.marginLeft = "620px";
        chevronUstensileDown.style.marginLeft = "630px";
        section.style.marginTop = "-244px";
    });
    chevronAppareilUp.addEventListener('click', function() {
        appareilBig.style.width = "190px";
        appareilBig.style.height = "75px";
        appareilBig.style.paddingBottom = "0";
        appareilBig.placeholder = "Appareil";
        chevronAppareilDown.style.display = "block";
        chevronAppareilUp.style.display = "none";
        chevronUstensileDown.style.marginLeft = "152px"  
        section.style.marginTop = "62px";   
    });

    chevronUstensileDown.addEventListener('click', function() {
        ustensileBig.style.width = "667px";
        ustensileBig.style.height = "397px";
        ustensileBig.style.paddingBottom = "320px";
        ustensileBig.placeholder = "Recherche un ustensile";  
        chevronUstensileDown.style.display = "none";
        chevronUstensileUp.style.display = "block";
        chevronUstensileUp.style.marginLeft = "620px";
        section.style.marginTop = "-244px";  
    });
    chevronUstensileUp.addEventListener('click', function() {
        ustensileBig.style.width = "190px";
        ustensileBig.style.height = "75px";
        ustensileBig.style.paddingBottom = "0";
        ustensileBig.placeholder = "Ustensiles";
        chevronUstensileDown.style.display = "block";
        chevronUstensileUp.style.display = "none"; 
        section.style.marginTop = "62px";   
    });
// }
// divBigger()


function generateIngredients(recipeList) {
    for (let i = 0; i < recipeList.length; i++) {
       for (let j = 0; j < recipeList[i].ingredients.length; j++){
        ingredientList.push(recipeList[i].ingredients[j].ingredient);
    } 
    }
    return ingredientList;
}
generateIngredients(recipes)

function generateAppliance(appareils) {
    applianceList = appareils.map(appliance => `${appliance.appliance}`);
    document.getElementById('appareil').innerHTML = applianceList;
    return applianceList
}
generateAppliance(recipes);

function generateUstensils(recipeList) {
    for (let i = 0; i < recipeList.length; i++) {
       for (let j = 0; j < recipeList[i].ustensils.length; j++){
           ustensilList.push(recipeList[i].ustensils[j])
       } 
    }
    return ustensilList
}
generateUstensils(recipes)

function displayIngredient(ingredientList) {
    let ingredientCard = ``;
    ingredientCard =
    ingredientCard +
        `<ul>${[ingredientList]}</ul>`;

    chevronIngredientDown.addEventListener('click', function(){
        ingredientContainer.innerHTML += ingredientCard;
    })
    chevronIngredientUp.addEventListener('click', function(){
        ingredientContainer.innerHTML = "";
    })
}

function displayIngredientList(_recipes) {
    ingredientContainer.innerHTML = "";   
    ingredientList.forEach(function(ingredient) {
        displayIngredient(ingredient)
    });
}
displayIngredientList(filteredRecipe)


function displayappliance(applianceList) {
    let applianceCard = ``;
    applianceCard =
    applianceCard +
        `<ul>${[applianceList]}</ul>`;

        chevronAppareilDown.addEventListener('click', function(){
        appareilContainer.innerHTML += applianceCard;
    })
    chevronAppareilUp.addEventListener('click', function(){
        appareilContainer.innerHTML = "";    })
}

function displayapplianceList(_recipes) {
    appareilContainer.innerHTML = "";   
    applianceList.forEach(function(appliance) {
        displayappliance(appliance)
    });
}
displayapplianceList(filteredRecipe)


function displayUstensil(ustensilList) {
    let ustensilCard = ``;
    ustensilCard =
    ustensilCard +
        `<ul>${[ustensilList]}</ul>`;

    chevronUstensileDown.addEventListener('click', function(){
        ustensileContainer.innerHTML += ustensilCard;
    })
    chevronUstensileUp.addEventListener('click', function(){
        ustensileContainer.innerHTML = "";    })
}

function displayUstensilList(_recipes) {
    ustensileContainer.innerHTML = "";   
    ustensilList.forEach(function(ustensils) {
        displayUstensil(ustensils)
    });
}
displayUstensilList(filteredRecipe)


// ingredientInput.addEventListener('input', function(e) {
//     const userInput = e.target.value.toLowerCase();
//     filteredIngredient = ingredientList.filter(function(ingredient) {
//     //     if (userInput.length < 3) {
//     // //         // ingredientBig.style.height = '75px';
//     // //         // ingredientBig.style.paddingBottom = "0";
//     //         console.log(ingredientList);
//     //         return ingredientList;
//     //     } else {
//             // ingredientBig.style.height = '100px';
//             // ingredientBig.style.paddingBottom = "28px"
//             return ingredient.toLowerCase().includes(userInput);
//         // }
//     });
//     // displayIngredientList(filteredIngredient);
//     console.log(filteredIngredient);
// })


// const filterContainer = document.getElementsByClassName('filtres');
const filterContainer = document.querySelector('section');

function displayFilterTag(_recipes){
    let filterTag = ``;
    filterTag =
    filterTag +
    `<div class="filterTag">${ingredientList}<i class="fas fa-times-circle" id="cross"></i></div>`;
    console.log(filterTag)

    document.getElementById('ingredient').addEventListener('input', function(){
        filterContainer.innerHTML += filterTag;
        console.log(filterContainer)
    })
    document.getElementById('cross').addEventListener('click', function(){
        filterContainer.innerHTML = "";
    })
}

function displayFilterList(_recipes) {
    filterContainer.innerHTML = "";   
    ingredientList.forEach(function(ingredient) {
        displayFilterTag(ingredient)
    });
}
displayFilterList(filterContainer)

// function displayUstensil(ustensilList) {
//     let ustensilCard = ``;
//     ustensilCard =
//     ustensilCard +
//         `<ul>${[ustensilList]}</ul>`;

//     chevronUstensileDown.addEventListener('click', function(){
//         ustensileContainer.innerHTML += ustensilCard;
//     })
//     chevronUstensileUp.addEventListener('click', function(){
//         ustensileContainer.innerHTML = "";    })
// }

// function displayUstensilList(_recipes) {
//     ustensileContainer.innerHTML = "";   
//     ustensilList.forEach(function(ustensils) {
//         displayUstensil(ustensils)
//     });
// }
// displayUstensilList(filteredRecipe)