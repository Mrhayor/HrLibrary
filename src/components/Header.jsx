import { NavLink} from "react-router-dom";
import {useState, useEffect} from "react";
import  {useNavigate} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import userLogOut from "../auth/userLogOut";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
    const [inputData, setInputData] = useState("");
    const [inputStore, setInputStore] = useState([]);
    const [ emailStore, setEmailStore ] = useState([])
    const [authenticatedUser, setAuthenticatedUser] = useState("")
    const navigate = useNavigate();
    const [isDisplay, setIsDisplay] = useState(false);
    const {error, logOut} = userLogOut();

    const [toggler, setToggler] = useState(true)

    const handleLogOut = async () =>{
        await logOut();

        if(!error){
            navigate("/")
        }
    }

    const onDisplay = () => {
        setIsDisplay(!isDisplay);
    };
    const auth = getAuth();
   
        useEffect(()=>{
           const listen =  onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                setEmailStore( user.email)
               console.log(emailStore + " samuel header");
              //  return user.email;
              // console.log(auth)
              // console.log(user)
              console.log(user)
              setAuthenticatedUser(user)
                // ...
               
             
              } else {
               console.log("User is signed out")
               setAuthenticatedUser(null)
                // ...
              }
            })
            return () =>{
                listen()
            }
        },[])

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData){
            console.log("input value is empty")
           console.log(alert("input value is empty"));
           return;
        }else{
            console.log("yes");
        
            fetch(`https://openlibrary.org/search.json?q=${inputData}`)
            .then((response) => response.json())
            .then((data) => {
               const titled =  data.docs;    
                console.log(titled)
                setInputStore(titled)
                console.log('jj:', inputStore)
          
            })
            .catch((error) => {
                console.error(error);
            });
        }
        return onDisplay();
        }

  return (
    <>

    <nav className="container">  
        <header>
            <NavLink to="/">HrLibrary</NavLink>
        </header>
        <div className="search-box"> 
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder="search" onChange={(e)=> setInputData(e.target.value)} className="inp-word"/>
                <button id="search-btn">search</button>
            </form>
        </div>
        <ul>
            {
                authenticatedUser === null?
                <div className="taged">{toggler &&
                <>
                <li className="signup"><NavLink to="/SignUp" className="link">Sign up</NavLink></li>
              
                <li className="login"><NavLink to={'/Login'} className="link">Login</NavLink></li> 
                </>}
                </div>
               :<>
                <div className="tag">{toggler &&
                    <>
               <li className="emailName">{emailStore}</li>
               <li className="blog"><NavLink to={`/BLog`} className="link">Blog</NavLink></li> 
 
                <li className="logOut" onClick={handleLogOut}>log out</li></>}
                </div>
               </>
            }


        </ul>
        <div className="menu">
            <RxHamburgerMenu onClick={()=> setToggler(!toggler)}/>

        </div>


    </nav>
    <div className="output" style={{ display: isDisplay ? 'block' : 'none' }}>
            <ul>
            {
                inputStore.map((book) =>{
                    console.log("harry potter titles:", book.title, book.key)
                    return(
                        <>
                            <li className="outputed" style={{'marginTop': '15px'}}   key={book.key} onClick={()=>{navigate("/SearchedResuts", 
                            {replace:true, state:{book}})}}><NavLink to="/SearchedResuts" >{book.title}</NavLink></li>
                        </>
                    )
                })
            }
           </ul>
        </div>
    </>
  )
}

export default Header;