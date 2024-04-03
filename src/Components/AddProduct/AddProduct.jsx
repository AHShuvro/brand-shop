
const AddProduct = () => {
    const handleAddProduct = () =>{
        
    }
    return (
        <div className="bg-[#e8edfe]">
            
            <div className="container mx-auto flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center font-semibold pt-12 pb-12">Add your product informations!</h1>
            
                <form onSubmit={handleAddProduct} className="flex flex-col w-full px-12 sm:px-0 sm:w-1/2 space-y-2 pb-24" action="">
                    <label className="block   text-xl font-bold mb-2" htmlFor="productImage">Enter product image:</label>
                    <input className="  h-10 rounded pl-4" type="text" name="productImage" id="" placeholder="image url!" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="productName">Enter product name:</label>
                    <input className="  h-10 rounded pl-4" type="text" name="productName" id="" placeholder="Product name!" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="brandName">Enter brand name!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="brandName" id="" placeholder="brand name!" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="productType">Enter product type!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="productType" id="" placeholder="product type!" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="productPrice">Enter product price!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="productPrice" id="" placeholder="product price!" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="description">Enter product short description!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="description" id="" placeholder="short description!" />
                    <label className="block   text-xl font-bold mb-2" htmlFor="rating">Enter product rating!</label>
                    <input className="  h-10 rounded pl-4" type="text" name="rating" id="" placeholder="rating!" />
                    <input className="btn btn-primary " type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;