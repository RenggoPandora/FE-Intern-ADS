import Nav from "../molecules/Nav"
import Search from "../molecules/Search"

export const NavbarHome = () => {
  return (
    <div>
        <div className='bg-[#6148FF] w-screen h-[100px] flex justify-between'>
                <div className='w-1/2 justify-center flex gap-[35px] items-center'>
                  <div className='mt-[20px] mb-[20px] flex items-center justify-center'>
                        <img src='/logo.svg'
                        className='w-[140px] h-[150px]' />
                  </div>
                  <Search/>
                </div>

                <div className='justify-end flex w-1/2 mt-[26px] mb-[22px] mr-28'>
                  <Nav/>
                </div>
            </div>
    </div>
  )
}
