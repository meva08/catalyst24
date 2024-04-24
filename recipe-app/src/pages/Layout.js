import Navbar from '../components/Navbar'
import '../App.css';
import { Outlet } from "react-router-dom";

function Layout() {
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
};

export default Layout;
