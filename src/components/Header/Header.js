import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div style={{marginBottom: '80px'}} className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" style={{fontSize: '35px', fontWeight: '700', color: '#0041C2'}}>Bird Box</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0" style={{ justifyContent: 'flex-end', alignItems: 'center', 'width': '100%', fontSize: '20px'}}>
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/placeOrder" className="nav-link">Orders</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/admin" className="nav-link">Admin</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Deals</Link>
                                </li>

                                <button style={{fontSize: '20px'}} className="btn" onClick={() => setLoggedInUser({})}>Login</button>

                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;