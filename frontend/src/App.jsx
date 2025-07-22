import { LogIn } from "lucide-react"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {Route,  Routes} from 'react-router-dom'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AddNFT from "./pages/AddNFT"
import {Toaster} from "react-hot-toast"
function App() {
  
  return (
    <>
      <Navbar/>
      
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/addnft" element={<AddNFT/>}/>
      </Routes>

      <Footer/>
      <Toaster/>
      
    </>
  )
}

export default App
