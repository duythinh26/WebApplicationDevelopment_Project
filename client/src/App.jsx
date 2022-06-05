import Homepage from "./pages/Homepage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import React from "react";
import Success from "./pages/Success";
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element = { <Homepage/> }/>
                <Route path="/products/:category" element = { <ProductListPage/> }/>
                <Route path="/product/:id" element = { <ProductPage/> }/>
                <Route path="/cart" element = { <Cart/> }/>
                <Route path="/register" element = { <RegisterPage/> }/>
                <Route path="/login" element = { <LoginPage/> }/>
            </Routes>
        </Router>
    );
}
  
export default App;