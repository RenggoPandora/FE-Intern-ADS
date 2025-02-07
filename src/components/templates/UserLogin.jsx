import Login from "../organisms/Login"

function UserLoginLogo() {
    return (
      <div className='bg-[#6148FF]  h-screen w-full flex justify-center items-center'>
        <div>
            <img src='/logo.svg' alt='Logo'/>
        </div>
      </div>
    )
  }
  
  export default function UserLogin() {
    return (
      <div className='flex'>
        <div className=' w-6/10'>
        <Login Teks="Masuk" TeksPosition="left" idPlaceholder={"Contoh: johndoe@gmail.com"} passwordPlaceholder={"Masukkan Password"}/>
        
        <span>Belum punya akun? </span>
        <a href="/register">
            <span className="text-[#6148FF]">Daftar di sini</span>
        </a>

        </div>
        <div className=' justify-end w-4/10'>
        <UserLoginLogo />
        </div>
      </div>
    )
  }
  