import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LogIn from './LogIn';
import { Card } from 'react-bootstrap';

function NavBar() {

    const linkStyle = {
        textDecoration: 'none', // Remove default underline
        color: '#333', // Set the color to a readable value
    };
    return (
        <><Card>
            <nav className="navBar">
                <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
                    <li>
                        <Link to="/" style={linkStyle}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Product" style={linkStyle}>Product</Link>
                    </li>

                    <li>
                        <Link to="/ContactUs" style={linkStyle}>Contact Us</Link>
                    </li>

                    <li>
                        <Link to="/LogIn" style={linkStyle} >Log In</Link>
                    </li>
                </ul>

            </nav>
        </Card>

        </>
    );
}

export default NavBar;