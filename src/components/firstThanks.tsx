import Image from "next/image";
import Data from '@/data/data';

const FirstThanks = () => {
    return (
        <section className="px-4 py-8 md:py-12 space-y-6 md:space-y-8 text-center flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
                <div className="mb-6 md:mb-8 flex justify-center">
                    <Image
                        src="/images/banda_xv.svg"
                        alt="Corona"
                        width={600}
                        height={380}
                        priority
                        className="hidden sm:block"
                    />
                    <Image
                        src="/images/banda_xv.svg"
                        alt="Corona"
                        width={250}
                        height={380}
                        priority
                        className="sm:block md:hidden"
                    />
                </div>
                <h2 className="text-pink font-Tangerine text-3xl md:text-4xl lg:text-5xl font-bold px-2 leading-tight">
                    {Data.primer_agradecimiento}
                </h2>
                <div className="mt-11 mb-6 md:mb-8 flex justify-center">
                    <Image
                        src="/images/logo_nombre_2.svg"
                        alt="Corona"
                        width={500}
                        height={380}
                        priority
                        className="hidden sm:block"
                    />
                    <Image
                        src="/images/logo_nombre_2.svg"
                        alt="Corona"
                        width={200}
                        height={380}
                        priority
                        className="sm:block md:hidden"
                    />
                </div>
            </div>
        </section>
    );
}

export default FirstThanks;