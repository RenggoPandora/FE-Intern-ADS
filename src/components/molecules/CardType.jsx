export default function CardType({ title, instructor, category, rating, level, modules, duration, image, type, className }) {
    return (
        <div className={`bg-white rounded-[20px] shadow-lg overflow-hidden ${className}`}>
            
            <img src={image} alt={title} className="w-full h-[80px] object-cover" />
            
            
            <div className="p-4">
                
                <div className="flex justify-between items-center">
                    <p className="text-[#6148FF] font-bold text-sm">{category}</p>
                    <div className="flex items-center">
                        <img src="/star.svg" className="w-[20px] h-auto"/>
                        <p className="ml-1 font-bold">{rating}</p>
                        
                    </div>
                </div>

                <div className="flex flex-col mt-1">
                    <h3 className="text-[14px] font-semibold">{title}</h3>
                    <p className="text-gray-500 text-[12px]">by {instructor}</p>
                </div>

                
                <div className="flex justify-between items-center gap-4 mt-2 text-[12px] text-gray-600">
                    <span className="flex items-center gap-1"><img src="/level.svg" alt="level" /> {level}</span>
                    <span className="flex items-center gap-1"><img src="/modul.svg" alt="modul" />{modules} Modul</span>
                    <span className="flex items-center gap-1"><img src="/time.svg" alt="time"/>{duration} Menit</span>
                </div>

                
                <div className="mt-4">
                    <button className="flex justify-between items-center w-full bg-[#6148FF] text-white px-4 py-2 rounded-lg font-semibold">
                        <span className="flex items-center gap-2">💎</span>
                        <p className="font-bold text-white">{type}</p>
                    </button>
                </div>
            </div>
       </div>
);
}
