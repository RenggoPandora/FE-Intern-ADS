
import CheckedClass from "../organisms/CheckedClass";
import ClassFilter from "../organisms/ClassFilter";
import HeaderHome from "../organisms/HeaderHome";
import { NavbarHome } from "../organisms/NavbarHome";

export default function Classes() {
  return (
    <div className='bg-[#EBF3FC]'>
        <NavbarHome/>
        <div className='justify-center items-center ml-[225px] mr-[215px]'>
        <HeaderHome/>
            <div className='flex justify-between'>
                <ClassFilter/>
                <div className='juistify-between flex-col w-full ml-14'>
                    
                    <CheckedClass/>
                </div>
            </div>
        </div>
    </div>
  )
}
