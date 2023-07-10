import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Inicio, HomeContainer, Form,Detail, ActivityCard} from "./Views/index";
import NavBar from './Components/Navbar/NavBar'


function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/form" element={<Form />} />
        <Route path="/activity" element={<ActivityCard/>}/>
      </Routes>
    </>
  );
}

export default App;
