import {projectAuth} from "../firebase/config"

let error = null;

const signUp = async (email, password) => {
    error = null;
    try{
        const res = await projectAuth.createUserWithEmailAndPassword(email, password);
        if(!res){
            throw new Error("")
        }
        // const jj = res.user;
        error = null;
        console.log(res.user);
        // console.log(jj.email);
        return res;
    } catch(err){
        error = err.message;
    }
}

const userSignUp = () =>{
    return {error, signUp}

}

export default userSignUp;

