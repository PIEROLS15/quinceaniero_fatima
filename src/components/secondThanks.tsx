import Image from "next/image";
import Data from '@/data/data';

const SeconThanks = () => {
    return (
        <section className="px-4 py-8 md:py-12 space-y-6 md:space-y-8 text-center">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6 md:mb-8">
                    <Image
                        src="/images/linea_superior.svg"
                        alt="Corona"
                        width={600}
                        height={380}
                        priority
                        className="w-full h-auto max-w-[1200px] mx-auto"
                    />
                </div>

                <div className="relative">
                    <h2 className="absolute top-0 left-0 text-black font-Tangerine text-3xl md:text-4xl lg:text-5xl font-extrabold px-2 leading-tight opacity-40">
                        {Data.segundo_agradecimiento}
                    </h2>
                    <h2 className="text-pink font-Tangerine text-3xl md:text-4xl lg:text-5xl font-semibold px-2 leading-tight">
                        {Data.segundo_agradecimiento}
                    </h2>
                </div>


                <div className="mt-6 md:mt-8">
                    <Image
                        src="/images/linea_inferior.svg"
                        alt="Corona"
                        width={600}
                        height={380}
                        priority
                        className="w-full h-auto max-w-[1200px] mx-auto"
                    />
                </div>
            </div>
        </section>
    );
}

export default SeconThanks;