import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const Carts = () => {
    const brands = useLoaderData();
    return (
        <div className="bg-[#dbeff5]">
            <div className="container mx-auto py-20">
                <h1 className="text-5xl font-semibold text-center pb-16 ">Our Brands</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {
                        brands.map((brand, idx) => <Cart key={idx} brand={brand}></Cart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Carts;