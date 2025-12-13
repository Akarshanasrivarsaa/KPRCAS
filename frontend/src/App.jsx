import Header from "./components/Header";
import Footer from "./pages/Footer";
import Home from"./pages/Home";
import UseState from "./hooks/UseState";
import Navbar from"./components/Navbar";
import {Routes,Route} from "react-router-dom";
import About from"./pages/About";
import Contact from"./pages/Contact";
import Service from"./pages/Service";
import UseEffect from "./hooks/UseEffect";

const App=()=>{
  return(
  <>
 {/*<Header />
  <Header />
  <Footer />
  <Home name="Akarshana" dept="IT" />
  <Home name="Dharani" dept="IT" />
  <useState /> */}
  
  <Navbar/> 
  <Routes>
     <Route path="/" element={<Home name="Akarshana" dept="IT"/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/service" element={<Service/>}/>
     <Route path="/useState" element={<UseState/>}/>
     <Route path="/useEffect" element={<UseEffect/>}/>
  </Routes>
  </>
  )
}

export default App;