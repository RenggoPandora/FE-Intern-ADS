import { useState, useEffect } from 'react';
import Form from '../kelola-kelas/Form';
import axios from 'axios';

export default function CategoriesTable() {
    const [categories, setCategories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/category');
            if (response.data && response.data.data) {
                setCategories(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const HandleDelete = async (id) => {
        if (window.confirm('Apakah Anda yakin ingin menghapus kategori ini?')) {
            try {
                await axios.delete(`http://localhost:3000/api/category/${id}`);
                alert('Data berhasil dihapus!');
                setCategories(prevData => prevData.filter(item => item.id !== id));
            } catch (error) {
                console.error('Gagal menghapus data:', error);
                alert('Terjadi kesalahan saat menghapus data.');
            }
        }
    };

    const handleEdit = (item) => {
        setSelectedCategory(item);
        setShowForm(true);
    };

    const HandleCloseForm = () => {
        setShowForm(false);
        setSelectedCategory(null);
        fetchData();
    };

    return (
        <div className='ml-[69px] mr-[87px]'>
            <div className='flex justify-between items-center px-8 py-4 bg-white text-black'>
                <h2 className='text-2xl font-bold'>Kelola Kategori</h2>
                <div className='flex gap-2'>
                    <button
                        onClick={() => setShowForm(true)}
                        className='px-4 py-2 bg-[#6148FF] text-white rounded-full hover:opacity-80 flex items-center gap-4 font-bold w-[150px] justify-left'>
                        <img src='/tambah.svg' alt='Tambah' />
                        Tambah
                    </button>
                    <button className='px-4 py-2 bg-white border border-[#6148FF] text-[#6148FF] rounded-full hover:opacity-80 flex items-center'>
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
                            <th className='px-4 py-2'>Nama Kategori</th>
                            <th className='px-4 py-2'>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((item) => (
                            <tr key={item.id} className='h-10 text-center hover:bg-gray-100 text-gray-600'>
                                <td className='px-4 py-4'>{item.category}</td>
                                <td className='px-4 py-4'>
                                    <div className='flex gap-2 w-full justify-center'>
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className='bg-[#6148FF] text-white rounded-[20px] w-[50px] font-semibold cursor-pointer'>
                                            Ubah
                                        </button>
                                        <button
                                            onClick={() => HandleDelete(item.id)}
                                            className='bg-red-500 text-white rounded-[20px] w-[50px] font-semibold cursor-pointer'>
                                            Hapus
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {showForm && <Form onClose={HandleCloseForm} data={selectedCategory} />}
        </div>
    );
}
