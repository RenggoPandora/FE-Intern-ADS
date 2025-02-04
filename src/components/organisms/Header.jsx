import Search from "../molecules/Search";


export default function DashboardHeader() {
  return (
    <div className='flex justify-between px-4 py-2 bg-[#EBF3FC] text-white w-full h-[100px] '>
        <h1 className="px-3 py-6 ml-[40px] text-2xl font-bold text-[#6148FF]">
            Hi, Admin!
        </h1>
        <Search />
    </div>
  );
}


