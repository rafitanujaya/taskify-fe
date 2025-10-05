import { Eye, EyeOff } from "lucide-react"
import { FcGoogle } from "react-icons/fc";
import { useState } from "react"
import { Link, NavLink } from "react-router";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Sign Up</h1>
            <p className="text-gray-500 text-center mb-8">Start managing your tasks smarter today</p>

            <form action="">
                <div className="mb-2.5">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" placeholder="your@example.com" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"/>
                </div>

                <div className="mb-2.5">
                    <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                    <input type="text" placeholder="username" id="username" name="username" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"/>
                </div>

                <div className="relative mb-5">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <input type={showPassword ? 'text' : 'password'} placeholder="******" id="password" name="password" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"/>
                    <button type="button" className="absolute right-4 top-12 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        { showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                    </button>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-lg transition">
                    Register
                </button>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Already have an account?{' '}
                    <NavLink to={"/login"} className="text-blue-600 hover:underline font-medium">Sign In here</NavLink>
                </p>
            
            </form>
        </div>
    </div>
  )
}

export default RegisterPage
