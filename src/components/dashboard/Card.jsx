
const cards= [
    {name: 'Active Users', value:'450', type: 'au'},
    {name: 'Active Class', value:'25', type: 'ac'},
    {name: 'Premium Class', value:'20', type: 'pc'},
];

function Card({ card }) {
    return (
        <div className={`flex items-center w-1/3 h-[108px] p-6 rounded-[25px] shadow-md ${card.type === "au" ? "bg-[#489CFF]" : card.type === "ac" ? "bg-[#73CA5C]" : "bg-[#6148FF]"} text-white`}>
            <div className="rounded-[25px] bg-white p-3 mr-4">
                <img src="/logocard.svg" alt="User" />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold">{card.value}</h2>
                <p className="text-xl font-bold">{card.name}</p>
            </div>
        </div>
    );
}
export default function CardDashboard() {
  return (
    <div className='items-center'>
    <div className='flex justify-between gap-[24px] mt-[79px] ml-[69px] mb-[54px] mr-[87px]'>
        {cards.map((card) => (
            <Card key={card.name} card={card} />
        ))}
    </div>
    </div>
  );
}
