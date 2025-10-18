import { Eye, EyeOff, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import authApi from "../lib/api/authApi";
import { sleep } from "../utils/sleep";
import { toast, Toaster } from "sonner";
import config from "../config";
import { useUser } from "../hooks/useUser";
import { decodeJWT } from "../utils/jwt";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const focusRef = useRef(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {saveUser} = useUser()
  

  const validateForm = () => {
    const newErrors = {};

    // simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email Wajib Diisi";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Format Email Tidak Valid";
    }

    if (!password) {
      newErrors.password = "Passowrd Wajib Diisi";
    } else if (password.length < 4) {
      newErrors.password = "Minimal 4 Karakter";
    } else if (password.length > 32) {
      newErrors.password = "Maksimal 32 Karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()) {
        return
    }
    setLoading(true)
    console.log('hallo');
    try {
        sleep(2000)
        const response = await authApi.login({email, password})
        const body = await response.json()
        console.log(body);

        if(response.status === 200) {
            localStorage.setItem('token', body.data.token)
            toast.success('Login Success')
            await sleep(1000)
            const payload = decodeJWT(body.data.token);
            saveUser(payload)
            navigate('/app')
        } else {
            toast.error(body.errors)
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false)
    }


  }

//   const handle

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Sign in
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Login to continue managing your task
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-2.5">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              ref={focusRef}
              value={email}
              placeholder="your@example.com"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            {errors.email && (<p className="text-red-500 text-xs mt-1">{errors.email}</p>)}
          </div>

          <div className="relative mb-5">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
              value={password}
              id="password"
              name="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <button
              type="button"
              className="absolute right-4 top-12 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (<p className="text-red-500 text-xs mt-1">{errors.password}</p>)}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`flex justify-center items-center cursor-pointer w-full text-white font-semibold py-2 rounded-lg text-lg transition ${loading ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? (
                <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4"/> Login...
                </>
            ):(
                <>
                    Login
                </>
            )}
          </button>

          <div className="flex justify-center gap-3 my-6 items-center">
            <div className="h-px w-full bg-gray-300" />
            <p className="text-gray-400 ">OR</p>
            <div className="h-px w-full bg-gray-300" />
          </div>
        </form>


          <button onClick={() => window.location.href = `${config.BASE_URL}/auth/google`} className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 font-semibold py-2 rounded-lg text-lg transition">
            <FcGoogle size={20} />
            <p className="">Login With Google</p>
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            Don't have an account?{" "}
            <NavLink
              to={"/register"}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign Up here
            </NavLink>
          </p>
      </div>
      <Toaster richColors position="top-center" /> 
    </div>
  );
};

export default LoginPage;
