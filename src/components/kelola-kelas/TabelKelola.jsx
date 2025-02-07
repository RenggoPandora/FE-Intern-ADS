import { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';

export default function TabelKelola() {
  const [classData, setClassData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/class");
      if (response.data && response.data.datas) {
        setClassData(response.data.datas);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus kelas ini?")) {
      try {
        await axios.delete(`http://localhost:3000/api/class/${id}`);
        alert("Data berhasil dihapus!");
        setClassData(prevData => prevData.filter(item => item.id !== id));
      } catch (error) {
        console.error("Gagal menghapus data:", error);
        alert("Terjadi kesalahan saat menghapus data.");
      }
    }
  };

  const handleEdit = (item) => {
      setSelectedClass(item);
      setShowForm(true);
  };


  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedClass(null);
    fetchData();
  };

  return (
    <div className='ml-[69px] mr-[87px]'>
      <div className='flex justify-between items-center px-8 py-4 bg-white text-black'>
        <h2 className='text-2xl font-bold'>Kelola Kelas</h2>
        <div className='flex gap-2'>
          <button
            onClick={() => setShowForm(true)}
            className='px-4 py-2 bg-[#6148FF] text-white rounded-full hover:opacity-80 flex items-center gap-4 font-bold w-[150px] justify-left'>
            <img src="/tambah.svg" alt="Tambah" />
            Tambah
          </button>
          <button className='px-4 py-2 bg-white border border-[#6148FF] text-[#6148FF] rounded-full hover:opacity-80 flex items-center gap-2 font-bold'>
            <img src='/filter.svg' alt='Filter' />
            Filter
          </button>
          <button className='px-4 py-2 bg-white text-[#6148FF] rounded-full hover:opacity-80'>
            <img src='/search2.svg' alt='Search' />
          </button>
        </div>
      </div>

      <div className='px-8 py-4 bg-white'>
        <table className='w-full'>
          <thead className='bg-[#EBF3FC] text-black'>
            <tr className="h-10">
              <th className='px-4 py-2'>Kode Kelas</th>
              <th className='px-4 py-2'>Kategori</th>
              <th className='px-4 py-2'>Nama Kelas</th>
              <th className='px-4 py-2'>Tipe Kelas</th>
              <th className='px-4 py-2'>Level</th>
              <th className='px-4 py-2'>Harga Kelas</th>
              <th className='px-4 py-2'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {classData.map((item) => (
              <tr key={item.id} className='h-10 text-center hover:bg-gray-100 text-gray-600'>
                <td className='px-4 py-4'>{item.code}</td>
                <td className='px-4 py-4'>{item.category}</td>
                <td className='px-4 py-4 font-semibold'>{item.name}</td>
                <td className={`px-4 py-4 font-semibold ${item.type === 'GRATIS' ? 'text-green-400' : 'text-purple-800'}`}>
                  {item.type}
                </td>
                <td className='px-4 py-4 font-bold'>{item.level}</td>
                <td className='px-4 py-4 font-bold'>{item.price}</td>
                <td className='px-4 py-4'>
                  <div className='flex gap-4 w-full justify-center'>
                    <button onClick={() => handleEdit(item)} className='bg-[#6148FF] text-white rounded-[20px] w-[50px] font-semibold'>Ubah</button>
                    <button onClick={() => handleDelete(item.id)} className='bg-[#FF0000] text-white rounded-[20px] w-[50px] font-semibold'>Hapus</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && <Form onClose={handleCloseForm} data={selectedClass} />}
    </div>
  );
}
