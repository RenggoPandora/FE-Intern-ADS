import UserLoginLogo from "../molecules/UserLoginLogo";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Register() {
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate(); // Inisialisasi useNavigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  // Toggle visibility of password
  const togglePasswordVisibility = () => {
    setPasswordType(prevType => (prevType === "password" ? "text" : "password"));
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });

    if (id === "password") {
      setPassword(value);
      setPasswordValid(value.length >= 8);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (passwordValid) {
      try {
        const response = await axios.post('http://localhost:3000/api/register', formData);
        alert(response.data.message);
        
        // Alihkan ke halaman /belajar jika berhasil
        navigate('/belajar');
      } catch (error) {
        console.error(error);
        alert("Pendaftaran gagal, silakan coba lagi.");
      }
    } else {
      alert("Password minimal 8 karakter");
    }
  };

  return (
    <div className='flex'>
      <div className='w-6/10'>
        <div className='flex flex-col items-center justify-center min-h-screen'>
          <div className='w-[452px]'>
            <div className='text-left text-[#6148FF] text-2xl font-bold mb-8'>
              Daftar
            </div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block mb-2 font-medium'>
                  Nama
                </label>
                <div className="relative">
                  <input 
                    type='text'
                    id='name'
                    placeholder='Nama Lengkap'
                    className="border rounded-[20px] w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label htmlFor='email' className='block mb-2 font-medium'>
                  Email
                </label>
                <div className="relative">
                  <input 
                    type='text'
                    id='email'
                    placeholder='Contoh : Johndee@gmail.com'
                    className="border rounded-[20px] w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label htmlFor='phone' className='block mb-2 font-medium'>
                  Nomor Telepon
                </label>
                <div className="relative">
                  <input 
                    type='text'
                    id='phone'
                    placeholder='+62.'
                    className="border rounded-[20px] w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label htmlFor='password' className='block mb-2 font-medium'>
                  Buat Password
                </label>
                <div className="relative">
                    <input
                        type={passwordType}
                        id="password"
                        placeholder="Buat Password"
                        className="border rounded-[20px] w-full py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
                        value={password}
                        onChange={handleInputChange}
                    />
                    {formSubmitted && (
                      <img
                          src={passwordValid ? "/VALID.svg" : "/X.svg"}
                          alt={passwordValid ? "valid password" : "invalid password"}
                          className="absolute top-1/2 right-12 transform -translate-y-1/2"
                      />
                    )}
                    <img
                        src={passwordType === 'password' ? '/eye.svg' : '/eye.svg'}
                        alt="toggle visibility"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    />
                </div>
              </div>

              <button type="submit" className='bg-[#6148FF] text-white rounded-[30px] py-4 font-semibold flex w-full justify-center mt-5'>
                Daftar
              </button>
              <div className="mt-4 justify-center text-center">
                <span>Sudah punya akun? </span>
                <a href="/belajar">
                  <span className="text-[#6448FF]">Masuk di sini</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='w-4/10'>
        <UserLoginLogo />
      </div>
    </div>
  );
}
