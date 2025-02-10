import Category from "../organisms/Category";
import Hero from "../organisms/Hero";
import Navbar from "../organisms/Navbar";
import PopularCourse from "../organisms/PopularCourse";

export default function Beranda() {
  return (
    
    <div className='flex-col'>

        <Navbar/>
        <Hero/>
        <Category/>
        <PopularCourse/>
    </div>
  )
}
