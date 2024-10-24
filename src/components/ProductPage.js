import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { faker } from '@faker-js/faker';
import 'swiper/css';
import 'swiper/css/navigation';

export const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    // Generate random product data using @faker-js/faker
    const generateProduct = () => ({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      images: Array.from({ length: 5 }, () => faker.image.url({ width: 400, height: 500, category: 'fashion' })),
      colors: Array.from({ length: 2 }, () => faker.color.rgb({ format: 'css' })),
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
    });

    const productData = generateProduct();
    setProduct(productData);
    setMainImage(productData.images[0]); // Set initial main image
  }, []);

  // Handle color selection and update image
  const handleColorClick = (color) => {
    setSelectedColor(color);
    if (product) {
      const colorIndex = product.colors.indexOf(color);
      setMainImage(product.images[colorIndex] || product.images[0]);
    }
  };

// Handle size selection and update image
const handleSizeClick = (size) => {
    setSelectedSize(size);
    if (product) {
      // Change main image based on size selection (for demonstration purposes)
      const sizeIndex = product.sizes.indexOf(size);
      setMainImage(product.images[sizeIndex % product.images.length] || product.images[0]);
    }
  };
  

  // Handle thumbnail click to update main image
  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      {/* Main Image Section */}
      <MainImageContainer>
        <MainImage src={mainImage} alt="Main Product" />
        {/* Thumbnail Carousel */}
        <ThumbnailSlider>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {product.images.map((img, index) => (
              <SwiperSlide key={index}>
                <Thumbnail
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => handleThumbnailClick(img)}
                  isSelected={img === mainImage}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperButtonPrev className="swiper-button-prev"></SwiperButtonPrev>
          <SwiperButtonNext className="swiper-button-next"></SwiperButtonNext>
        </ThumbnailSlider>
      </MainImageContainer>

      {/* Product Details Section */}
      <ProductDetails>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>€{product.price.toFixed(2)}</ProductPrice>

        <ColorOptions>
          {product.colors.map((color, index) => (
            <ColorCircle
              key={index}
              color={color}
              onClick={() => handleColorClick(color)}
              isSelected={color === selectedColor}
            />
          ))}
        </ColorOptions>

        <SizeSelector>
          {product.sizes.map((size, index) => (
            <SizeOption
              key={index}
              onClick={() => handleSizeClick(size)}
              isSelected={size === selectedSize}
            >
              {size}
            </SizeOption>
          ))}
        </SizeSelector>

        <ButtonContainer>
          <AddToCartButton disabled={!selectedColor || !selectedSize}>
            Add to Cart
          </AddToCartButton>
          <MoreDetailsButton>More Details</MoreDetailsButton>
        </ButtonContainer>
      </ProductDetails>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;

const MainImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImage = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ThumbnailSlider = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin-top: 10px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? '2px solid black' : '1px solid #ccc')};
  margin-right: 5px;
`;

const SwiperButtonPrev = styled.div`
  position: absolute;
  top: 50%;
  left: -30px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const SwiperButtonNext = styled.div`
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const ProductDetails = styled.div`
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

const ColorOptions = styled.div`
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

const SizeSelector = styled.div`
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
