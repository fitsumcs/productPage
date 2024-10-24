import React from 'react';
import styled from 'styled-components';

const SizeSelector = ({ sizes, selectedSize, onSizeClick }) => (
  <SizeContainer>
    {sizes.map((size, index) => (
      <SizeOption
        key={index}
        onClick={() => onSizeClick(size)}
        isSelected={size === selectedSize}
      >
        {size}
      </SizeOption>
    ))}
  </SizeContainer>
);

export default SizeSelector;

// Styled Components
const SizeContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeOption = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.isSelected ? '#000' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#000' : '#f0f0f0')};
  }
`;
