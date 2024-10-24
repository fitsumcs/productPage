import { faker } from '@faker-js/faker';

export const generateProduct = () => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: parseFloat(faker.commerce.price()),
  images: Array.from({ length: 5 }, () => faker.image.url({ width: 400, height: 500, category: 'fashion' })),
  colors: Array.from({ length: 4 }, () => faker.color.rgb({ format: 'css' })),
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
});
