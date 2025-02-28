import Button from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import Data from '@/data/data'

const Assistance = () => {
    return (
        <>
            <section className="py-12 px-4 md:py-16 text-center">
                <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
                    <div className="flex justify-center mb-10 md:mb-12">
                        <FaWhatsapp className="w-24 h-24 text-pink" />
                    </div>

                    <header className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-pink font-Dancing font-black leading-tight">
                            Asistencia
                        </h2>
                    </header>

                    <div className="space-y-10 md:space-y-12 max-w-2xl mx-auto uppercase">
                        <section className="space-y-4 md:space-y-5">
                            <h3 className="text-xl md:text-2xl tracking-wider font-black text-primary">
                                Confirmación de asistencia
                            </h3>
                            <p className="text-sm font-semibold md:text-xl text-gray-700 tracking-wide">
                                {`${Data.asistencia}`}
                            </p>
                            <Button
                                label="Confirmar"
                                href={Data.confirmar}
                            />
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Assistance;