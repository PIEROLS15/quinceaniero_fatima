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

            <div className="flex flex-col items-center">
                <h2 className="first-letter:font-fleur first-letter:text-[100px] sm:first-letter:text-[300px] font-Dancing text-[80px] sm:text-[200px] text-primary leading-none">
                    Fátima
                </h2>
                <Image
                    src="/images/fatima.svg"
                    alt="Nombre"
                    width={580}
                    height={380}
                    priority
                    className="hidden sm:block -mt-12"
                />
            </div>



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
                src="/images/fatima.svg"
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
