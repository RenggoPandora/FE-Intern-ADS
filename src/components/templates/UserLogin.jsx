import { useState } from "react";
import axios from "axios";
import Login from "../organisms/Login";

function UserLoginLogo() {
  return (
    <div className="bg-[#6148FF] h-screen w-full flex justify-center items-center">
      <div>
        <img src="/logo.svg" alt="Logo" />
      </div>
    </div>
  );
}

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://be-intern-ads.vercel.app//api/login", {
        email,
        password,
      });

      // Store the token (e.g., in localStorage or context)
      localStorage.setItem("token", response.data.token);

      // Redirect to dashboard or another page
      window.location.href = "/belajar/beranda"; // Change this based on where you want to redirect
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex">
      <div className="w-6/10">
        <Login
          Teks="Masuk"
          labelInput="Email/No Telepon"
          idUser="email"
          TeksPosition="left"
          idPlaceholder="Contoh: johndoe@gmail.com"
          passwordPlaceholder="Masukkan Password"
          onSubmit={handleLogin} // Pass handleLogin to the Login component
          setEmail={setEmail} // Pass email setter
          setPassword={setPassword} // Pass password setter
          error={error} // Pass error message
        />
      </div>
      <div className="justify-end w-4/10">
        <UserLoginLogo />
      </div>
    </div>
  );
}
