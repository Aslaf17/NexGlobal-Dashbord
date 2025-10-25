import logo from "../../assets/images/logo.webp"
import { TextBox } from "./Textbox";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);
    const USERNAME = "ASLAF123";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setError(""); 
        if (!username || !password) {
            setError("Username and password are required");
            return;
        }

        setLoading(true); 

        setTimeout(() => {
            if (username === "Aslaf" && password === "123456") {
                localStorage.setItem("token", USERNAME);
                setIsAuthenticated(true);
                navigate("/");
            } else {
                setError("Invalid username or password");
            }
            setLoading(false); 
        }, 1200); 
    };

    return (
        <div className="bg-black min-h-screen">
            <div className="lg:grid grid-cols-12 max-w-7xl mx-auto">
                {/* Left side image */}
                <div className="hidden lg:flex lg:col-span-6 justify-center items-center min-h-screen ">
                    <img className="w-80" src={logo} alt="Login Background" />
                </div>

                {/* Right side form */}
                <div className="w-full lg:mt-0 lg:col-span-6 px-4 md:px-40 lg:px-28 lg:pt-28">
                    <div className="font-Poppins pt-6">
                        <p className="font-semibold text-2xl text-gray-200">Welcome</p>
                    </div>

                    <div className="mt-8 flex flex-col gap-6">
                        <div>
                            <TextBox
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                label="Username"
                                placeholder="Enter Username"
                            />
                            {error && (
                                <p className="text-red-500 text-sm mt-2 font-Poppins">{error}</p>
                            )}
                        </div>
                        
                        <div>
                            <TextBox
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Password"
                                placeholder="Enter Password"
                            />
                            {error && (
                                <p className="text-red-500 text-sm mt-2 font-Poppins">{error}</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 flex justify-between">
                        <div className="flex gap-2">
                            <input type="checkbox" className="scale-150 accent-yellow-200" />
                            <label className="font-Poppins text-sm text-gray-300">
                                Remember this device
                            </label>
                        </div>
                        <p className="font-Poppins text-sm text-gray-300 cursor-pointer">
                            Forget Password?
                        </p>
                    </div>

                    <div className="mt-8">
                        <button
                            className={`bg-yellow-300 text-white text-lg font-bold w-full py-2 rounded-lg font-Poppins cursor-pointer ${
                                loading ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                            onClick={handleLogin}
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Sign in"}
                        </button>
                    </div>

                    <div className="mt-6 flex gap-2 font-Poppins">
                        <p className="text-sm text-gray-400">New here?</p>
                        <button className="text-yellow-300 cursor-pointer text-sm">
                            Create an account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
