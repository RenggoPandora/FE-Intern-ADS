
import Sidebar from './components/sidebar'
import HeaderDashboard from './components/HeaderDashboard'
import Carddashboard from './components/carddashboard'
function App() {
  return (
    <div className ='flex'>
    <Sidebar/>
    <div className='flex flex-col w-full'>
      <HeaderDashboard/>
      <Carddashboard/>
    </div>
    </div>
  )
}

export default App
