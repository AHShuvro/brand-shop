import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const StoreDemos = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000, 
        });
    }, []);

    return (
        <div className="bg-[#d9e2ea]">
            <div className="container mx-auto pt-16">
                <h1 className="text-5xl font-semibold text-center pb-16 ">Elegant and impressive
                    unique store</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6 pb-28">
                    <div className="card max-w-96 glass " data-aos="fade-up">
                        <figure ><img className="h-[16rem]" src="https://i.ibb.co/zRHh9Dm/anh-nhat-Pd-ALQmf-Eqv-E-unsplash.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="card-title">Samsung</h2>
                                    <p>Experience the latest in Samsung technology, from smartphones to home appliances, designed to simplify your life and elevate your everyday.</p>
                                </div>
                                <p className="text-red-500 text-center text-xs">20 Feb</p>
                            </div>
                        </div>
                    </div>
                    <div className="card max-w-96 glass " data-aos="fade-down">
                        <figure ><img className="h-[16rem]" src="https://i.ibb.co/WBRrdt9/alex-ghizila-v-Uj-Jztd-X4-H0-unsplash.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="card-title">Lenevo</h2>
                                    <p>Lenovo offers a range of cutting-edge laptops, PCs, and accessories. Unleash your productivity and creativity with Lenovo,s tech solutions.</p>
                                </div>
                                <p className="text-red-500 text-center text-xs">20 Feb</p>
                            </div>
                        </div>
                    </div>
                    <div className="card max-w-96 glass " data-aos="fade-up">
                        <figure ><img className="h-[16rem]" src="https://i.ibb.co/wh7VmYF/brent-ninaber-6qesn-UQce-JA-unsplash.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="card-title">Sony</h2>
                                    <p>Sony brings innovation to entertainment and electronics. Dive into a world of superior audio, stunning visuals, and gaming excellence.</p>
                                </div>
                                <p className="text-red-500 text-center text-xs">20 Feb</p>
                            </div>
                        </div>
                    </div>
                    <div className="card max-w-96 glass " data-aos="fade-down">
                        <figure ><img className="h-[16rem]" src="https://i.ibb.co/rkLn5h4/salman-majeed-q-OCir-B965dk-unsplash.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <h2 className="card-title">Apple</h2>
                                    <p>Apple products are the epitome of elegance and performance. Discover the seamless blend of design and technology that empowers creativity and connectivity.</p>
                                </div>
                                <p className="text-red-500 text-center text-xs">20 Feb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreDemos;