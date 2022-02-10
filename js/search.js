import { recipes } from "./recipes.js"
import { generateIngredients, generateAppliance, generateUstensils } from "./generate.js"
// import { displayRecipe, displayRecipeList, displayIngredient, displayIngredientList, displayAppliance, displayApplianceList, displayUstensil, displayUstensil } from "./display.js";
import { displayRecipeList } from "./display.js";

const searchInput = document.getElementById('recherche');
let filteredRecipe = [...recipes];
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
let filteredAppliance = [];
let filteredUstensil = [];
const filtres = document.getElementById('filtres');
// const filterTagDiv = document.getElementsByClassName("filterTagDiv");
const filterTagDivIng = document.getElementById("filterTagDivIng");
const filterTagDivApp = document.getElementById("filterTagDivApp");
const filterTagDivUst = document.getElementById("filterTagDivUst");


// filtre les recette en fonction de l'input
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

    // filtre les listes des dropdowns en fonction de la barre de recherche
    // probleme de latence lors de la saisie
    const filteredBySearch = applyFilter(filteredRecipe);
    let filteredIngredientList = generateIngredients(filteredBySearch)
    displayIngredientList(filteredIngredientList);
    let filteredApplianceList = generateAppliance(filteredBySearch)
    displayApplianceList(filteredApplianceList);
    let filteredUstensilList = generateUstensils(filteredBySearch)
    displayUstensilList(filteredUstensilList);
})


// gère les évènements sur les dropdowns
chevronIngredientDown.addEventListener('click', function(e) {
    const myParent = e.target.parentNode;
    const input = myParent.querySelector("input");
    input.style.width = "667px";
    input.style.height = "397px";
    input.style.paddingBottom = "320px";
    input.placeholder = "Recherche un ingrédient";
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


// génère les listes dans les dropdowns
ingredientList = generateIngredients(recipes);
applianceList = generateAppliance(recipes);
ustensilList = generateUstensils(recipes)


// affichage des listes dans les dropdowns
function displayIngredient(ingredient) {
    ingredientContainer.innerHTML += `<li>${ingredient}</li>`;

    chevronIngredientDown.addEventListener('click', function() {
        ingredientContainer.style.display = "flex";
    })
    chevronIngredientUp.addEventListener('click', function() {
        ingredientContainer.style.display = "none";
    })
}

function displayIngredientList(listIng) {
    ingredientContainer.innerHTML = "";
    listIng.forEach(function(ingredient) {
        displayIngredient(ingredient)
    });
}
displayIngredientList(ingredientList)


function displayAppliance(appliance) {
    appareilContainer.innerHTML += `<li>${appliance}</li>`;

    chevronAppareilDown.addEventListener('click', function() {
        appareilContainer.style.display = "flex";
    })
    chevronAppareilUp.addEventListener('click', function() {
        appareilContainer.style.display = "none";
    })
}

function displayApplianceList(listApp) {
    appareilContainer.innerHTML = "";
    listApp.forEach(function(appliance) {
        displayAppliance(appliance)
    });
}
displayApplianceList(applianceList)


function displayUstensil(ustensil) {
    ustensileContainer.innerHTML += `<li>${ustensil}</li>`;

    chevronUstensileDown.addEventListener('click', function() {
        ustensileContainer.style.display = "flex";
    })
    chevronUstensileUp.addEventListener('click', function() {
        ustensileContainer.style.display = "none";
    })
}

function displayUstensilList(listUst) {
    ustensileContainer.innerHTML = "";
    listUst.forEach(function(ustensil) {
        displayUstensil(ustensil)
    });
}
displayUstensilList(ustensilList)


// filtre les listes des dropdowns en fonction de la saisie de l'utilisateur
ingredientInput.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    filteredIngredient = ingredientList.filter(function(ingredient) {
        return ingredient.toLowerCase().includes(userInput);
    });
    displayIngredientList(filteredIngredient);
})

appareilBig.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    filteredAppliance = applianceList.filter(function(appliance) {
        return appliance.toLowerCase().includes(userInput);

    });
    displayApplianceList(filteredAppliance);
})


ustensileBig.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    filteredUstensil = ustensilList.filter(function(ustensil) {
        return ustensil.toLowerCase().includes(userInput);
    });
    displayUstensilList(filteredUstensil);
})


// création des tags
// voir si la fonction ne fait pas trop de choses
function addIngredientListener() {
    const liIngredientList = [...ingredientContainer.querySelectorAll("li")];
    liIngredientList.forEach((li) => {
        li.addEventListener("click", (e) => {
            let tagIngredient =
                `<div class="filterTagContainer tagIngredient">
            <div class="textTag" data-type="ing">${e.target.textContent}</div>
            <i class="far fa-times-circle"></i>
        </div>`
            filterTagDivIng.innerHTML += tagIngredient;
            filtres.style.marginTop = "5px";

            // filtre les recettes en fonction des tags cliqués
            const filteredByTagRecipe = applyFilter(filteredRecipe);
            displayRecipeList(filteredByTagRecipe)

            // filtre la liste des dropdowns en fonction des recettes affichées
            let filteredIngredientList = generateIngredients(filteredByTagRecipe)
            displayIngredientList(filteredIngredientList);
            addIngredientListener();
            let filteredApplianceList = generateAppliance(filteredByTagRecipe)
            displayApplianceList(filteredApplianceList);
            addApplianceListener();
            let filteredUstensilList = generateUstensils(filteredByTagRecipe)
            displayUstensilList(filteredUstensilList);
            addUstensilListener();

            //Suppression des tags
            const cross = [...filterTagDivIng.querySelectorAll("i")];
            cross.forEach((i) => {
                i.addEventListener("click", (e) => {
                    e.target.parentNode.remove()
                    const filteredByTagDeleted = applyFilter(filteredRecipe);
                    displayRecipeList(filteredByTagDeleted)

                    let filteredIngredientList = generateIngredients(filteredByTagDeleted)
                    displayIngredientList(filteredIngredientList);
                    addIngredientListener();
                    let filteredApplianceList = generateAppliance(filteredByTagDeleted)
                    displayApplianceList(filteredApplianceList);
                    addApplianceListener();
                    let filteredUstensilList = generateUstensils(filteredByTagDeleted)
                    displayUstensilList(filteredUstensilList)
                    addUstensilListener();
                })
            })
        })
    })
}
addIngredientListener();

function addApplianceListener() {
    const liApplianceList = [...appareilContainer.querySelectorAll("li")];
    liApplianceList.forEach((li) => {
        li.addEventListener("click", (e) => {
            let tagAppareil =
                `<div class="filterTagContainer tagAppareil">
            <div class="textTag" data-type="app">${e.target.textContent}</div>
            <i class="far fa-times-circle"></i>
        </div>`
            filterTagDivApp.innerHTML += tagAppareil;
            filtres.style.marginTop = "5px";
            const filteredByTagRecipe = applyFilter(filteredRecipe);
            displayRecipeList(filteredByTagRecipe)

            let filteredApplianceList = generateAppliance(filteredByTagRecipe)
            displayApplianceList(filteredApplianceList);
            addApplianceListener();
            let filteredIngredientList = generateIngredients(filteredByTagRecipe)
            displayIngredientList(filteredIngredientList);
            addIngredientListener();
            let filteredUstensilList = generateUstensils(filteredByTagRecipe)
            displayUstensilList(filteredUstensilList);
            addUstensilListener();

            const cross = [...filterTagDivApp.querySelectorAll("i")];
            cross.forEach((i) => {
                i.addEventListener("click", (e) => {
                    e.target.parentNode.remove()
                    const filteredByTagDeleted = applyFilter(filteredRecipe);
                    displayRecipeList(filteredByTagDeleted)

                    let filteredApplianceList = generateAppliance(filteredByTagDeleted)
                    displayApplianceList(filteredApplianceList);
                    addApplianceListener();
                    let filteredIngredientList = generateIngredients(filteredByTagDeleted)
                    displayIngredientList(filteredIngredientList);
                    addIngredientListener();
                    let filteredUstensilList = generateUstensils(filteredByTagDeleted)
                    displayUstensilList(filteredUstensilList)
                    addUstensilListener();
                })
            })
        })
    })
}
addApplianceListener();


function addUstensilListener() {
    const liUstensileList = [...ustensileContainer.querySelectorAll("li")];
    liUstensileList.forEach((li) => {
        li.addEventListener("click", (e) => {
            let tagUstensile =
                `<div class="filterTagContainer tagUstensile">
            <div class="textTag" data-type="ust">${e.target.textContent}</div>
            <i class="far fa-times-circle"></i>
            </div>`
            filterTagDivUst.innerHTML += tagUstensile;
            filtres.style.marginTop = "5px";
            const filteredByTagRecipe = applyFilter(filteredRecipe);
            displayRecipeList(filteredByTagRecipe)

            let filteredUstensilList = generateUstensils(filteredByTagRecipe)
            displayUstensilList(filteredUstensilList);
            addUstensilListener();
            let filteredIngredientList = generateIngredients(filteredByTagRecipe)
            displayIngredientList(filteredIngredientList);
            addIngredientListener();
            let filteredApplianceList = generateAppliance(filteredByTagRecipe)
            displayApplianceList(filteredApplianceList);
            addApplianceListener();

            const cross = [...filterTagDivUst.querySelectorAll("i")];
            cross.forEach((i) => {
                i.addEventListener("click", (e) => {
                    e.target.parentNode.remove()
                    const filteredByTagDeleted = applyFilter(filteredRecipe);
                    displayRecipeList(filteredByTagDeleted)

                    let filteredUstensilList = generateUstensils(filteredByTagDeleted)
                    displayUstensilList(filteredUstensilList)
                    addUstensilListener();
                    let filteredIngredientList = generateIngredients(filteredByTagDeleted)
                    displayIngredientList(filteredIngredientList);
                    addIngredientListener();
                    let filteredApplianceList = generateAppliance(filteredByTagDeleted)
                    displayApplianceList(filteredApplianceList);
                    addApplianceListener();
                })
            })
        })
    })
}
addUstensilListener();


function applyFilter(recipeList) {
    let tempRecipes = [...recipeList];

    const allTagsElem = [...document.querySelectorAll(".textTag")];
    const allTags = allTagsElem.map((domElem) => ({
        value: domElem.textContent,
        type: domElem.getAttribute("data-type")
    }));

    for (let i = 0; i < allTags.length; i += 1) {
        const tagObj = allTags[i];

        if (tagObj.type === "ing") {
            tempRecipes = tempRecipes.filter(function(recipe) {
                return recipe.ingredients.some((ingredientObj) => ingredientObj.ingredient === tagObj.value)
            })
        }
        if (tagObj.type === "app") {
            tempRecipes = tempRecipes.filter(function(recipe) {
                return recipe.appliance === tagObj.value
            })
        }
        if (tagObj.type === "ust") {
            tempRecipes = tempRecipes.filter(function(recipe) {
                return recipe.ustensils.includes(tagObj.value)
            })
        }
    }
    return tempRecipes;
}