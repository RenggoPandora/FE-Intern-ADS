
export default function CardCategory({card}) {
  return (
    <div className="flex flex-col gap-[20px] rounded-[25px] p-[10px] mb-[14px]">
            <img src={card.imageSrc} alt={card.title} className="w-full h-full" />
            <h3 className="text-lg font-bold text-center">{card.title}</h3>
       </div>

  )
}
