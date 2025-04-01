import {Link} from "react-router"

function Nav() {
    return (
        <nav className="nav-container">
            <Link className= "link" to="/">Home</Link>
            <Link className= "link" to="/api/articles">Articles</Link>
      </nav>
    );
}

export default Nav;