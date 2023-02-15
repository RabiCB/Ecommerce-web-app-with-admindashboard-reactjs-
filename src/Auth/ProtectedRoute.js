import { UserAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes=({children})=>{
    const navigate=useNavigate()
    const {currentUser}=UserAuth()
    if(!currentUser){
    navigate("/login");
    alert("login please")
        
    }
    return children
}

export default ProtectedRoutes