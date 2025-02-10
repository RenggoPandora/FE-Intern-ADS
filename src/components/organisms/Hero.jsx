

export default function Hero() {
    return (
        <div className="flex items-center bg-[#6148FF] text-white text-2xl font-bold text-center relative">
        <div className="relative flex justify-end w-2/3 h-1/2">
            <div className="absolute h-full w-1/2 align-center bg-gradient-to-l from-[#6148FF] to-transparent "></div>
            <img src="/BG-HERO.svg" alt="Hero" className="w-full h-full" />
            </div>
            <div className="flex flex-col items-center mx-auto">
                <h1 className="text-2xl font-bold text-left">Belajar <br></br>dari Praktisi Terbaik!</h1>
                <div className='border-1 bg-white rounded-[10px] w-[250px] h-[40px] items-center mt-[16px]'>
                <button className='cursor-pointer w-full text-[#6148FF] text-[16px]'>Ikuti Kelas</button>
                </div>
            </div>
            </div>

      
    );

}
