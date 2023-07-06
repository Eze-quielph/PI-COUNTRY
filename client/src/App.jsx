import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import {Inicio, Home, Form, Detail} from './Views/index'
import NavBar from "./Components/Navbar/NavBar";

function App() {
  const location = useLocation()

  return (
    <>
    {location.pathname !== '/' && <NavBar/> }
      
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </>
  );
}

export default App;