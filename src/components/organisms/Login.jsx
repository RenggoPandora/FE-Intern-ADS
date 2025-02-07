import { useState } from 'react';

export default function Login({ Teks,labelInput, idUser, TeksPosition, idPlaceholder, passwordPlaceholder }) {
  const [passwordType, setPasswordType] = useState("password");

  // Toggle visibility of password
  const togglePasswordVisibility = () => {
    setPasswordType(prevType => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-[452px]">
        {/* Conditionally position the text */}
        <div className={`${TeksPosition === "left" ? "text-left" : "text-center"} text-[#6148FF] text-2xl font-bold mb-8`}>
          {Teks}
        </div>
        <form className="flex flex-col">
          {/* Input ID Admin */}
          <div className="mb-4">
            <label htmlFor={idUser} className="block mb-2 font-medium">
              {labelInput}
            </label>
            <input
              type="text"
              id={idUser}
              placeholder={idPlaceholder}
              className="border rounded-[20px] w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
            />
          </div>

          {/* Input Password */}
          <div className="mb-2 relative">
            <div className="justify-between flex">
              <label htmlFor="password" className="block mb-2 font-medium">
                Password
              </label>
              <div className="flex justify-end">
                <a href="/forgot-password" className="text-[#6148FF] text-sm font-medium">
                  Lupa Kata Sandi
                </a>
              </div>
            </div>

            <div className="relative">
              <input
                type={passwordType}
                id="password"
                placeholder={passwordPlaceholder}
                className="border rounded-[20px] w-full py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
              />
              {/* Ikon Mata */}
              <img
                src={passwordType === "password" ? "/eye.svg" : "/eye.svg"} // Sesuaikan dengan ikon mata terbuka/tutup
                alt="toggle password visibility"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          {/* Tombol Masuk */}
          <button className="bg-[#6148FF] text-white rounded-[30px] py-4 font-semibold flex w-full justify-center mt-5">
            <a href={TeksPosition === "left" ? "/belajar/beranda" : "/admin/dashboard"} className="text-white w-full justify-center">
              Masuk
            </a>
          </button>

          {/* Conditional rendering for the "Belum punya akun?" section */}
          {TeksPosition === "left" && (
            <div className="mt-4 justify-center text-center">
              <span>Belum punya akun? </span>
              <a href="belajar/register">
                <span className="text-[#6448FF]">Daftar di sini</span>
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
