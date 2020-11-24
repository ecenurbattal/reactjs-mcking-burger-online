import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import BurgerContext from '../../contexts/BurgerContext';
import Button from '../Button/Button';
import { Wrapper } from './IngredientsMenu.styles';
import IngredientsMenuItem from './IngredientsMenuItem';


const IngredientsMenu = () => {
    const {burger} = useContext(BurgerContext);
    const history = useHistory();

    const handleOrderClick = () => {
        history.push('/result');
    }

    const totalPrice = burger.reduce((previousValue, currentItem) => {
        return previousValue + currentItem.ingredient.price * currentItem.qty;
    }, 4);

    return (
        <Wrapper>
            <h3>Total Price: $ {totalPrice}</h3>
            {burger.map((item) => (
                <IngredientsMenuItem
                    item={item}
                />
            ))}
            <Button text='Order' onClick={handleOrderClick} fontSize='18px' width='75px'/>
        </Wrapper>
    )
}

export default IngredientsMenu
