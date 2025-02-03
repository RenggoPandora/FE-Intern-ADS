
const menuItem =[
  {label:'Dashboard',

  },
  {label:'Kelola Kelas',
},
  {label:'Keluar',
},
]


function sidebar() {
  return (
    <div className =' shadow-md h-screen w-60 bg-[#6148FF]'>

      <div>
        <img src='./logo.svg' alt = "logo" className= 'mx-auto'/>
      </div>

    <ul>
      {
        menuItem.map((item, index) => {
          return (
            <li key={index} className='text-white px-5 py-3 hover:bg-[#489cff] cursor-pointer font-bold text-2xl'>
              <p>{item.label}</p>
            </li>
          )
        })
      }
    </ul>
    </div>
  )
}

export default sidebar