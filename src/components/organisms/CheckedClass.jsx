import { useState, useEffect } from 'react';
import axios from 'axios';
import CardClass from '../molecules/CardClass';

export default function CheckedClass() {
  const [classes, setClasses] = useState([]);  // Menyimpan data kelas
  const [selectedType, setSelectedType] = useState("All");  // Menyimpan kelas yang dipilih (GRATIS atau PREMIUM)
  const [loading, setLoading] = useState(true);  // Menandakan apakah data sedang dimuat
  const [error, setError] = useState(null);  // Menangani error yang mungkin terjadi

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoading(true);  // Set loading true saat memulai fetch
        const response = await axios.get('http://localhost:3000/api/class');  // Sesuaikan dengan endpoint yang benar
        setClasses(response.data.datas);  // Menyimpan data kelas yang diterima
      } catch (error) {
        setError('Terjadi kesalahan saat memuat data kelas.');
        console.error(error);
      } finally {
        setLoading(false);  // Set loading false setelah selesai fetch
      }
    };

    fetchClasses();
  }, []);

  // Menyaring kelas berdasarkan jenis yang dipilih (GRATIS atau PREMIUM)
  const filteredClasses = classes.filter(classItem => selectedType === "All" || classItem.type === selectedType);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="checked-classes">

      {/* Filter Kategori */}
      <div className="w-full flex gap-6">
        <button
        className={`border-white rounded-[15px] items-center justify-center w-32 h-10 text-center transition-colors duration-200 cursor-pointer ${selectedType === "All" ? "bg-[#6148FF] text-white" : " bg-white hover:bg-[#6148FF] hover:text-white text-black"}`}
        onClick={() => setSelectedType("All")}
        >
        <button className="items-center w-9/10 h-9/10 cursor-pointer">Semua Kelas</button>
        </button>

        <button
        className={`border-white rounded-[15px] items-center justify-center w-72 h-10 text-center transition-colors duration-200 cursor-pointer ${selectedType === "PREMIUM" ? "bg-[#6148FF] text-white" : "bg-white hover:bg-[#6148FF] hover:text-white text-black"}`}
        onClick={() => setSelectedType("PREMIUM")}
        >
        <button className="items-center w-9/10 h-9/10 cursor-pointer">Kelas Premium</button>
        </button>

        <button
        className={`border-white rounded-[15px] items-center justify-center w-56 h-10 text-center transition-colors duration-200 cursor-pointer ${selectedType === "GRATIS" ? "bg-[#6148FF] text-white" : "bg-white hover:bg-[#6148FF] hover:text-white text-black"}`}
        onClick={() => setSelectedType("GRATIS")}
        >
        <button className="items-center w-9/10 h-9/10 cursor-pointer">Kelas Gratis</button>
        </button>
      </div>

      {/* List Kelas */}
      <div className="grid grid-cols-2 gap-[20px] mt-[20px]">
        {filteredClasses.map((classItem) => (
          <CardClass
            key={classItem.id}
            title={classItem.name}
            instructor="John Doe"
            category={classItem.category?.category || "Unknown"}
            level={classItem.level}
            price={classItem.price}
            type={classItem.type}
            image={`/media/category/${classItem.category?.imagePath || 'default-category.svg'}`}
          />
        ))}
      </div>
    </div>
  );
}
