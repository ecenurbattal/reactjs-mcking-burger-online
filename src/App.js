import React, { useState } from 'react';
import Container from './components/Container/Container';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import BurgerContext from './contexts/BurgerContext';
import SessionContext from './contexts/SessionContext';

const App = () => {
  
  const [isAuthenticated,setAuthenticated] = useState(false);
  const [burger, updateBurger] = useState([]);

  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
      }}
    >
      <BurgerContext.Provider
        value={{
          burger,
          updateBurger,
        }}
        >
          <Container>
            {isAuthenticated && <Header/>}
            <Content/>
          </Container>
        </BurgerContext.Provider>
    </SessionContext.Provider>
  );
};

export default App;
