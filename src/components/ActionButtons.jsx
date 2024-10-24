import React from 'react';
import styled from 'styled-components';

const ActionButtons = ({ disabled }) => (
  <ButtonContainer>
    <AddToCartButton disabled={disabled}>Add to Cart</AddToCartButton>
    <MoreDetailsButton>More Details</MoreDetailsButton>
  </ButtonContainer>
);

export default ActionButtons;

// Styled Components
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#000')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#333')};
  }
`;

const MoreDetailsButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
