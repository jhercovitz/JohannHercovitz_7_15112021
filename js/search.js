function displaySearch() {
    let input = document.getElementById("recherche");
    let filter = input.value.toUpperCase();
    let recipe = document.getElementsByClassName("recettes")
    let ingredients = document.getElementsByClassName("ingredients_recette");
    let appUst = document.getElementsByClassName("description");
    let appliances = document.getElementsByClassName("description");
    let ustensils = document.getElementsByClassName("description");

    //recherche ingredients
    for (i = 0; i < ingredients.length; i++) {
        let p2 = ingredients[i].getElementsByClassName("p2")[0];
        let txtValue = p2.textContent || p2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ingredients[i].style.display = "";
            // return true
        } else {
            recipe[i].style.display = "none";
            // return false
            console.log('ingredients ok')
        }
    }

    //recherche appareils ou ustensiles 
    for (i = 0; i < appUst.length; i++) {
        let p3 = appUst[i].getElementsByClassName("p3")[0];
        txtValue = p3.textContent || p3.innerText; // chercher aussi dans les ingredients
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            appUst[i].style.display = "";
            // ingredients[i].style.display = "";
            recipe[i].style.display = "block";
            //return true
        } else {
            recipe[i].style.display = "none";
            // return false
            console.log('appUst ok')
        }
    }

    // recherche recette
    for (i = 0; i < recipe.length; i++) {
        let p1 = recipe[i].getElementsByClassName("p1")[0];
        txtValue = p1.textContent || p1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            recipe[i].style.display = "";
            recipe[i].style.display = "block";
            // return true
        } else {
            recipe[i].style.display = "none";
            // return false
            console.log('recipe ok')
        }
    }
    document.getElementById("recherche").value = "";
}

// function displayRecipe() {
//     if (displaySearch = true) {
//         recipe[i].style.display = "block";
//         ingredients[i].style.display = "";
//         appUst[i].style.display = "";
//         recipe[i].style.display = "";
//     } else {
//         recipe[i].style.display = "none";
//         console.log('affichage ok')
//     }
// }