const PaymentData = [
    {ID: 'johndoe123', kategori: 'UI/UX Design', Kelas: 'Belajar Web Designer dengan Figma', status: 'BELUM BAYAR', metode: 'Credit Card', tanggal: "21 Sep, 2023 at 2:00 A.M"},
    {ID: 'supermanxx', kategori: 'UI/UX Design', Kelas: 'Belajar Web Designer dengan Figma', status: 'SUDAH BAYAR', metode: '-', tanggal: "21 Sep, 2023 at 2:00 A.M"},
    {ID: 'ironman99', kategori: 'UI/UX Design', Kelas: 'Belajar Web Designer dengan Figma', status: 'BELUM BAYAR', metode: 'Credit Card', tanggal: "21 Sep, 2023 at 2:00 A.M"},
];

function HeaderTable() {
    return (
        <div className='flex justify-between items-center px-8 py-4 bg-white text-black'>
            <h2 className='text-2xl font-bold'>Status Pembayaran</h2>
            <div className='flex gap-2'>
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

function ClassTable() {
    return (
        <div className='px-8 py-4 bg-white'>
            <table className='w-full'>
                <thead className='bg-[#EBF3FC] text-black'>
                    <tr className="h-10">
                        <th className='px-4 py-2'>ID</th>
                        <th className='px-4 py-2'>Kategori</th>
                        <th className='px-4 py-2'>Kelas Premium</th>
                        <th className='px-4 py-2'>Status</th>
                        <th className='px-4 py-2'>Metode Pembayaran</th>
                        <th className='px-4 py-2'>Tenggat Pembayaran</th>
                    </tr>
                </thead>
                <tbody>
                    {PaymentData.map((item, index) => (
                        <tr key={index} className='h-10 text-center hover:bg-gray-100 text-gray-600'>
                            <td className='px-4 py-4'>{item.ID}</td>
                            <td className='px-4 py-4'>{item.kategori}</td>
                            <td className='px-4 py-4 font-bold'>{item.Kelas}</td>
                            <td className={`px-4 py-4 font-bold ${item.status === 'BELUM BAYAR' ? 'text-red-500' : 'text-green-500'}`}>
                                {item.status}
                            </td>
                            <td className='px-4 py-4 font-bold'>{item.metode}</td>
                            <td className='px-4 py-4'>{item.tanggal}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function PaymentTable() {
    return (
        <div className='ml-[69px] mr-[87px]'>
            <HeaderTable />
            <ClassTable />
        </div>
    );
}
