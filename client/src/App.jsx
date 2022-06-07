import Homepage from "./pages/Homepage";
import ProductListPage from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
    const user = useSelector((state) => state.user.currentUser);

    return (
        <Router>
            <Routes>
                <Route path="/" element = { <Homepage/> }/>
                <Route path="/products/:category" element = { <ProductListPage/> }/>
                <Route path="/product/:id" element = { <ProductPage/> }/>
                <Route path="/cart" element = { <Cart/> }/>
                <Route path="/register" element = { user ? <Navigate to = "/"/> : <RegisterPage/> }>
                </Route>
                <Route path="/login" element = { user ? <Navigate to = "/"/> : <LoginPage/> }>

                </Route>
            </Routes>
        </Router>
    );
}
  
export default App;