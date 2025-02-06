import  { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';


function HeaderTable({ onTambahClick }) {
    return (
        <div className='flex justify-between items-center px-8 py-4 bg-white text-black'>
            <h2 className='text-2xl font-bold'>Kelola Kelas</h2>
            <div className='flex gap-2'>
                <button onClick={onTambahClick} className='px-4 py-2 bg-[#6148FF] border border-[#6148FF] text-white rounded-full hover:opacity-80 flex items-center gap-4 font-bold w-[150px] justify-left'>
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
    );
}

function TabelKelolaKelas() {
    const [classData, setClassData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/class')
      .then(response => {
        setClassData(response.data.datas); // Ambil data dari response backend
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus kelas ini?")) {
        axios.delete(`http://localhost:3000/api/class/${id}`)
            .then(() => {
                alert("Data berhasil dihapus!");
                // Perbarui state untuk menghapus item dari tabel
                setClassData(prevData => prevData.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error("Gagal menghapus data:", error);
                alert("Terjadi kesalahan saat menghapus data.");
            });
    }
};

    return (
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
                    {classData.map((item, index) => (
                        <tr key={index} className='h-10 text-center hover:bg-gray-100 text-gray-600'>
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
                                    <button className='bg-[#6148FF] text-white rounded-[20px] w-[50px] font-semibold'>Ubah</button>
                                    <button onClick={() => handleDelete(item.id)} className='bg-[#FF0000] text-white rounded-[20px] w-[50px] font-semibold'>Hapus</button>
                                 </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function TabelKelola() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className='ml-[69px] mr-[87px]'>
            <HeaderTable onTambahClick={() => setShowForm(true)} />
            <div className='justify-center'>
            <TabelKelolaKelas />
            {showForm && <Form onClose={() => setShowForm(false)} />}
            </div>
        </div>
    );
}
