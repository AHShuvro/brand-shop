import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>

            <div className=" p-2 lg:h-[70vh] flex justify-center items-center">
                <div className="w-full max-w-2xl mx-auto mt-10">
                    <form className="bg-[#242424] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-4xl text-white font-bold text-center pb-4">Login</h1>
                        <div className="mb-4">
                            <label className="block text-white text-xl font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white text-xl font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="btn text-xl btn-primary">Login</button>

                        </div>
                        <p className="text-red-500 text-xl font-bold mt-1"></p>
                        <p className="pt-6 text-white text-2xl font-medium">{`You don't have an account?`} <span className="text-blue-700 font-bold"><Link to="/reg">registar</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;