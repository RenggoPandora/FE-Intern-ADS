import Input from "../atoms/Input";


export default function HeaderHome() {
  return (
    <div className='w-full h-11 flex justify-between mt-12 items-center mb-[31px]'>
        <div className='font-bold text-2xl items-center'>
            Topik Kelas
        </div>
        
            <div className='flex border h-2xl rounded-3xl bg-white justify-between items-center '>
                <Input placeholder={"Cari Kelas.."}/>
                <div className='border-[#6148FF] rounded-[12px] bg-[#6148FF] mr-[16px] mb-[6px] mt-[6px] w-[32px] h-[32px] flex justify-center items-center'>
                <img src="/search.png" alt="Search" />
                </div>
            </div>
        
    </div>
  )
}
