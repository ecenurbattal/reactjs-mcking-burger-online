import React from 'react';

const BurgerContext = React.createContext({
    burger: [], //{qty, ingredient: {} }
    updateBurger: (newBurger) => {},
});

export default BurgerContext;