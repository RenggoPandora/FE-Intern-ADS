import Sidebar from '../dashboard/Sidebar'
import DashboardHeader from '../organisms/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div><div className='flex'>
    <Sidebar />
    <div className='flex justify-end w-full'>
        <div className='flex flex-col w-5/6'>
        <DashboardHeader />
        <Outlet />
        </div>
        </div>
    </div></div>
  )
}
