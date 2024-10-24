import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ThumbnailCarousel = ({ images, onThumbnailClick, mainImage }) => (
  <ThumbnailSlider>
    <Swiper modules={[Navigation]} spaceBetween={10} slidesPerView={3} navigation>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Thumbnail
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => onThumbnailClick(img)}
            isSelected={img === mainImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </ThumbnailSlider>
);

export default ThumbnailCarousel;

// Styled Components
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
