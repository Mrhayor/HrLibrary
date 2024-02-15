import {useState} from "react";
import userSignUp from "../auth/userSignUp";
import  {useNavigate, useLocation} from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [name] = useState("hayor")

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || "/Blog"
  const {error, signUp} = userSignUp()

  const handleSignUp = async (e) =>{
    e.preventDefault();

    await signUp (email, password)

    if(!error){
      navigate(from, {replace:true})
      setEmail("");
      setPassword("");
      return;
    } else {
      setErrorMessage(error)
    }

  }
 console.log(name)
  return (
   <>
        <div className="mains">
          <div className="registrationImage"></div>
     
          <div className="formContainer">
           
              <div className="formix signup-form">
              <header>Sign up</header>
                <form onSubmit={handleSignUp}>
                  
                  <div className='input-mail'>
                    <label htmlFor="email">Email</label>
                    <div className="input-Input-mail">
                       <input type="text" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}placeholder='email' />
                    </div>
                  </div>

                  <div className='input-passkey'>
                    <label htmlFor="password">Password</label>
                    <div className='input-Input-passkey'>
                      <input type="text" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password' />
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

export default SignUp
