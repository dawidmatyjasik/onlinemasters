'use client';

import React from 'react';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CAROUSEL_STRUCTURE = [
  {
    img: '/images/gallery/Strony-internetowe-portfolio-1.jpg',
  },
  {
    img: '/images/gallery/Strony-internetowe-portfolio-2.jpg',
  },
  {
    img: '/images/gallery/Strony-internetowe-portfolio-3.jpg',
  },
  {
    img: '/images/gallery/Strony-internetowe-portfolio-6.jpg',
  },
  {
    img: '/images/gallery/Strony-internetowe-portfolio-1.jpg',
  },
  {
    img: '/images/gallery/Strony-internetowe-Zator-portfolio-5.jpg',
  },
  {
    img: '/images/gallery/Strony-internetowe-Zator-portfolio-6.png',
  },
];

export const Carousel = () => (
  <article>
    <Swiper
      spaceBetween={40}
      slidesPerView={3}
      autoplay={{ delay: 2000 }}
      loop
      centeredSlides
      modules={[Autoplay]}
      observer>
      {CAROUSEL_STRUCTURE.map(({ img }) => (
        <SwiperSlide key={img}>
          <Image width={470} height={300} src={img} alt="gallery" />
        </SwiperSlide>
      ))}
    </Swiper>
  </article>
);
