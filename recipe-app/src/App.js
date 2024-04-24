import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import MyRecipes from "./pages/MyRecipes";
import {Routes, Route} from "react-router-dom";
import Navbar from "./pages/Navbar";
import './App.css';

function App() {
  return (
    <><Navbar/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="my_recipes" element={<MyRecipes />} />
      </Route>
    </Routes></>
        
  );
  
}

export default App;
