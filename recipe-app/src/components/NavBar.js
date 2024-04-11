import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/my_recipes">My Recipes</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </div>
      )
}

export default NavBar