import Data from '@/data/data';

const Date = () => {
    return (
        <section className="w-full mx-auto py-2 px-4">
            <div className="flex items-center justify-between">
                <div className="flex-1 text-center flex flex-col">
                    <div className="flex items-center mb-2">
                        <hr className="flex-1 border-t-2 border-primary" />
                    </div>
                    <p className="text-primary text-xl uppercase tracking-wider font-semibold">{Data.dia}</p>
                    <div className="flex items-center mt-2">
                        <hr className="flex-1 border-t-2 border-primary" />
                    </div>
                </div>

                <div className="mx-4">
                    <div className="bg-primary rounded-full py-5 px-4 text-center flex flex-col justify-center">
                        <p className="text-white uppercase text-lg mb-1">{Data.mes}</p>
                        <p className="text-white text-5xl font-semibold leading-none">{Data.numero}</p>
                        <p className="text-white text-lg mt-1">{Data.anio}</p>
                    </div>
                </div>

                <div className="flex-1 text-center flex flex-col">
                    <div className="flex items-center mb-2">
                        <hr className="flex-1 border-t-2 border-primary" />
                    </div>
                    <p className="text-primary text-xl uppercase tracking-wider font-semibold">{Data.hora} p.m.</p>
                    <div className="flex items-center mt-2">
                        <hr className="flex-1 border-t-2 border-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Date;