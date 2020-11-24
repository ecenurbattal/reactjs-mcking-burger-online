import React, { useContext } from 'react'
import BurgerContext from '../../contexts/BurgerContext'
import { Wrapper,BreadBottom,BreadTop,BurgerStyle} from './Burger.styles';
import './Burger.css';
import {makeBurger} from '../../utils/BurgerUtils';

const Burger = () => {
    const {burger} = useContext(BurgerContext);
    const burgerArray = [];

    return (
        <Wrapper>
            <BurgerStyle>
                <BreadTop></BreadTop>
                    {makeBurger(burger,burgerArray)}
                    {burgerArray.map((item) => (
                        <div className={item}></div>
                    ))}
                <BreadBottom></BreadBottom>
            </BurgerStyle>
        </Wrapper>
    )
}

export default Burger;
