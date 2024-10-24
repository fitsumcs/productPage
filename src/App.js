import React from 'react';
import styled from 'styled-components';
import { ProductPage } from './components/ProductPage';

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo>AMAZON SHOP</Logo>
        <NavIcons>
          <CartIcon>
            <i className="icon-cart">🛒</i>
            <span>1</span>
          </CartIcon>
        </NavIcons>
      </Header>
      <ProductPage />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 20px;
`;

const CartIcon = styled.div`
  position: relative;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
  }
`;
