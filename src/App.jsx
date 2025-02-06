import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./components/templates/Dashboard"
import KelolaKelas from "./components/templates/KelolaKelas";
import Form from "./components/kelola-kelas/Form";
import Login from "./components/templates/AdminLogin";

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

function App() {
  return <RouterProvider router={router} />;
}

export default App
