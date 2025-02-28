import Image from "next/image";

interface PhotoFrame {
    image: string;
}

const Photoframe: React.FC<PhotoFrame> = ({ image }) => {
    return (
        <section className="md:py-12 space-y-6 md:space-y-8 text-center">
            <div className="w-full mx-auto relative">
                {/* Contenedor de la imagen */}
                <div className="relative w-full aspect-[3/4] md:aspect-auto"> {/* Ajuste de relación de aspecto */}
                    <Image
                        src={image}
                        alt="foto"
                        width={600}
                        height={380}
                        priority
                        className="w-full h-full object-cover object-top" // Prioriza la parte superior de la imagen
                        style={{ objectPosition: "top" }} // Asegura que la parte superior esté visible
                    />
                </div>

                {/* Marco superior */}
                <div className="absolute top-0 left-0 w-full z-10">
                    <Image
                        src="/images/wave(3).svg"
                        alt="Marco superior"
                        width={600}
                        height={380}
                        priority
                        className="w-full h-auto mx-auto"
                    />
                </div>

                {/* Marco inferior */}
                <div className="absolute bottom-0 left-0 w-full z-10">
                    <Image
                        src="/images/wave(4).svg"
                        alt="Marco inferior"
                        width={600}
                        height={380}
                        priority
                        className="w-full h-auto mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}

export default Photoframe;