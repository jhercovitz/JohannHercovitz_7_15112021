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


//  function displayChevron(){
//      const chevronDown = document.getElementsByClassName('fa-chevron-down');
//      const chevronUp = document.getElementsByClassName('fa-chevron-up');

//      chevronDown.addEventListener('click', function () {
//              if (chevronDown.clicked == true) {
//                  chevronDown.style.display = none;
//                  chevronUp.style.display = block;
//              } else if (chevronUp.clicked == true) {
//                  chevronDown.style.display = block;
//                  chevronUp.style.display = none;
//              } else {
//                  chevronUp.style.display = none;
//              }
//          });
//     }

// displayChevron();



// function filterSearch() {
    
    const chevronDown = document.querySelector('i');

    chevronDown.addEventListener('click', function() {
        const selectFiltre = document.getElementsByClassName('select_filtre');
            selectFiltre.style.width = "667px";
            selectFiltre.style.height = "397px";
            
            console.log('devient big');
    });
    
// }