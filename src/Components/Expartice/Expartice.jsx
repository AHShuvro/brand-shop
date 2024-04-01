import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdHappy } from 'react-icons/io';
import { MdSpeed } from 'react-icons/md';
import { TbArrowBounce } from 'react-icons/tb';

const Expartice = () => {
    return (
        <div className='bg-[#1e2135]'>
            <h1 className='text-white text-4xl font-medium text-center py-12'>Your Event, <span className='font-bold'>Our Expertise</span></h1>
            <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 pt-12 pb-24'>
                <div className='flex space-x-4 items-center'>
                    <AiOutlineShoppingCart className='text-7xl bg-white p-3 rounded-lg'></AiOutlineShoppingCart>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl text-red-500'>300</h1>
                        <p className='text-xl text-red-500'>Orders</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <IoMdHappy className='text-7xl bg-white p-3 rounded-lg'></IoMdHappy>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl text-red-500'>2000+</h1>
                        <p className='text-xl text-red-500'>New Customers</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <MdSpeed className='text-7xl bg-white p-3 rounded-lg'></MdSpeed>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl text-red-500'>150%</h1>
                        <p className='text-xl text-red-500'>Growth</p>
                    </div>
                </div>
                <div className='flex space-x-4 items-center'>
                    <TbArrowBounce className='text-7xl bg-white p-3 rounded-lg'></TbArrowBounce>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl text-red-500'>23%</h1>
                        <p className='text-xl text-red-500'>Bounce Rate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expartice;