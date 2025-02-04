const Sidebar = () => {
  return (
    <div className='fixed h-screen w-1/6 bg-[#6148FF]'>
        <div className='justify-center items-center flex'>
            <img src="/logo.svg" alt="Logo" />
        </div>
        <ul className='mt-3'>
            <li className='font-bold text-base text-white px-8 py-4 hover:bg-[#489CFF]'>
              <a href="/Admin/dashboard" className="text-white w-full flex">Dashboard</a>
            </li>
            <li className='font-bold text-base text-white px-8 py-4 hover:bg-[#489CFF]'>
             <a href="/Admin/kelola-kelas" className="text-white w-full flex">Kelola Kelas</a>
            </li>
            <li className='font-bold text-base text-white px-8 py-4 hover:bg-[#489CFF]'>
             <a href="/Admin/keluar" className="text-white w-full flex">Keluar</a>
            </li>
        </ul>
        
   
    </div>
  )
}

export default Sidebar