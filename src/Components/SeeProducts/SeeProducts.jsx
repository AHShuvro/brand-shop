import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SeeProd from "./SeeProd";
import { products } from "../../Data/ProductData";




const SeeProducts = () => {

    const { brand_name } = useParams();


    const [findProducts, setFindProducts] = useState([])

    useEffect(() => {
        const findProduct = products?.filter(product => product.brandName === brand_name);

        setFindProducts(findProduct)

    }, [brand_name]);





    return (
        <div>
            <div className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
                {
                    findProducts?.map((product, idx) => <SeeProd key={idx} product={product}></SeeProd>)
                }
            </div>
        </div>
    );
};

export default SeeProducts;