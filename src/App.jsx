import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Dashboard from "./components/templates/Dashboard"
import KelolaKelas from "./components/templates/KelolaKelas";

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
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
