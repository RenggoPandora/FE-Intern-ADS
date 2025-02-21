import { useEffect, useState } from "react";
import CardCategory from "../molecules/CardCategory";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null); // Tambahkan state untuk error

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/category"); // Pastikan URL lengkap
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setCategories(result.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories. Please try again later.");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-[#EBF3FC] w-full flex justify-center px-[240px]">
      <div className="flex flex-col w-full my-[26px]">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-bold text-2xl">Kategori Belajar</h2>
          <button className="text-[#6148FF] font-bold">Lihat Semua</button>
        </div>

        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="flex flex-row gap-[10px] w-full my-[26px] ">
            {categories.map((category) => (
              <CardCategory
                key={category.id}
                card={{
                  imageSrc: `/media/category/${category.imagePath}`, // Gunakan path dari database
                  title: category.category,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
