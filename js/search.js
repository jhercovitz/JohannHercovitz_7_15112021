import { recipes } from "./recipes.js"
import { generateIngredients, generateAppliance, generateUstensils } from "./generate.js"
import { displayRecipeList, displayIngredientList, displayApplianceList, displayUstensilList } from "./display.js";

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
const filterTagDivIng = document.getElementById("filterTagDivIng");
const filterTagDivApp = document.getElementById("filterTagDivApp");
const filterTagDivUst = document.getElementById("filterTagDivUst");


// filtre les recette en fonction de l'input
searchInput.addEventListener('input', function(e) {
    const userInput = e.target.value.toLowerCase();
    filteredRecipe = [];
    if (userInput.length < 3) {
        filteredRecipe = [...recipes];
    } else {
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].name.toLowerCase().includes(userInput)) {
                filteredRecipe.push(recipes[i]);
            } else if (recipes[i].description.toLowerCase().includes(userInput)) {
                filteredRecipe.push(recipes[i]);
            } else if (recipes[i].ingredients.some((ingredientObj) => ingredientObj.ingredient.toLowerCase().includes(userInput))) {
                filteredRecipe.push(recipes[i]);
            }
        }
    }
    displayRecipeList(filteredRecipe);


    // filtre les listes des dropdowns en fonction de la barre de recherche
    const filteredBySearch = applyFilter(filteredRecipe);
    let filteredIngredientList = generateIngredients(filteredBySearch)
    displayIngredientList(filteredIngredientList);
    let filteredApplianceList = generateAppliance(filteredBySearch)
    displayApplianceList(filteredApplianceList);
    let filteredUstensilList = generateUstensils(filteredBySearch)
    displayUstensilList(filteredUstensilList);
});


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

    if (matchMedia('only screen and (max-width: 1024px)').matches) {
        myParent.style.width = "94.5%";
        ingredientContainer.style.width = "95%";
        appareilBig.style.display = 'none';
        chevronAppareilDown.style.display = 'none';
        ustensileBig.style.display = 'none';
        chevronUstensileDown.style.display = 'none';
        chevronIngredientUp.style.marginLeft = "80%";
        chevronIngredientUp.style.right = "1.8%";
    }
    if (matchMedia('only screen and (max-width: 700px)').matches) {
        input.style.width = "100%";
        input.style.height = "350px";
        ingredientContainer.style.width = "95%";
        appareilBig.style.display = 'none';
        chevronAppareilDown.style.display = 'none';
        ustensileBig.style.display = 'none';
        chevronUstensileDown.style.display = 'none';
        chevronIngredientUp.style.marginLeft = "80%";
        chevronIngredientUp.style.top = "10px";
        chevronIngredientUp.style.right = "1%";
    }
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

    if (matchMedia('only screen and (max-width: 1024px)').matches) {
        myParent.style.width = "190px";
        input.style.width = "100%";
        appareilBig.style.display = 'block';
        chevronAppareilDown.style.display = 'block';
        ustensileBig.style.display = 'block';
        chevronUstensileDown.style.display = 'block';
    }
    if (matchMedia('only screen and (max-width: 700px)').matches) {
        myParent.style.width = "29%";
        input.style.width = "100%";
        input.style.height = "70px";
        appareilBig.style.display = 'block';
        chevronAppareilDown.style.display = 'block';
        ustensileBig.style.display = 'block';
        chevronUstensileDown.style.display = 'block';
    }
});

chevronAppareilDown.addEventListener('click', function(e) {
    const myParent = e.target.parentNode;
    appareilBig.style.width = "667px";
    appareilBig.style.height = "397px";
    appareilBig.style.paddingBottom = "320px";
    appareilBig.placeholder = "Recherche un appareil"
    chevronAppareilDown.style.display = "none";
    chevronAppareilUp.style.display = "block";
    chevronAppareilUp.style.marginLeft = "620px";
    chevronUstensileDown.style.marginLeft = "630px";
    section.style.marginTop = "-235px";

    if (matchMedia('only screen and (max-width: 1024px)').matches) {
        myParent.style.width = "94.5%";
        myParent.style.marginLeft = "-211px";
        ingredientInput.style.display = 'none';
        chevronIngredientDown.style.display = 'none';
        ustensileBig.style.display = 'none';
        chevronUstensileDown.style.display = 'none';
        chevronAppareilUp.style.marginLeft = "80%";
        chevronAppareilUp.style.right = "3%";
    }
    if (matchMedia('only screen and (max-width: 700px)').matches) {
        myParent.style.width = "94.5%"
        appareilBig.style.width = "100%";
        appareilBig.style.height = "350px";
        ingredientInput.style.display = "none"
        chevronIngredientDown.style.display = "none"
        ustensileBig.style.display = 'none';
        chevronUstensileDown.style.display = 'none';
        chevronAppareilUp.style.top = "10px";
        chevronAppareilUp.style.right = "1%";
    }
});
chevronAppareilUp.addEventListener('click', function(e) {
    const myParent = e.target.parentNode;
    appareilBig.style.width = "190px";
    appareilBig.style.height = "75px";
    appareilBig.style.paddingBottom = "0";
    appareilBig.placeholder = "Appareil";
    chevronAppareilDown.style.display = "block";
    chevronAppareilUp.style.display = "none";
    chevronUstensileDown.style.marginLeft = "152px"
    section.style.marginTop = "25px";

    if (matchMedia('only screen and (max-width: 1024px)').matches) {
        myParent.style.width = "190px";
        myParent.style.marginLeft = "0"
        appareilBig.style.width = "100%";
        ingredientInput.style.display = 'block';
        chevronIngredientDown.style.display = 'block';
        ustensileBig.style.display = 'block';
        chevronUstensileDown.style.display = 'block';
    }
    if (matchMedia('only screen and (max-width: 700px)').matches) {
        myParent.style.width = "29%";
        appareilBig.style.width = "100%";
        appareilBig.style.height = "70px";
        ingredientInput.style.display = 'block';
        chevronIngredientDown.style.display = 'block';
        ustensileBig.style.display = 'block';
        chevronUstensileDown.style.display = 'block';
    }
});

chevronUstensileDown.addEventListener('click', function(e) {
    const myParent = e.target.parentNode;
    ustensileBig.style.width = "667px";
    ustensileBig.style.height = "397px";
    ustensileBig.style.paddingBottom = "320px";
    ustensileBig.placeholder = "Recherche un ustensile";
    chevronUstensileDown.style.display = "none";
    chevronUstensileUp.style.display = "block";
    chevronUstensileUp.style.marginLeft = "620px";
    section.style.marginTop = "-235px";

    if (matchMedia('only screen and (max-width: 1024px)').matches) {
        myParent.style.width = "94.5%";
        // myParent.style.marginLeft = "-211px";
        ingredientInput.style.display = 'none';
        chevronIngredientDown.style.display = 'none';
        appareilBig.style.display = 'none';
        chevronAppareilDown.style.display = 'none';
        chevronUstensileUp.style.marginLeft = "80%";
        chevronUstensileUp.style.right = "3%";
    }
    if (matchMedia('only screen and (max-width: 700px)').matches) {
        myParent.style.width = "94.5%"
        ustensileBig.style.width = "100%";
        ustensileBig.style.height = "350px";
        ingredientInput.style.display = "none"
        chevronIngredientDown.style.display = "none"
        appareilBig.style.display = 'none';
        chevronAppareilDown.style.display = 'none';
        chevronUstensileUp.style.top = "10px";
        chevronUstensileUp.style.right = "1%";
    }
});
chevronUstensileUp.addEventListener('click', function(e) {
    const myParent = e.target.parentNode;
    ustensileBig.style.width = "190px";
    ustensileBig.style.height = "75px";
    ustensileBig.style.paddingBottom = "0";
    ustensileBig.placeholder = "Ustensiles";
    chevronUstensileDown.style.display = "block";
    chevronUstensileUp.style.display = "none";
    section.style.marginTop = "25px";

    if (matchMedia('only screen and (max-width: 1024px)').matches) {
        myParent.style.width = "190px";
        ustensileBig.style.width = "100%";
        ingredientInput.style.display = 'block';
        chevronIngredientDown.style.display = 'block';
        appareilBig.style.display = 'block';
        chevronAppareilDown.style.display = 'block';
    }
    if (matchMedia('only screen and (max-width: 700px)').matches) {
        myParent.style.width = "29%";
        ustensileBig.style.width = "100%";
        ustensileBig.style.height = "70px";
        ingredientInput.style.display = 'block';
        chevronIngredientDown.style.display = 'block';
        appareilBig.style.display = 'block';
        chevronAppareilDown.style.display = 'block';
    }
});


// génère les listes dans les dropdowns
ingredientList = generateIngredients(recipes);
applianceList = generateAppliance(recipes);
ustensilList = generateUstensils(recipes)


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


displayRecipeList(filteredRecipe);
displayIngredientList(ingredientList);
displayApplianceList(applianceList);
displayUstensilList(ustensilList);
addIngredientListener();
addApplianceListener();
addUstensilListener();