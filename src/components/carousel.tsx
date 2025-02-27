'use client';

import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, // Activa las bolitas dinámicas
      },
    });

    return () => swiper.destroy();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="swiper-container relative w-full max-w-3xl h-64 md:h-96 lg:h-112">
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide flex justify-center items-center">
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={300}
                height={600}
                className="object-cover mx-auto"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bolitas de paginación debajo del carrusel */}
      <div className="swiper-pagination mt-4 text-primary"></div>
    </div>
  );
};

export default Carousel;
