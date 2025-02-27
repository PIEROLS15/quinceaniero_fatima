'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    '/images/foto_1.jpeg',
    '/images/foto_2.jpeg',
    '/images/foto_3.jpeg'
];

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <div className="flex flex-col items-center my-10 relative" {...handlers}>
            {/* Contenedor principal con relative */}
            <div className="relative flex items-center">
                {/* Botón anterior (fuera del carrusel) */}
                <button
                    onClick={prevSlide}
                    className="hidden md:flex absolute left-[-80px] bg-primary text-white p-2 rounded-full shadow-lg"
                >
                    <ChevronLeft size={32} />
                </button>

                {/* Contenedor de la imagen */}
                <div className="relative w-64 h-96 overflow-hidden rounded-lg shadow-lg">
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={images[index]}
                            src={images[index]}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>
                </div>

                {/* Botón siguiente (fuera del carrusel) */}
                <button
                    onClick={nextSlide}
                    className="hidden md:flex absolute right-[-80px] bg-primary text-white p-2 rounded-full shadow-lg"
                >
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Indicadores de puntos solo en móvil */}
            <div className="flex mt-4 space-x-2 md:hidden">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === index ? 'bg-primary' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
}
