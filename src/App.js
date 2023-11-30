import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs } from "./pages/about-us/AboutUs";
import { Footer } from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import { NavBar } from "./pages/navbar/NavBar";
import { Products } from "./pages/products/Products";

function App() {
  return (
    <div className="App">
      <NavBar />
       <Routes>
        <Route index element={ <Home />} />
        <Route path="products" element={ <Products />} />
        <Route path="about-us" element={ <AboutUs />} />
        <Route path="*" element={ <Home />} />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;

/*
 Routes: Define varias rutas dentro de la aplicación
 Route: Asocia un componente a una ruta específica


*/