import React from 'react';
import styled from 'styled-components';
import ColorOptions from './ColorOptions';
import SizeSelector from './SizeSelector';
import ActionButtons from './ActionButtons';

const ProductDetails = ({ product, selectedColor, selectedSize, handleColorClick, handleSizeClick }) => (
  <DetailsContainer>
    <ProductTitle>{product.name}</ProductTitle>
    <ProductDescription>{product.description}</ProductDescription>
    <ProductPrice>€{product.price.toFixed(2)}</ProductPrice>

    <ColorOptions colors={product.colors} selectedColor={selectedColor} onColorClick={handleColorClick} />
    <SizeSelector sizes={product.sizes} selectedSize={selectedSize} onSizeClick={handleSizeClick} />
    <ActionButtons disabled={!selectedColor || !selectedSize} />
  </DetailsContainer>
);

export default ProductDetails;

// Styled Components
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 300px;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
`;

const ProductDescription = styled.p`
  color: #666;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
