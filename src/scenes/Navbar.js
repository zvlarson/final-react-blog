import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Zach's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/signUp">Sign Up</Link>
                <Link to="/signin">Sign in</Link>
            </div>
        </nav>
    )
}

export default Navbar