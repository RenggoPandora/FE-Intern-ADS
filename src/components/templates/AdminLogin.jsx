import Login from "../organisms/Login"

function LoginLogo() {
  return (
    <div className='bg-[#6148FF]  h-screen w-1/3 flex justify-center items-center'>
      <div>
          <img src='/logo.svg' alt='Logo'/>
      </div>
    </div>
  )
}

export default function AdminLogin() {
  return (
    <div className='flex'>
    <LoginLogo />
    <div className='flex flex-col w-5/6 justify-center items-center'>
      <Login Teks="Login" TeksPosition={"center"} idPlaceholder={"ID Admin"} passwordPlaceholder={"Password"} />
    </div>
    </div>
    
  )
}

