export function generateIngredients(recipeList) {
    let tempIngredient = [];
    for (let i = 0; i < recipeList.length; i++) {
        for (let j = 0; j < recipeList[i].ingredients.length; j++) {
            tempIngredient.push(recipeList[i].ingredients[j].ingredient);
        }
    }
    return [...new Set(tempIngredient)].sort();
}

export function generateAppliance(appareils) {
    let tempAppliance = [];
    tempAppliance = appareils.map(appliance => `${appliance.appliance}`);
    return [...new Set(tempAppliance)].sort();
}

export function generateUstensils(recipeList) {
    let tempUstensile = [];
    for (let i = 0; i < recipeList.length; i++) {
        for (let j = 0; j < recipeList[i].ustensils.length; j++) {
            tempUstensile.push(recipeList[i].ustensils[j])
        }
    }
    return [...new Set(tempUstensile)].sort();
}