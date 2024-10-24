import React from 'react';
import styled from 'styled-components';
import { useProduct } from '../hooks/useProduct';
import ProductImage from './ProductImage';
import ThumbnailCarousel from './ThumbnailCarousel';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  const {
    product,
    mainImage,
    selectedColor,
    selectedSize,
    handleColorClick,
    handleSizeClick,
    handleThumbnailClick,
  } = useProduct();

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <ProductImage mainImage={mainImage} />
      <ThumbnailCarousel images={product.images} onThumbnailClick={handleThumbnailClick} mainImage={mainImage} />
      <ProductDetails
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        handleColorClick={handleColorClick}
        handleSizeClick={handleSizeClick}
      />
    </Container>
  );
};

export default ProductPage;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row; /* Ensures side-by-side layout */
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  max-width: 1200px; /* Optional: set max width */
  margin: 0 auto; /* Center the container */
`;







