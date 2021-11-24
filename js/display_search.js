function search() {
    let input = document.getElementById("recherche");
    let filter = input.value.toUpperCase();
    let recipe = document.getElementsByClassName("recettes");
    let ingredients = document.getElementsByClassName("ingredients_recette");
    for (i = 0; i < ingredients.length; i++) {
        let p2 = ingredients[i].getElementsByClassName("p2")[0];
        let txtValue = p2.textContent || p2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ingredients[i].style.display = "";
        } else {
            ingredients[i].style.display = "none";
        }
    }
}