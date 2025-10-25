import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const TextBox = ({ type, placeholder, value, onChange, label }) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
        <div className="flex flex-col relative">
            <label className="font-Poppins text-gray-200">{label}</label>
            <input
                className="mt-2 px-2 h-12 rounded-lg border border-gray-600 bg-transparent text-white placeholder-gray-400 hover:border-yellow-300 outline-none focus:ring focus:ring-yellow-400 pr-10"
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {isPassword && (
                <div
                    className="absolute right-3 top-11 cursor-pointer text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
            )}
        </div>
    );
};
