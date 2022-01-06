import { recipes } from "./recipes.js"


const searchInput = document.getElementById('recherche');
let filteredRecipe = [];
const chevronIngredientDown = document.getElementById('chevronIngredient')
const chevronIngredientUp = document.getElementById('chevronIngredientUp');
const chevronAppareilDown = document.getElementById('chevronAppareil');
const chevronAppareilUp = document.getElementById('chevronAppareilUp');
const chevronUstensileDown = document.getElementById('chevronUstensile');
const chevronUstensileUp = document.getElementById('chevronUstensileUp');
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
const cross1 = document.getElementById('cross1');
const filterTagContainerIngredient = document.getElementById('filterTagContainerIngredient');
const cross2 = document.getElementById('cross2');
const filterTagContainerAppareil = document.getElementById('filterTagContainerAppareil');
const cross3 = document.getElementById('cross3');
const filterTagContainerUstensile = document.getElementById('filterTagContainerUstensile');
const filtres = document.getElementById('filtres');


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
        section.style.marginTop = "-235px";
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
        section.style.marginTop = "25px"; 
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
        section.style.marginTop = "-235px";
    });
    chevronAppareilUp.addEventListener('click', function() {
        appareilBig.style.width = "190px";
        appareilBig.style.height = "75px";
        appareilBig.style.paddingBottom = "0";
        appareilBig.placeholder = "Appareil";
        chevronAppareilDown.style.display = "block";
        chevronAppareilUp.style.display = "none";
        chevronUstensileDown.style.marginLeft = "152px"  
        section.style.marginTop = "25px";   
    });

    chevronUstensileDown.addEventListener('click', function() {
        ustensileBig.style.width = "667px";
        ustensileBig.style.height = "397px";
        ustensileBig.style.paddingBottom = "320px";
        ustensileBig.placeholder = "Recherche un ustensile";  
        chevronUstensileDown.style.display = "none";
        chevronUstensileUp.style.display = "block";
        chevronUstensileUp.style.marginLeft = "620px";
        section.style.marginTop = "-235px";  
    });
    chevronUstensileUp.addEventListener('click', function() {
        ustensileBig.style.width = "190px";
        ustensileBig.style.height = "75px";
        ustensileBig.style.paddingBottom = "0";
        ustensileBig.placeholder = "Ustensiles";
        chevronUstensileDown.style.display = "block";
        chevronUstensileUp.style.display = "none"; 
        section.style.marginTop = "25px";   
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


function displayIngredient(ingredient) {
    chevronIngredientDown.addEventListener('click', function(){
    ingredientContainer.innerHTML += `<li>${ingredient}</li>`;
    ingredientContainer.style.display = "flex";
    chevronIngredientUp.style.display = "block";
    })
    chevronIngredientUp.addEventListener('click', function(){
        ingredientContainer.innerHTML = "";
        ingredientContainer.style.display = "none";
    })
}

function displayIngredientList(listIng) {
    ingredientContainer.innerHTML = "";   
        listIng.forEach(function(ingredient) {
            ingredientContainer.innerHTML == displayIngredient(ingredient) // avec Pierre on avait mit += mais faisait apparaitre un undifined
    });
}
displayIngredientList(ingredientList)


function displayAppliance(appliance) {
    chevronAppareilDown.addEventListener('click', function(){
    appareilContainer.innerHTML += `<li>${appliance}</li>`;
    appareilContainer.style.display = "flex";
    chevronAppareilUp.style.display = "block";
    })
    chevronAppareilUp.addEventListener('click', function(){
        appareilContainer.innerHTML = "";    
        appareilContainer.style.display = "none";
    })
}

function displayapplianceList(listApp) {
    appareilContainer.innerHTML = "";   
    listApp.forEach(function(appliance) {
        appareilContainer.innerHTML == displayAppliance(appliance)
    });
}
displayapplianceList(applianceList)


function displayUstensil(ustensil) {  
    chevronUstensileDown.addEventListener('click', function(){
    ustensileContainer.innerHTML += `<li>${ustensil}</li>`;
    ustensileContainer.style.display = "flex";
    chevronUstensileUp.style.display = "block";
    })
    chevronUstensileUp.addEventListener('click', function(){
        ustensileContainer.innerHTML = ""; 
        ustensileContainer.style.display = "none";   
    })
}

function displayUstensilList(listUst) {
    ustensileContainer.innerHTML = "";   
    listUst.forEach(function(ustensil) {
        ustensileContainer.innerHTML == displayUstensil(ustensil)
    });
}
displayUstensilList(ustensilList)


ingredientInput.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    filteredIngredient = ingredientList.filter(function(ingredient) {
        // if (userInput.length < 3) {
    // //         // ingredientBig.style.height = '75px';
    // //         // ingredientBig.style.paddingBottom = "0";
        //     console.log(ingredientList);
        //     return ingredientList;
        // // } else {
            // ingredientBig.style.height = '100px';
            // ingredientBig.style.paddingBottom = "28px"
            return ingredient.toLowerCase().includes(userInput);
        // }
    });
    displayIngredient(filteredIngredient);
    console.log(filteredIngredient);
})



function displayFilterTagIngredient(ingredientList){
    let filterTag = ``;
    filterTag =
    filterTag +
    `<div class="filterTag">${ingredientList}</div>`;

    // ingredientInput.addEventListener('input', function() {  // filterTag s'ouvre dès la premiere lettre / trouver une condition
    //     filterTagContainerIngredient.innerHTML += filterTag;
    //     filterTagContainerIngredient.style.display = 'block';
    //         filtres.style.marginTop = "60px";
    //         cross1.style.display = "block";
    //     })
    // cross1.addEventListener('click', function() {
    //     filterTagContainerIngredient.innerHTML = "";
    //     filterTagContainerIngredient.style.display = 'none';
    //     cross1.style.display = "none";

    //     if (filterTagContainerAppareil.style.display != "block" || filterTagContainerUstensile.style.display != "block"){
    //         filtres.style.marginTop = "0";
    //     }
    // })
}

function displayFilterIngredientList(_recipes) {
    filterTagContainerIngredient.innerHTML = "";   
    ingredientList.forEach(function(ingredient) {
        displayFilterTagIngredient(ingredient)
    });
}
displayFilterIngredientList(ingredientList)


function displayFilterTagAppareil(applianceList){
    let filterTag = ``;
    filterTag =
    filterTag +
    `<div class="filterTag">${applianceList}</div>`;
    // console.log(filterTag)

    appareilBig.addEventListener('input', function() {
        filterTagContainerAppareil.innerHTML += filterTag;
        filterTagContainerAppareil.style.display = 'block';
            filtres.style.marginTop = "60px";
            cross2.style.display = "block";
        })
    cross2.addEventListener('click', function() {
        filterTagContainerAppareil.innerHTML = "";
        filterTagContainerAppareil.style.display = 'none';
        cross2.style.display = "none";

        if (filterTagContainerIngredient.style.display != "block" && filterTagContainerUstensile.style.display != "block"){
            filtres.style.marginTop = "0";
        }
    })
}

function displayFilterApplianceList(_recipes) {
    filterTagContainerAppareil.innerHTML = "";   
    applianceList.forEach(function(appliance) {
        displayFilterTagAppareil(appliance)
    });
}
displayFilterApplianceList(applianceList)


function displayFilterTagUstensile(ustensilList){
    let filterTag = ``;
    filterTag =
    filterTag +
    `<div class="filterTag">${ustensilList}</div>`;
    // console.log(filterTag)

    ustensileBig.addEventListener('input', function() {
        filterTagContainerUstensile.innerHTML += filterTag;
        filterTagContainerUstensile.style.display = 'block';
            filtres.style.marginTop = "60px";
            cross3.style.display = "block";
        })
    cross3.addEventListener('click', function() {
        filterTagContainerUstensile.innerHTML = "";
        filterTagContainerUstensile.style.display = 'none';
        cross3.style.display = "none";
        
        if (filterTagContainerIngredient.style.display != "block" && filterTagContainerAppareil.style.display != "block"){
            filtres.style.marginTop = "0";
        }
    })
}

function displayFilterUstensilList(_recipes) {
    filterTagContainerUstensile.innerHTML = "";   
    ustensilList.forEach(function(ustensils) {
        displayFilterTagUstensile(ustensils)
    });
}
displayFilterUstensilList(ustensilList)