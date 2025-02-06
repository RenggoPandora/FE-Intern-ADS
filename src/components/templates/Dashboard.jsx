import TablePembayaran from '../dashboard/PaymentTable'
import DashboardHeader from '../organisms/Header'
import CardDashboard from '../dashboard/Card'
import Sidebar from '../dashboard/Sidebar'

export default function Dashboard() {
  return (
    <div className='flex'>
    <Sidebar />
    <div className='flex justify-end w-full'>
        <div className='flex flex-col w-5/6'>
        <DashboardHeader />
        <CardDashboard />
        <TablePembayaran />
        </div>
        </div>
    </div>
  )
}
