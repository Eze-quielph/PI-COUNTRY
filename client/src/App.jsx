import { Route, Routes, useLocation } from "react-router-dom";
import {
  Inicio,
  HomeContainer,
  Form,
  Detail,
  ActivityCard,
} from "./Views/index";
import NavBar from "./Components/Navbar/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities, getCountry } from "./Redux/actions";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getCountry());
  }, []);
  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/activity" element={<ActivityCard />} />
      </Routes>
    </>
  );
}

export default App;
