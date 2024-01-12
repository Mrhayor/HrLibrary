import {Outlet, useLocation, Navigate} from "react-router-dom";
import {projectAuth} from "../firebase/config";

const PrivateRoutes = () =>{
    const location = useLocation();
    return projectAuth.currentUser ? (
    <Outlet/>
    )  : (
    <Navigate to="/Login" state={{from:location}} replace />) 
}


export default PrivateRoutes;