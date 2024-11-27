import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Image } from '@chakra-ui/react';

export default function Intro() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Image src='/pattern/main/swiper-1.avif' boxSize='500' fit='cover' alt='Naruto Uzumaki' className='w-full' />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            boxSize='500'
            fit='cover'
            alt='Naruto Uzumaki'
            className='w-full'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src='https://images.unsplash.com/photo-1480930700499-dc44aa7cb2cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            boxSize='500'
            fit='cover'
            alt='Naruto Uzumaki'
            className='w-full'
          />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
