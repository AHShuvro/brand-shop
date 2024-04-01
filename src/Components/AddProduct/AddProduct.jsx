
const AddProduct = () => {
    const handleAddProduct = (e) =>{
        e.preventDefault();
        const form = e.target;
        const image = form.productImage.value;
        const name = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.productType.value;
        const price = form.productPrice.value;
        const shortDescription = form.description.value;
        const rating = form.rating.value;

        const product = {image, name, brandName, type, price, shortDescription, rating};
        console.log(product);
        fetch('http://localhost:50/products',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Inside post response:', data)
            form.reset();
        })
        
    }
    return (
        <div className="bg-[#e8edfe]">
            
            <div className="container mx-auto flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center font-semibold pt-12 pb-12">Add your product informations!</h1>
            
                <form onSubmit={handleAddProduct} className="flex flex-col w-1/2 space-y-2 pb-24" action="">
                    <label className="block   text-xl font-bold mb-2" htmlFor="productImage">Enter product image:</label>
                    <input className="  h-10 rounded pl-4" type="text" name="productImage" id="" placeholder="Image url!" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="productName">Enter product name:</label>
                    <input className="  h-10 rounded pl-4" type="text" name="productName" id="" placeholder="Enter Product name!" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="brandName">Enter brand name!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="brandName" id="" placeholder="" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="productType">Enter product type!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="productType" id="" placeholder="" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="productPrice">Enter product price!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="productPrice" id="" placeholder="" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="description">Enter product short description!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="description" id="" placeholder="" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="rating">Enter product rating!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="rating" id="" placeholder="" />
                    <input className="btn btn-primary " type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;