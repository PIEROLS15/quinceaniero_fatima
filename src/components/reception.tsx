
import Button from "@/components/ui/button";
import { GiHighHeel } from "react-icons/gi";
import Data from '@/data/data'

const Reception = () => {
    return (
        <>
            <section className="py-12 px-4 md:py-16 text-center">
                <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
                    <div className="flex justify-center mb-10 md:mb-12">
                        <GiHighHeel className="w-24 h-24 text-primary" />
                    </div>

                    <header className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary font-Dancing font-black leading-tight">
                            Recepción
                        </h2>
                    </header>

                    <div className="space-y-10 md:space-y-12 max-w-2xl mx-auto uppercase">
                        <section className="space-y-4 md:space-y-5">
                            <h3 className="text-xl md:text-2xl tracking-wider font-black text-primary">
                                Salón de Recepción
                            </h3>
                            <p className="text-sm font-semibold md:text-xl text-gray-700 tracking-wide">
                                {Data.lugar}
                                {Data.direccion}
                            </p>
                            <Button
                                label="Ubicación"
                                href="https://maps.app.goo.gl/rWL3vbdr8mxEAVtn9"
                            />
                        </section>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Reception;