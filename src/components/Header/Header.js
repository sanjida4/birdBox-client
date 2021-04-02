import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div className="container" style={{ alignSelf: 'flex-start' }}>
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link style={{fontSize: '25px', color: 'slateblue', fontWeight: 'bold'}} className="navbar-brand" to="/">Bird Box</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ justifyContent: 'flex-end', alignItems: 'center', 'width': '100%' }}>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/orders" className="nav-link">Orders</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/admin" className="nav-link">Admin</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/deals" className="nav-link">Deals</Link>
                                </li>

                                <li className="nav-item">
                                    {
                                        user?.email ? <span className="nav-link">{user.name}</span> : <Link to="/login" className="nav-link"><button className="btn site-btn">Login</button></Link>
                                    }

                                </li>

                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;