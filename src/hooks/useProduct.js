import { useState, useEffect } from 'react';
import { generateProduct } from '../services/productService';

export const useProduct = () => {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const productData = generateProduct();
    setProduct(productData);
    setMainImage(productData.images[0]);
  }, []);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    const colorIndex = product.colors.indexOf(color);
    setMainImage(product.images[colorIndex] || product.images[0]);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    const sizeIndex = product.sizes.indexOf(size);
    setMainImage(product.images[sizeIndex % product.images.length] || product.images[0]);
  };

  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  return {
    product,
    mainImage,
    selectedColor,
    selectedSize,
    handleColorClick,
    handleSizeClick,
    handleThumbnailClick,
  };
};
