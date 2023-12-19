/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CAROUSEL_STRUCTURE = [
  {
    img: '/images/portfolio-chrupek.png',
    alt: 'Strony Internetowe Online Masters',
  },
  {
    img: '/images/portfolio-villa.webp',
    alt: 'Sklepy Internetowe Online Masters',
  },
  {
    img: '/images/portfolio-instalacje.webp',
    alt: 'Social Media Online Masters',
  },
  {
    img: '/images/portfolio-fotowoltaika.png',
    alt: 'Aplikacje Webowe Online Masters',
  },
  {
    img: '/images/portfolio-king.webp',
    alt: 'Prowadzenie Wizytówek Google Online Masters',
  },
  {
    img: '/images/portfolio-biuro.webp',
    alt: 'Opieka nad Stroną WWW Online Masters',
  },
];

export const Carousel = () => (
  <article className="w-screen" id="cennik">
    <Swiper
      spaceBetween={40}
      autoplay={{ delay: 2000 }}
      loop
      centeredSlides
      modules={[Autoplay]}
      observer
      slidesPerView="auto"
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}>
      {CAROUSEL_STRUCTURE.map(({ img, alt }) => (
        <SwiperSlide key={img}>
          <Image width={470} height={300} src={img} alt={alt} loading="eager" className="rounded-3xl" />
        </SwiperSlide>
      ))}
    </Swiper>
  </article>
);
