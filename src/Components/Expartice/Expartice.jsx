import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdHappy } from 'react-icons/io';
import { MdSpeed } from 'react-icons/md';
import { TbArrowBounce } from 'react-icons/tb';

const Expartice = () => {
    const allItem = [
        {
            icon: <AiOutlineShoppingCart className='text-7xl bg-white p-3 rounded-lg'></AiOutlineShoppingCart>,
            quantity: "300",
            name: "Orders",
        },
        {
            icon: <IoMdHappy className='text-7xl bg-white p-3 rounded-lg'></IoMdHappy>,
            quantity: "2000+",
            name: "New Customers",
        },
        {
            icon: <MdSpeed className='text-7xl bg-white p-3 rounded-lg'></MdSpeed>,
            quantity: "150%",
            name: "Growth",
        },
        {
            icon: <TbArrowBounce className='text-7xl bg-white p-3 rounded-lg'></TbArrowBounce>,
            quantity: "23%",
            name: "Bounce Rate",
        },
    ]
    return (
        <div className='bg-[#1e2135]'>
            <h1 className='text-white text-4xl font-medium text-center py-12'>Your Event, <span className='font-bold'>Our Expertise</span></h1>
            <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 pt-12 pb-24'>
                {
                    allItem.map((item, idx) => (
                        <div key={idx} className='flex space-x-4 items-center'>
                            {item.icon}
                            <div className='flex flex-col'>
                                <h1 className='text-3xl text-red-500'>{item.quantity}</h1>
                                <p className='text-xl text-red-500'>{item.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Expartice;