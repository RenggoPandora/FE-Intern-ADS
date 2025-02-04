
import Input from '../atoms/Input'
import Button from '../atoms/Button'

export default function Search() {
  return (
    <div className="flex item-center bg-white rounded-2xl border w-[300px] px-2 py-2 h-15 mt-3 mr-4">
      <div className='justify-between flex w-full'>
    <Input placeholder={"Cari Data"}/>
    <Button>
        <img src="/search.png" alt="Search" />    
    </Button>        
    </div>
    </div>
  );
}
