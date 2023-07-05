import "./App.css";
import { Route, Routes } from "react-router-dom";

import Inicio from "./Views/Inicio/Inicio";
import Home from './Views/HomePage/HomePage'
import Form from './Views/FormPage/Form'
import Detail from './Views/DetailPage/Detail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/detail" element={<Detail />}/>
      </Routes>
    </>
  );
}

export default App;
