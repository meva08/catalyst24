function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            Site Name</a>
        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/my_recipes">My Recipes</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
        </ul>
    </nav>
};

export default Navbar;