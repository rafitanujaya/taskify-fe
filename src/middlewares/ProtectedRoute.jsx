import { useEffect, useState} from "react";
import { useNavigate } from "react-router"
import authApi from "../lib/api/authApi";

const ProtectedRoute = ({children}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        const verifyToken = async () => {
            if(!token) {
                navigate('/login', { replace: true })
            }
        
            try {
    
                const response = await authApi.verify(token);

                if(response.ok) {
                    setIsValid(true)
        
                } else {
                    localStorage.removeItem("token");
                    navigate('/login', { replace: true })
                }
                //? Ini jika cek by expirednya
                // const payload = JSON.parse(atob(token.split('.')[1]));
                // const expired = payload.exp * 1000 < Date.now();
                // if(expired) {
                //     navigate('/login', { replace: true })
                // }
            } catch {
                localStorage.removeItem("token");
                navigate('/login', { replace: true })
            }

        }

        verifyToken()
    }, [navigate])


    if(!isValid){
        return null
    } else {
        return children
    }

}

export default ProtectedRoute
