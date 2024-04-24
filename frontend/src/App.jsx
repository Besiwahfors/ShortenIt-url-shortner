import "./App.css"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import UserProfile from "./pages/Userprofile";
import AllLinks from "./pages/AllLinks";
import ShortenLink from './pages/Shortenlink';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes> 
       
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/userProfile/:userId" element={<UserProfile />} />
          <Route path="/all-links" element={<AllLinks/>}/>
          <Route path="/shorten-link" element={<ShortenLink/>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
