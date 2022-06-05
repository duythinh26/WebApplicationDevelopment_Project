import Homepage from "./pages/Homepage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import React from "react";
import Success from "./pages/Success";
import {
    BrowserRouter,
    Route,
    Navigate,
    Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
    const user = useSelector((state) => state.user.currentUser);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element = { <Homepage/> }/>
                <Route path="/products/:category" element = { <ProductListPage/> }/>
                <Route path="/product/:id" element = { <ProductPage/> }/>
                <Route path="/cart" element = { <Cart/> }/>
                <Route path="/register" element = { <RegisterPage/> }/>
                <Route path="/login" element = { <LoginPage/> }/>
            </Routes>
        </BrowserRouter>
    );
};
  
export default App;