import { Route, Routes } from "react-router-dom";
import AdminLogin from "../components/templates/AdminLogin";
import Dashboard from "../components/templates/Dashboard";
import KelolaKelas from "../components/templates/KelolaKelas";
import Layout from "../components/layouts/Layout";

export default function Router() {
  return (
    <Routes>
        <Route path='/'>
        <Route index element={<AdminLogin/>}/>

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