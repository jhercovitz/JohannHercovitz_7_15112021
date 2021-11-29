import { recipes } from "./recipes.js"

const rechercheInput = document.getElementById('recherche')

rechercheInput.addEventListener('input', function(e) {
    console.log(e.target.value)

})

function displayRecipe(name, description, ingredients, time) {
    // manipuler la page pour y ajouter la carte de recette
    let recipeCard =
        `<div class="recettes">
        <div class="gris_fonce"></div>
        <p class="p1">${name}</p>
        <i class="far fa-clock item">
        <p class="p4">${time}</p></i>
        <div class="ingredients_recette">
        <p class="p2">${ingredients.map(ingredients => `${ingredients.ingredient} : ${ingredients.quantity} ${ingredients.unit} <br>`)}</p>
        </div>
        <div class="description">
        <p class="p3">${description}</p>
        </div>
        </div>`;


    document.body.innerHTML = recipeCard;
    console.log(recipeCard)
}

displayRecipe("Limonade de Coco", "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée", [{ "ingredient": "Lait de coco", "quantity": 400, "unit": "ml" },
    { "ingredient": "Jus de citron", "quantity": 2 },
    { "ingredient": "Crème de coco", "quantity": 2, "unit": "cuillères à soupe" },
    { "ingredient": "Sucre", "quantity": 30, "unit": "grammes" },
    { "ingredient": "Glaçons" }
], "10 min")

// displayRecipe("Poisson Cru à la tahitienne", "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco", [{ "ingredient": "Thon Rouge (ou blanc)", "quantity": 200, "unit": "grammes" },
//     { "ingredient": "Concombre", "quantity": 1 },
//     { "ingredient": "Tomate", "quantity": 2 },
//     { "ingredient": "Carotte", "quantite": 1 },
//     { "ingredient": "Citron Vert", "quantity": 5 },
//     { "ingredient": "Lait de Coco", "quantity": 100, "unit": "ml" }
// ], "60 min")

// displayRecipe("Poulet coco réunionnais", "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz", [{ "ingredient": "Poulet", "quantity": 1 },
//     { "ingredient": "Lait de coco", "quantity": 400, "unit": "ml" },
//     { "ingredient": "Coulis de tomate", "quantity": 25, "unit": "cl" },
//     { "ingredient": "Oignon", "quantity": 1 },
//     { "ingredient": "Poivron rouge", "quantity": 1 },
//     { "ingredient": "Huile d'olive", "quantity": 1, "unit": "cuillères à soupe" }
// ], "80 min")







// function displaySearch() {
//     let input = document.getElementById("recherche");
//     let filter = input.value.toUpperCase();
//     let recipe = document.getElementsByClassName("recettes")
//     let ingredients = document.getElementsByClassName("ingredients_recette");
//     let appUst = document.getElementsByClassName("description");
//     let appliances = document.getElementsByClassName("description");
//     let ustensils = document.getElementsByClassName("description");

//     //recherche ingredients
//     for (i = 0; i < ingredients.length; i++) {
//         let p2 = ingredients[i].getElementsByClassName("p2")[0];
//         let txtValue = p2.textContent || p2.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             ingredients[i].style.display = "";
//             // return true
//         } else {
//             recipe[i].style.display = "none";
//             // return false
//             console.log('ingredients ok')
//         }
//         break
//     }

//     //recherche appareils ou ustensiles 
//     for (i = 0; i < appUst.length; i++) {
//         let p3 = appUst[i].getElementsByClassName("p3")[0];
//         txtValue = p3.textContent || p3.innerText; //  doit chercher aussi dans les ingredients
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             appUst[i].style.display = "";
//             // ingredients[i].style.display = "";
//             recipe[i].style.display = "block";
//             //return true
//         } else {
//             recipe[i].style.display = "none";
//             // return false
//             console.log('appUst ok')
//         }
//     }

//     // recherche recette
//     for (i = 0; i < recipe.length; i++) {
//         let p1 = recipe[i].getElementsByClassName("p1")[0];
//         txtValue = p1.textContent || p1.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             recipe[i].style.display = "";
//             recipe[i].style.display = "block";
//             // return true
//         } else {
//             recipe[i].style.display = "none";
//             // return false
//             console.log('recipe ok')
//         }
//     }
//     document.getElementById("recherche").value = "";
// }