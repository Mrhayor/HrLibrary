import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './components/Login';
import SignUp from './components/SignUp.jsx';
import Blog from './pages/Blog'
import SearchedResuts from './components/SearchedResuts.jsx'
import PrivateRoutes from './layouts/PrivateRoutes.jsx';

function App() {
  return( 
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path= "/SearchedResuts" element= {<SearchedResuts/>} />

    <Route element={<PrivateRoutes/>}>
      <Route path="/Blog" element={<Blog/>}/>
    </Route>
    <Route path="*" element={<Navigate to="/"/>}/>
</Routes>
)

}

export default App
