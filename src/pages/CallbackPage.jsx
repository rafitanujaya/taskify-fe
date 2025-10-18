import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router"
import { decodeJWT } from "../utils/jwt";
import { useUser } from "../hooks/useUser";

const CallbackPage = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const {saveUser} = useUser()

    useEffect(() => {
        const token = params.get('token');
        if(token) {
            localStorage.setItem('token', token);
            const payload = decodeJWT(token);
            saveUser(payload)
            navigate("/app", { replace: true });
        } else {
            navigate("/login", { replace: true });
        }
    }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-600">Menyambungkan akun kamu...</p>
    </div>
  )
}

export default CallbackPage
