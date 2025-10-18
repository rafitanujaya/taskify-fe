import { Eye, EyeOff, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import authApi from "../lib/api/authApi";
import { toast, Toaster } from "sonner";
import { sleep } from "../utils/sleep";
import { decodeJWT } from "../utils/jwt";
import { useUser } from "../hooks/useUser";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const focusRef = useRef(null);
    const navigate = useNavigate();
    const {saveUser} = useUser()
    

  useEffect(() => {
    focusRef.current?.focus();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Username Wajib Diisi";
    } else if (username.length < 4) {
      newErrors.username = "Minimal 4 Karakter";
    } else if (username.length > 16) {
      newErrors.username = "Maksimal 16 Karakter";
    }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await sleep(2000)
      const response = await authApi.register({ email, password, username });
      const body = await response.json();
      console.log(body);

      if (response.status === 201) {
        localStorage.setItem("token", body.data.token);
        toast.success("Register Berhasil");
        await sleep(1000)
        const payload = decodeJWT(body.data.token);
        saveUser(payload)
        navigate('/app')
      } else {
        if(response.status === 409 && body.errors.includes('Username')) {
            setErrors({
                username : body.errors
            })
        }
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Sign Up
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Start managing your tasks smarter today
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
              placeholder="your@example.com"
              id="email"
              name="email"
              value={email}
              ref={focusRef}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && (<p className="text-red-500 text-xs mt-1">{errors.email}</p>)}
          </div>

          <div className="mb-2.5">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="username"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.username ? "border-red-500" : ""}`}
            />
            {errors.username && (<p  className="text-red-500 text-xs mt-1">{errors.username}</p>)}
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
              placeholder="******"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.password ? "border-red-500" : ""}`}
            />
            <button
              type="button"
              className="absolute right-4 top-12 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (<p  className="text-red-500 text-xs mt-1">{errors.password}</p>)}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`flex justify-center items-center cursor-pointer w-full text-white font-semibold py-2 rounded-lg text-lg transition ${loading ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {loading ? (
                <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4"/> Register...
                </>
            ):(
                <>
                    Register
                </>
            )}
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            Already have an account?{" "}
            <NavLink
              to={"/login"}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign In here
            </NavLink>
          </p>
        </form>
      </div>
      <Toaster richColors position="top-center" /> 
    </div>
  );
};

export default RegisterPage;
