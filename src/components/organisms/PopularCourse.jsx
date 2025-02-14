import { useState, useEffect } from 'react';
import axios from 'axios';
import CardClass from '../molecules/CardClass';

export default function PopularCourse() {
  const [classes, setClasses] = useState([]);  // Inisialisasi dengan array kosong
  const [categories, setCategories] = useState([]);  // Menyimpan data kategori
  const [selectedCategory, setSelectedCategory] = useState("All");  // Menyimpan kategori yang dipilih
  const [loading, setLoading] = useState(true);  // Menandakan apakah data sedang dimuat
  const [error, setError] = useState(null);  // Menangani error yang mungkin terjadi

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);  // Set loading true saat memulai fetch
        const classResponse = await axios.get('https://be-intern-ads.vercel.app/api/class');  // Sesuaikan dengan endpoint yang benar
        const categoryResponse = await axios.get('https://be-intern-ads.vercel.app/api/category');  // Endpoint kategori

        if (classResponse.data && categoryResponse.data) {
          setClasses(classResponse.data.datas);  // Menyimpan data kelas
          setCategories(categoryResponse.data.data);  // Menyimpan data kategori
        } else {
          throw new Error('Data kelas atau kategori tidak ditemukan.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Terjadi kesalahan saat memuat data.');
      } finally {
        setLoading(false);  // Set loading false setelah selesai fetch
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;  // Menampilkan pesan loading jika data sedang dimuat
  }

  if (error) {
    return <p>{error}</p>;  // Menampilkan error jika ada masalah dalam memuat data
  }

  return (
    <div className="popular-courses px-[240px] mt-[10px] mb-[4px]">
      <h2 className="text-xl font-bold">Kursus Populer</h2>

      {/* Filter Kategori */}
<div className="flex flex-row gap-[12px] font-bold text-center">
  <button 
    className={`px-[21px] py-[5px] cursor-pointer rounded-[15px] ${selectedCategory === "All" ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF] text-black"} hover:bg-[#6148FF] hover:text-white`} 
    onClick={() => setSelectedCategory("All")}
  >
    Semua Kategori
  </button>
  {categories.map((category) => (
    <button 
      key={category.id} 
      className={`px-[21px] py-[5px] cursor-pointer rounded-[15px] ${selectedCategory === category.id ? "bg-[#6148FF] text-white" : "bg-[#E8F1FF] text-black"} hover:bg-[#6148FF] hover:text-white`} 
      onClick={() => setSelectedCategory(category.id)}
    >
      {category.category}
    </button>
  ))}
</div>

      {/* List Kursus */}
<div className="flex flex-row w-full my-[2px] overflow-x-scroll">
  <div className="flex justify-center gap-[10px] py-[16px]">
    {classes
      .filter(classItem => selectedCategory === "All" || classItem.categoryId === selectedCategory)
      .map((classItem) => (
        <CardClass
          key={classItem.id}
          title={classItem.name}
          instructor="John Doe"
          category={classItem.category?.category || "Unknown"}  // Mengambil kategori dari relasi category
          rating={4.7}  
          level={classItem.level}
          modules={10}  
          duration={120}  
          price={classItem.price}
          image={`/media/category/${classItem.category?.imagePath || 'default-category.svg'}`}  // Ganti dengan gambar kategori yang sesuai
        />
      ))}
  </div>
</div>

    </div>
  );
}
