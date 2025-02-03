const isiCard = [
    { value: 450, label: "Active Users" },
    { value: 25, label: "Active Class" },
    { value: 20, label: "Premium Class" }
  ];
  
  function Card() {
    return (
      <div className="flex">
        {isiCard.map((item, index) => (
          <div
            key={index}
            className="bg-[#6148FF] w-1/3 h-40 rounded-3xl px-5 py-5 my-24 mx-10 border-none outline-none"
          >
            <h3 className="text-white text-xl font-semibold">{item.value}</h3>
            <p className="text-white text-2xl font-bold">{item.label}</p>
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