import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="h-20 md:h-32 flex items-center justify-center bg-[#bbc8f1]">

            <div className="container mx-auto ">
                <div className="navbar bg-[#bbc8f1]">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link>Home</Link></li>
                                <li><Link>Add Porducts</Link></li>
                                <li><Link>My products</Link></li>
                                <li><Link> Registration</Link></li>
                            </ul>
                        </div>
                        <img className="btn btn-ghost normal-case text-xl" src="https://i.ibb.co/PYkBvzd/logo-1.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-8">
                            <li className="text-lg font-semibold text-black focus:bg-slate-50"><Link to="/">Home</Link></li>

                            <li className="text-lg font-semibold text-black focus:bg-slate-50"><Link to="/addPro">Add Porducts</Link></li>

                            <li className="text-lg font-semibold text-black focus:bg-slate-50"><Link to="/mycart">My Cart</Link></li>

                            <li className="text-lg font-semibold text-black focus:bg-slate-50"><Link to="/reg"> Registration</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                    
                    <Link to="/login"><button className="btn btn-primary">Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;