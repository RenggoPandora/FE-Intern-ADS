import CardDashboard from "../dashboard/Card";
import Sidebar from "../dashboard/Sidebar";
import DashboardHeader from "../organisms/Header";


export default function KelolaKelas() {
  return (
    <div className='flex'>
        <Sidebar />
    <div className='flex justify-end w-full'>
        <div className='flex flex-col w-5/6'>
        <DashboardHeader />
        <CardDashboard />
        </div>
    </div>
    </div>
  )
}
