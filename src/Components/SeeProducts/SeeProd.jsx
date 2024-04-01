

const SeeProd = (product) => {

    const prod = product.product;

    const { id, image, name, brandName, shortDescription, price, type } = prod || {}
    console.log(product);

    const handleAddToCart = () => {

        const addedMyCart = [];
        const myCart = JSON.parse(localStorage.getItem('myProduct'))

        if (!myCart) {
            addedMyCart.push(prod)
            localStorage.setItem('myProduct', JSON.stringify(addedMyCart))
        }
        else {

            const isExist = myCart.find(prod => prod.id === id)
            if (!isExist) {
                addedMyCart.push(...myCart, prod)
                localStorage.setItem('myProduct', JSON.stringify(addedMyCart))
                
                alert("amar sunar bangla")
            }
            else{
                alert("ami tumay valobasi")
            }



        }


    }

    return (
        <div>

            <div>
                <div className=" bg-base-200">
                    <div className="hero-content flex flex-col">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="flex flex-col justify-start items-start">
                            <div className="flex space-x-4 items-end">
                                <h1 className="text-4xl text-amber-500">{name}</h1>
                                <p className="text-lg text-blue-500">{brandName}</p>
                            </div>
                            <h1 className="text-xl font-medium">{type}</h1>
                            <p className=" text-xl pb-6 pt-2">{shortDescription}</p>
                            <p className="text-orange-600 text-3xl font-bold pb-4">${price}</p>
                            <div>
                                <div className="rating pb-6">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <button onClick={handleAddToCart} className="btn btn-primary ">Add  Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeeProd;