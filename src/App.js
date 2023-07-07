import Navbar from "./componets/components/Navbar";
import Home from "./componets/components/Home2";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./componets/components/AboutUs";

import NavR from "./componets/components/NavR";
import CU2 from "./componets/components/CU2";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
        <Route
          path="/contactus"
          element={
            <>
              <Navbar />
              <CU2 />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
