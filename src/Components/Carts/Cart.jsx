import { Link } from "react-router-dom";


const Cart = (brand) => {

    const { brand_name, brand_image, brand_description } = brand.brand || {}


    return (
        <div>
            <div className="card bg-base-50 shadow-xl image-full h-[23rem]">
                <figure><img src={brand_image} alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-center items-center space-y-3">
                    <h2 className="text-3xl font-semibold">{brand_name}</h2>
                    <h4 className="text-xl">{brand_description}</h4>

                    <Link to={`/seeproducts/${brand_name}`}><button className="btn btn-primary">See Our Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;