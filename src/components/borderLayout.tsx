import Image from "next/image";

const BorderLayout = () => {
    return (
        <div className="relative">

            {/* Esquina superior izquierda */}
            <Image
                src="/images/esquina_1.svg"
                alt="Esquina superior izquierda"
                width={650}
                height={650}
                priority
                className="fixed top-0 left-0 z-[-1]"
            />

            {/* Esquina superior derecha */}
            <Image
                src="/images/esquina_2.svg"
                alt="Esquina superior derecha"
                width={650}
                height={650}
                priority
                className="fixed top-0 right-0 z-[-1]"
            />

            {/* Esquina inferior izquierda */}
            <Image
                src="/images/esquina_3.svg"
                alt="Esquina inferior izquierda"
                width={650}
                height={650}
                priority
                className="fixed bottom-0 left-0 z-[-1]"
            />

            {/* Esquina inferior derecha */}
            <Image
                src="/images/esquina_4.svg"
                alt="Esquina inferior derecha"
                width={650}
                height={650}
                priority
                className="fixed bottom-0 right-0 z-[-1]"
            />
        </div>
    );
};

export default BorderLayout;
