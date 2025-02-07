import Search from "../molecules/Search";

export default function Navbar() {
  return (
    <div className='fixed bg-[#6148FF] w-screen h-100/950 flex'>
        <div className='w-1/2 justify-center flex gap-[35px]'>
            
                <img src='/logo.svg'/>
                <Search/>
            
        </div>
        <div className='flex w-1/2 justify-end'>
            <img src='/masuk.svg' className=''/>

        </div>
    </div>
  )
}
