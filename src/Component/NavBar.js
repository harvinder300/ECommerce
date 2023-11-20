import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import LogIn from './LogIn';

function NavBar() {
    return (
        <>
            <nav className="navBar">
                <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Product">Product</Link>
                    </li>

                    <li>
                        <Link to="/ContactUs">Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/LogIn">Log In</Link>
                    </li>
                </ul>

            </nav>
        </>
    );
}

export default NavBar;