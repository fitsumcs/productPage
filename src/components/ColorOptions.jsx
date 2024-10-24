import React from 'react';
import styled from 'styled-components';

const ColorOptions = ({ colors, selectedColor, onColorClick }) => (
  <ColorContainer>
    {colors.map((color, index) => (
      <ColorCircle
        key={index}
        color={color}
        onClick={() => onColorClick(color)}
        isSelected={color === selectedColor}
      />
    ))}
  </ColorContainer>
);

export default ColorOptions;

// Styled Components
const ColorContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border: ${(props) => (props.isSelected ? '2px solid black' : 'none')};
`;
