import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { useSelector } from "react-redux";


const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    return (
        <div className="navbar__container">
            <div className="navbar__wrapper">
                <div className="one-three navbar--left">
                    <div className="navbar__language">EN</div>
                    <div className="navbar__search-container">
                        <input className="navbar__search-input"/>
                        <Search style={{ color: "black", fontSize: 16}}></Search>
                    </div>
                </div>
                <div className="one-three navbar--center">
                    <Link to={"/"} className = "homepage" >
                        <h1 className="navbar__logo">Daki Shop</h1>
                    </Link>
                </div>
                <div className="one-three navbar--right">
                    <Link to="/login" className="link">
                        <div className="navbar__menu-item">Sign In</div>
                    </Link>
                    <Link to="/register" className="link">
                        <div className="navbar__menu-item">Register</div>
                    </Link>
                    <Link to="/logout" className="link">
                        <div className="navbar__menu-item">Logout</div>
                    </Link>
                    <Link to="/cart" className="link">
                        <div className="navbar__menu-item">
                            <Badge badgeContent={ quantity } color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;