import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Home } from "./pages/Home";
import { Gallery } from './pages/Gallery1';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/gallery" element={<Gallery></Gallery>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
