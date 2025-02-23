import Image from "next/image";
import Data from '@/data/data';

const Parents = () => {
    return (
        <section className="py-6 px-4 text-center space-y-8">
            <div className="mb-8">
                <Image
                    src="/images/corona_1.svg"
                    alt="Corona"
                    width={600}
                    height={380}
                    priority
                    className="hidden sm:block"
                />
            </div>
            <header>
                <h2 className="text-4xl text-primary font-Dancing font-black">
                    Con la compañia de
                </h2>
            </header>
            <div className="space-y-8 max-w-2xl mx-auto">
                <section className="space-y-3">
                    <h3 className="font-Cookie text-primary font-semibold text-3xl mb-2">
                        Mis padres
                    </h3>
                    <div className="space-y-1">
                        <p className="mb-2">{Data.padres.padre}</p>
                        <p>{Data.padres.madre}</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="font-Cookie text-primary font-semibold text-3xl mb-2">
                        Mis padrinos
                    </h3>
                    <div className="space-y-1">
                        <p className="mb-2">{Data.padrinos.padrino}</p>
                        <p>{Data.padrinos.madrina}</p>
                    </div>
                </section>
            </div>

            <footer className="mt-12">
                <p className="uppercase tracking-wide text-sm font-semibold text-gray-700">
                    {Data.invitacion}
                </p>
            </footer>
        </section>
    );
}

export default Parents;