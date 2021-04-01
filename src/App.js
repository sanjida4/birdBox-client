import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Admin from './components/Admin/Admin';
import NotFound from './components/NotFound/NotFound';
// import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      {/* <h3>email: {loggedInUser.email}</h3> */}
      <Router>
        <Header></Header>

        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/placeOrder">
            <PlaceOrder />
          </Route>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>
{/* 
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
          </Route> */}

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;