import { Link } from "react-router-dom";

function Navbar() {
    return (
    <div className="nav">
        <nav className="nav">
            <a href="/" className="site-title">
                Site Name</a>
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
    </div>
    )
}

export default Navbar;