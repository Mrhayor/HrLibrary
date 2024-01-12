import {useState} from "react";
import userLogin from "../auth/userLogin";
import  {useNavigate, useLocation} from "react-router-dom";


const Login =  () =>{
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/Blog"
  const {error, login} = userLogin();

  const handleLogin = async (e) =>{
    e.preventDefault();
    await login (loginEmail, loginPassword);
    if(!error){
      navigate(from, {replace:true});
      setLoginEmail("");
      setLoginPassword(""); 
  
    
      return;
    }else{
      setErrorMessage(error)
    }
  }

  return (
 <>
        {/* {<Header /> } */}
        
        <div className="mains">
          <div className="loginImage"></div>
     
          <div className="formContainer">
              <div className="formix signup-form">
                <form onSubmit = {handleLogin}>
                  <div className='input-mail'>
                    <label htmlFor="gmail">Gmail</label>
                    <div className="input-Input-mail">
                       <input type="text" id="gmail" onChange={(e) =>setLoginEmail(e.target.value)} placeholder='gmail' />
                    </div>
                  </div>

                  <div className='input-passkey'>
                    <label htmlFor="password">Password</label>
                    <div className='input-Input-passkey'>
                      <input type="text" id="password" onChange={(e) =>setLoginPassword(e.target.value)} placeholder='password' />
                    </div>
                  </div>
                  {error && <p>{errorMessage}</p>}
                  <button className="submission">Submit</button>
                </form>
              </div>    
          </div>
        </div>
  </>
  )
}
export default Login;