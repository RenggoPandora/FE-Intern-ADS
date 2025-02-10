import Search from "../molecules/Search";

export default function Navbar() {
  return (
    <div className='bg-[#6148FF] w-screen h-[100px] flex justify-between'>
        <div className='w-1/2 justify-center flex gap-[35px] items-center'>
          <div className='mt-[20px] mb-[20px] flex items-center justify-center'>
                <img src='/logo.svg'
                className='w-[140px] h-[150px]' />
          </div>
          <Search/>
        </div>

        <div className='justify-center flex w-1/2 mt-[26px] mb-[22px]'>
          <div className='flex w-1/2 justify-end items-center gap-[8px] cursor-pointer' href='/belajar'>
            <img src='/masuk.svg' />
            <a href='/belajar' className='justify-center items-center text-white'>Masuk</a>
          </div>
        </div>
    </div>
  )
}
