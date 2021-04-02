import React from 'react';
import './Admin.css';

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import Add from './Add/Add';
import Manage from './Manage/Manage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Admin = () => {
    return (
        <div>
            <Switch>
                <PrivateRoute path="/admin/add">
                    <Add />
                </PrivateRoute>

                <PrivateRoute path="/admin/manage">
                    <Manage />
                </PrivateRoute>

                <PrivateRoute exact path="/admin">
                    <Manage />
                </PrivateRoute>

            </Switch>

        </div>
    );
};

export default Admin;