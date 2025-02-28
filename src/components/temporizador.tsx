'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import data from '@/data/data';

const { fecha } = data;

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;
const MS_PER_DAY = MS_PER_HOUR * 24;

interface Tiempo {
    d: number;
    h: number;
    m: number;
    s: number;
}

const Temporizador: React.FC = () => {
    const [tiempo, setTiempo] = useState<Tiempo>({
        d: 0, h: 0, m: 0, s: 0
    });

    const fechaObjetivo = useMemo(() => new Date(fecha), []);

    const calcularTiempo = useCallback(() => {
        const ahora = Date.now();
        const diff = fechaObjetivo.getTime() - ahora;

        if (diff <= 0) return;

        const d = Math.floor(diff / MS_PER_DAY);
        const h = Math.floor((diff % MS_PER_DAY) / MS_PER_HOUR);
        const m = Math.floor((diff % MS_PER_HOUR) / MS_PER_MINUTE);
        const s = Math.floor((diff % MS_PER_MINUTE) / MS_PER_SECOND);

        setTiempo(prev => (
            prev.d === d && prev.h === h && prev.m === m && prev.s === s
                ? prev
                : { d, h, m, s }
        ));
    }, [fechaObjetivo]);

    useEffect(() => {
        calcularTiempo();
        const timer = setInterval(calcularTiempo, 1000);
        return () => clearInterval(timer);
    }, [calcularTiempo]);

    return (
        <section
            className="flex-center w-full p-4 bg-transparent"
            aria-label="Cuenta regresiva"
            role="timer"
            aria-live="polite"
        >
            <article className="rounded-xl md:rounded-3xl p-4 md:p-6 lg:p-8 transition-all duration-300">
                <h2 className="text-center mb-2 md:mb-3 font-semibold text-xl sm:text-xl md:text-2xl text-pink uppercase tracking-wider">
                    Faltan
                </h2>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-3 md:gap-4 lg:gap-6">
                    {[['d', 'Días'], ['h', 'Horas'], ['m', 'Minutos'], ['s', 'Segundos']].map(([key, label], index) => (
                        <React.Fragment key={key}>
                            <UnidadTiempo
                                value={tiempo[key as keyof Tiempo]}
                                label={label}
                                isLast={index === 3}
                            />
                            {index < 3 && <Separador />}
                        </React.Fragment>
                    ))}
                </div>
            </article>
        </section>
    );
};

interface UnidadTiempoProps {
    value: number;
    label: string;
    isLast: boolean;
}

const UnidadTiempoComponent: React.FC<UnidadTiempoProps> = ({ value, label, isLast }) => (
    <div
        className={`flex flex-col items-center mx-1 md:mx-2 transition-transform duration-200 hover:scale-[1.02] ${isLast ? 'mr-0' : 'mr-1 md:mr-2'
            }`}
    >
        <span
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pink"
            aria-hidden="true"
        >
            {String(value).padStart(2, '0')}
        </span>
        <span
            className="text-sm xs:text-xs sm:text-sm md:text-base font-medium text-pink mt-1 md:mt-2 tracking-wide"
            aria-label={`${value} ${label}`}
        >
            {label}
        </span>
    </div>
);

UnidadTiempoComponent.displayName = 'UnidadTiempo';
const UnidadTiempo = React.memo(UnidadTiempoComponent);

const SeparadorComponent: React.FC = () => (
    <span
        className="text-xl sm:text-2xl md:text-3xl text-primary/80 mx-1 sm:mx-2 self-center hidden sm:block"
        aria-hidden="true"
    >
        :
    </span>
);

SeparadorComponent.displayName = 'Separador';
const Separador = React.memo(SeparadorComponent);

Temporizador.displayName = 'Temporizador';
export default React.memo(Temporizador);