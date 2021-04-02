import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="col-md-3 col-sm-12">

            <h3 className="mb-4 mt-4 admin-title">
                <Link to="/">Bird Box</Link>
            </h3>

            <ul className="list-group">

                <Link to="/admin/manage">
                    <li>
                        <span  style ={{color: 'black'}}>Manage Birds</span>
                    </li>
                </Link>

                <Link to="/admin/add">
                    <li>
                        <span  style ={{color: 'black'}}>Add Birds</span>
                    </li>
                </Link>

            </ul>
        </div>
    );
};

export default Header;