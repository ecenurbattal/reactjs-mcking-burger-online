import React from 'react';
import {routes} from '../../config/Router';
import { Link } from 'react-router-dom';

import { Wrapper, Title, Menu, InlineContainer } from './Header.styles';

const Header = (props) => {
    return (
        <Wrapper>
            <Title>McKing Burger</Title>
            <InlineContainer>
                <Menu>
                    {routes
                        .filter((route) => !!route.isLink)
                        .map((route) => (
                            <li>
                                <Link to={route.path}>{route.title}</Link>
                            </li>
                    ))}
                </Menu>
            </InlineContainer>
            
    </Wrapper>
    );
};

export default Header;