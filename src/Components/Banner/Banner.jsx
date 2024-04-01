
const Banner = () => {
    return (
        <div >

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TvsfRZC/y2020-03-11-03-generated.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Electronic Elegance: Discover Cutting-Edge Technology and Gadgets for Your Lifestyle!</h1>
                        <p className="mb-5">Welcome to ElectroHub, Your Gateway to the World of Electronics. Explore our vast selection of cutting-edge tech, gadgets, and innovations, designed to enhance your digital lifestyle and inspire your imagination. Discover the future of electronics with us!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;