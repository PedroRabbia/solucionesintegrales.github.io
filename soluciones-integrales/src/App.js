
import './App.css';
import Home from "./pages/Home";
import Interior from "./pages/Interior"
import Cristaleria from "./pages/Cristaleria"
import Aberturas from "./pages/Aberturas"
import Construccion from "./pages/Construccion"
import Post from "./pages/Post"
import Gallery from './pages/Gallery';
import  { BrowserRouter, Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
  
//17/07 queda terminar hero section//

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/interior' element= {<Interior/>}/>
  <Route path='/cristaleria' element= {<Cristaleria/>}/>
  <Route path='/aberturas' element= {<Aberturas/>}/>
  <Route path='/construccion' element= {<Construccion/>}/>
  <Route path='/postventa' element={<Post/>}/>
  <Route path='/trabajos' element={<Gallery/>}/>
  
  </Routes>
  </BrowserRouter>
  );
}

export default App;
