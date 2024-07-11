import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Anime from "./Anime";
import Series from "./Series";
import Movies from "./Movies";



function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="/Anime" element={<Anime />} />
        <Route exact path="/Series" element={<Series />} />
        <Route exact path="/Movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;