export default function Login() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-[452px]">
          <div className="text-[#6148FF] text-2xl font-bold text-center mb-8">
            Login
          </div>
          <form className="flex flex-col">
            {/* Input ID Admin */}
            <div className="mb-4">
              <label htmlFor="idAdmin" className="block mb-2 font-medium">
                ID Admin
              </label>
              <input
                type="text"
                id="idAdmin"
                placeholder="ID Admin"
                className="border rounded-[20px] w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
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
                  type="password"
                  id="password"
                  placeholder="Masukkan password"
                  className="border rounded-[20px] w-full py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#6148FF]"
                />
                {/* Ikon Mata (Silakan ganti src sesuai dengan ikon Anda) */}
                <img
                  src="/eye.svg"
                  alt="show password"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                />
              </div>
            </div>
  
            
  
            {/* Tombol Masuk */}
            <button className="bg-[#6148FF] text-white rounded-[30px] py-4 font-semibold flex w-full justify-center mt-5">
          <a href="/Admin/dashboard" className="text-white w-full justify-center">Masuk</a>
            </button>
          </form>
        </div>
      </div>
    );
  }
  