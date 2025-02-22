import Image from "next/image";

const Name = () => {
    return ( 
        <div className="relative flex flex-col items-center mt-[130px] sm:mt-[170px] md:mt-[180px] xl:mt-[100px]">

            <Image
                src="/images/corona_1.svg"
                alt="Corona"
                width={780}  
                height={480}
                priority
                className="absolute top-[-150px] sm:top-[-300px]"
            />

            <Image
                src="/images/logo_nombre.svg"
                alt="Nombre"
                width={580}
                height={380}
                priority
            />
        </div>
    );
}
 
export default Name;
