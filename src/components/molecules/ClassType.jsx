
export default function ClassType() {
  return (
    <div className='w-full flex gap-6'>
        <div className='border-white bg-white rounded-[15px] items-center justify-center w-32 h-10 text-center hover:bg-[#6148FF] transition-colors duration-200 cursor-pointer'>
            <button className='items-center w-9/10 h-9/10 cursor-pointer hover:text-white'>All</button>
        </div>
        <div className='border-white bg-white rounded-[15px] items-center justify-center w-72 h-10 text-center hover:bg-[#6148FF] transition-colors duration-200 cursor-pointer'>
            <button className='items-center w-9/10 h-9/10 cursor-pointer hover:text-white'>Kelas Premium</button>
        </div>
        <div className='border-white bg-white rounded-[15px] items-center justify-center w-56 h-10 text-center hover:bg-[#6148FF] transition-colors duration-200 cursor-pointer'>
            <button className='items-center w-9/10 h-9/10 cursor-pointer hover:text-white'>Kelas Gratis</button>
        </div>
    </div>
  )
}
