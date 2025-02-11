export default function CardCategory({ card }) {
  const defaultImage = "/media/category/default-category.svg";

  return (
    <div className="flex flex-col gap-[20px] rounded-[25px] p-[10px] mb-[14px]">
      <img
        src={card.imageSrc || defaultImage}
        alt={card.title}
        className="w-full h-full"
        onError={(e) => (e.target.src = defaultImage)} // Fallback jika path salah
      />
      <h3 className="text-lg font-bold text-center">{card.title}</h3>
    </div>
  );
}
