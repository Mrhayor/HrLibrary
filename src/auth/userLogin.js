import {projectAuth} from "../firebase/config";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

let error = null;

const login = async (email, password) => {
    error = null;
    try{
        const res = await projectAuth.signInWithEmailAndPassword(email, password);
        const jj = res.user;
        error = null;
        return {res, jj};
    } catch(err){
        error = err.message;
        console.log(error);
    }
};


const userLogin = () =>{
    return {error, login}
}

export default userLogin;