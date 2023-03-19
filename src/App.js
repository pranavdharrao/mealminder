import Navbar from "./components/Navbar";
import About from "./static/about"
import { Routes,Route } from "react-router-dom";


function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element= {<About/>} />
      </Routes>
    </>
  ) 
}

export default App;
