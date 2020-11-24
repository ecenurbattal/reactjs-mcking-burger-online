import React, { useContext } from 'react'
import BurgerContext from '../../contexts/BurgerContext'
import Counter from '../Counter/Counter';
import { ItemContent, ItemWrapper} from './IngredientsMenu.styles';
import {upsertIngredientsToBurger} from '../../utils/BurgerUtils';

const IngredientsMenuItem = ({item}) => {
    const {updateBurger} = useContext(BurgerContext);

    const handleIncrement = (burgerItem) => {
        updateBurger((prevBurger) => upsertIngredientsToBurger(prevBurger,burgerItem.ingredient))
    }
    const handleDecrement = (burgerItem) => {
        updateBurger((prevBurger) => upsertIngredientsToBurger(prevBurger,burgerItem.ingredient, false))
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const totalPriceItem = item.qty * item.ingredient.price

    return (
            <ItemWrapper>
                <ItemContent>
                    <h3>{capitalizeFirstLetter(item.ingredient.name)}</h3>
                    <h4>$ {item.ingredient.price}</h4>
                        <Counter
                            value={item.qty}
                            onIncrement={() => handleIncrement(item)}
                            onDecrement={() => handleDecrement(item)}
                        />
                    <h4>Total Price: $ {totalPriceItem.toFixed(2)}</h4>
                </ItemContent>
            </ItemWrapper>
        //
        
    )
}

export default IngredientsMenuItem
