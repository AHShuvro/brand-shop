import { useEffect, useState } from "react";

const MyCart = () => {
    const [noDataFound, setNoDataFound] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const myCart = JSON.parse(localStorage.getItem('myProduct'));
        if (myCart) {
            setProduct(myCart)
        }
        else {
            setNoDataFound("NO DATA FOUND!")
        }

    }, [])
    console.log(product);
    return (
        <div className="">
            <div className="container mx-auto">
                {
                    noDataFound ? <p className="text-center text-6xl text-red-500 font-semibold h-[60vh] pt-52">{noDataFound}</p>
                        : <div className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
                            {
                                product?.map((item, idx) => (
                                    <div key={idx}>
                                        <div className=" bg-base-200">
                                            <div className="hero-content flex flex-col">
                                                <img src={item.image} className="max-w-sm rounded-lg shadow-2xl" />
                                                <div className="flex flex-col justify-start items-start">
                                                    <div className="flex space-x-4 items-end">
                                                        <h1 className="text-4xl text-amber-500">{item.name}</h1>
                                                        <p className="text-lg text-blue-500">{item.brandName}</p>
                                                    </div>
                                                    <h1 className="text-xl font-medium">{item.type}</h1>
                                                    <p className=" text-xl pb-6 pt-2">{item.shortDescription}</p>
                                                    <p className="text-orange-600 text-3xl font-bold pb-4">${item.price}</p>
                                                    <div>
                                                        <div className="rating pb-6">
                                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default MyCart;