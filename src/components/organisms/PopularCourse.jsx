
import CardClass from "../molecules/CardClass";

export default function PopularCourse() {
    return (
        <div className="bg-white w-full flex justify-center px-[240px]">
            <div className="flex flex-col w-full my-[26px]">


                <div className="flex justify-between items-center w-full mb-[16px]">
                    <h2 className="font-bold text-2xl">Kursus Populer</h2>
                    <button className="text-[#6148FF] font-bold">Lihat Semua</button>
                </div>

                
                <div className="flex flex-row gap-[12px] font-bold text-center ">
                    <button className="px-[21px] py-[5px] bg-[#E8F1FF] text-black rounded-[15px] hover:bg-[#6148FF] hover:text-white">
                        All
                    </button>
                    <button className="px-[21px] py-[5px] bg-[#E8F1FF] text-black rounded-[15px] hover:bg-[#6148FF] hover:text-white ">
                        Data Science
                    </button>
                    <button className="px-[21px] py-[5px] bg-[#6148FF] text-white rounded-[15px] hover:bg-[#512ECC]">
                        UI/UX Design
                    </button>
                </div>
                <div className="flex flex-row w-full my-[2px] overflow-x-scroll">
                        <div className="flex justify-center gap-[10px] py-[16px]">
                            <CardClass
                                title="Belajar Web Designer dengan Figma"
                                instructor="Angela Doe"
                                category="UI/UX Design"
                                rating={4.7}
                                level="Intermediate Level"
                                modules={10}
                                duration={120}
                                price={249000}
                                image="/card-image.svg"
                            />
                            <CardClass
                                title="Belajar Web Designer dengan Figma"
                                instructor="Angela Doe"
                                category="UI/UX Design"
                                rating={4.7}
                                level="Intermediate Level"
                                modules={10}
                                duration={120}
                                price={249000}
                                image="/card-image.svg"
                            />
                            <CardClass
                                title="Belajar Web Designer dengan Figma"
                                instructor="Angela Doe"
                                category="UI/UX Design"
                                rating={4.7}
                                level="Intermediate Level"
                                modules={10}
                                duration={120}
                                price={249000}
                                image="/card-image.svg"
                            />
                        </div>
                </div>
                
            </div>
       </div>
);
}
