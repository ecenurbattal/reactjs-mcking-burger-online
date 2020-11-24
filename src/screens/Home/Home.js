import React, { useContext, useEffect } from 'react';
import BurgerContext from '../../contexts/BurgerContext';
import {ingredients} from '../../ingredients';
import IngredientsMenu from '../../components/IngredientsMenu/IngredientsMenu';
import Burger from '../../components/Burger/Burger';
import {buildBurger} from '../../utils/BurgerUtils';

const Home = () => {
    const {updateBurger} = useContext(BurgerContext);

    useEffect(() => {
        updateBurger(buildBurger(ingredients))
    },[])

    return (
        <div>
            <Burger/>
            <IngredientsMenu/>
        </div>
    )
}

export default Home
