import React from 'react';
import styled from 'styled-components';

const ProductImage = ({ mainImage }) => (
  <MainImageContainer>
    <MainImage src={mainImage} alt="Main Product" />
  </MainImageContainer>
);

export default ProductImage;

// Styled Components
const MainImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px; /* Set fixed width for image container */
`;



const MainImage = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;
