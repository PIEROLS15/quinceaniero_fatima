import Image from "next/image";

const Name = () => {
    return (
        <div className="relative flex flex-col items-center mt-[140px] sm:mt-[170px] md:mt-[180px] xl:mt-[110px]">

            <Image
                src="/images/corona_2.svg"
                alt="Corona"
                width={420}
                height={380}
                priority
                className="absolute top-[-150px] sm:top-[-240px] hidden sm:block"
            />

            <Image
                src="/images/logo_nombre.svg"
                alt="Nombre"
                width={580}
                height={380}
                priority
                className="hidden sm:block"
            />

            {/* Diseño para pantallas pequeñas */}
            <Image
                src="/images/corona_2.svg"
                alt="Corona"
                width={210}
                height={190}
                priority
                className="absolute top-[-120px] sm:block md:hidden"
            />

            <Image
                src="/images/logo_nombre.svg"
                alt="Nombre"
                width={300}
                height={380}
                priority
                className="sm:block md:hidden"
            />

        </div>
    );
}

export default Name;
