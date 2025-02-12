import CustomCheckbox from "../atoms/CustomCheckbox";


export default function ClassFilter() {
  return (
    <div className='flex-col border-transparent rounded-2xl bg-white w-1/2 pt-2.5 pr-20 pl-6 pb-2.5'>
        <div className='text-base font-bold pb-2.5'>
            Filter
        </div>

        <div className='flex-col gap-[15px] mb-[10px]'>
            <div>
                <CustomCheckbox label='Paling Baru'/>    
            </div>
            <div>
                <CustomCheckbox label='Paling Populer' />    
            </div>
            <div>
                <CustomCheckbox label='Promo' />    
            </div>
            
        </div>

        <div className='text-base font-bold mb-2.5'>
            Kategori
        </div>

        <div className='flex-col gap-[15px] mb-[10px] whitespace-nowrap'>
            <div>
                <CustomCheckbox label='UI/UX Design'/>    
            </div>
            <div>
                <CustomCheckbox label='Web Development' />    
            </div>
            <div>
                <CustomCheckbox label='Android Development' />    
            </div>
            <div>
                <CustomCheckbox label='Data Science' />    
            </div>
            <div>
                <CustomCheckbox label='Business Intelligence' />    
            </div>
            
        </div>

        <div className='text-base font-bold mt-7 mb-2.5 whitespace-nowrap'>
            Level Kesulitan
        </div>

        <div className='flex-col gap-[15px] mb-[10px] '>
            <div>
                <CustomCheckbox label='Semua Level'/>    
            </div>
            <div>
                <CustomCheckbox label='Beginner Level' />    
            </div>
            <div>
                <CustomCheckbox label='Intermediate Level' />    
            </div>
            <div>
                <CustomCheckbox label='Advanced Level' />    
            </div>
        </div>

    </div>
  )
}


