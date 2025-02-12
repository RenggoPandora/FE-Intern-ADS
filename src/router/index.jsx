import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/templates/Dashboard";
import KelolaKelas from "../components/templates/KelolaKelas";
import Layout from "../components/layouts/Layout";
import UserLogin from "../components/templates/UserLogin";
import Register from "../components/templates/Register";
import Beranda from "../components/templates/Beranda";
import AdminLogin from "../components/templates/AdminLogin";
import Classes from "../components/templates/Classes";

export default function Router() {
  return (
    <Routes>
        <Route path='/'>
        <Route path='belajar/beranda' element={<Beranda/>}/>
        <Route path='belajar/' element={<UserLogin/>}/>
        <Route path='belajar/register' element={<Register/>}/>
        <Route path='belajar/classes' element={<Classes/>}/>
        

        <Route index element={<Beranda/>}/>
        <Route path='admin/login' element={<AdminLogin/>}/>
            <Route path='admin/' element={<Layout/>}>
                <Route path='dashboard' element={<Dashboard/>}/> 
                <Route path='kelola-kelas' element={<KelolaKelas/>}/>
            </Route>
        </Route>

        
            
        
    </Routes>
  )
}


/*
const router = createBrowserRouter([
    {
      path: "/Admin",
      element: <Dashboard />,
    },
    {
      path: "/Admin/dashboard",
      element: <Dashboard />,
    },
    {
      path: "Admin/kelola-kelas",
      element: <KelolaKelas/>,
    },
    {
      path: "Admin/kelola-kelas/tambah-kelas",
      element: <Form/>
    },
    {
      path: "Admin/keluar",
      element: <Login/>
    },
    {
      path: "Belajar/login",
      element: <Login/>
    }
  ]);
  */