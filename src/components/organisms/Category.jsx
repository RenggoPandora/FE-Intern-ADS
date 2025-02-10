import CardCategory from "../molecules/CardCategory";

export default function Category() {
    return (
        <div className="bg-[#EBF3FC] w-full flex justify-center px-[240px]">
            <div className="flex flex-col w-full my-[26px]">
                
                <div className="flex justify-between items-center w-full">
                    <h2 className="font-bold text-2xl">Kategori Belajar</h2>
                    <button className="text-[#6148FF] font-bold">Lihat Semua</button>
                </div>

                
                <div className="flex flex-row gap-[10px] w-full my-[26px] ">
                    <CardCategory card={{ imageSrc: "/category-ui_ux.svg", title: "UI/UX Design" }} />
                    <CardCategory card={{ imageSrc: "/category-ui_ux.svg", title: "UI/UX Design" }} />
                    <CardCategory card={{ imageSrc: "/category-ui_ux.svg", title: "UI/UX Design" }} />
                    <CardCategory card={{ imageSrc: "/category-ui_ux.svg", title: "UI/UX Design" }} />
                </div>
            </div>
        </div>
    );
}