const isiCard = [
  { value: 450, label: "Active Users", color: "#489CFF" },
  { value: 25, label: "Active Class", color: "#73CA5C" },
  { value: 20, label: "Premium Class", color: "#6148FF" }
];

function Card() {
  return (
    <div className="flex">
      {isiCard.map((item, index) => (
        <div
          key={index}
          className={`w-1/3 h-40 rounded-3xl px-5 py-5 my-24 mx-10 border-none outline-none`}
          style={{ backgroundColor: item.color }}
          
        >
          <div className="bg-white rounded-[25px]">
          <img src='./logocard.svg' alt="logo" />
          </div>
          <div className='flex'>
          <h3 className="text-white text-xl font-semibold">{item.value}</h3>
          <p className="text-white text-2xl font-bold">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
  

function carddashboard() {
  return (
    <div>
      <Card/>
    </div>
  )
}

export default carddashboard