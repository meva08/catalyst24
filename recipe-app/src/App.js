import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import {Routes, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
      // <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      // </BrowserRouter>
  );
}

export default App;
