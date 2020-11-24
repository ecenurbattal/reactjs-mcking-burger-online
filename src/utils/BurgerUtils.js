
export const getQty = (currentBurger, ingredient) => {
    const existIngredient = currentBurger.find(
        (item) => item.ingredient.name === ingredient.name
    );
    return existIngredient ? existIngredient.qty : 0;
}

export const upsertIngredientsToBurger = (burger,ingredient,isAdd = true) => {
    return [
        ...burger.filter((item) => item.ingredient.name!== ingredient.name),
        ...[
            {
                qty: getQty(burger,ingredient) + (isAdd ? 1 : ( getQty(burger,ingredient) &&-1)),
                ingredient,
            },
        ]
    ].sort((firstItem,secondItem) =>
        firstItem.ingredient.name.localeCompare(secondItem.ingredient.name)
    )
}

export const buildBurger = (ingredients) => {
    return (
        ingredients.map((ingredient) => (
            {
                qty:0,
                ingredient: ingredient
            }
        )).sort((firstItem,secondItem) => 
            firstItem.ingredient.name.localeCompare(secondItem.ingredient.name)
        )
    )
} 

export const makeBurger = (burger,burgerArray) => {
    return (
        burger.map((item) => (
        addIngredient(item,burgerArray)
        ))
    )
}

export const addIngredient = (item,burgerArray) => {
        for(let i=0; i<item.qty;i++){
        burgerArray.push(item.ingredient.name)
    }
}