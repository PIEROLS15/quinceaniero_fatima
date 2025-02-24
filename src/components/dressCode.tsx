import { GiTie, GiHighHeel } from "react-icons/gi";
import { FaGift } from "react-icons/fa";

const DressCode = () => {
    return (
        <section className="flex items-center justify-center mb-20">
            <div className="bg-white border-2 border-primary rounded-2xl p-4 sm:p-16 text-primary">
                <div className="text-center mb-4 sm:mb-10 text-xl sm:text-5xl">
                    <h1><span className="font-bold">DRESS</span> CODE</h1>
                    <p className="text-base sm:text-lg">ELEGANTE</p>
                </div>
                <div className="flex flex-row space-x-4 sm:space-x-6">
                    <div className="flex flex-row items-center space-x-1">
                        <span className="font-Dancing text-lg sm:text-3xl">Chicos:</span>
                        <GiTie className="w-8 h-8 sm:w-16 sm:h-16 text-primary" />
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <span className="font-Dancing text-lg sm:text-3xl">Chicas:</span>
                        <GiHighHeel className="w-8 h-8 sm:w-16 sm:h-16 text-primary" />
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <span className="font-Dancing text-lg sm:text-3xl">Todos:</span>
                        <FaGift className="w-8 h-8 sm:w-16 sm:h-16 text-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DressCode;
