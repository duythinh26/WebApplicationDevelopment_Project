import react from "react";
import styledComponents from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import "../css/Navbar.css"


const Navbar = () => {
    return (
        <div className="navbar--container">
            <div className="navbar--wrapper">
                <div className="one-three navbar--left">
                    <div className="navbar--language">EN</div>
                    <div className="navbar--search-container">
                        <input className="navbar--search-input"/>
                        <Search style={{ color: "black", fontSize: 16}}></Search>
                    </div>
                </div>
                <div className="one-three navbar--center">
                    <h1 className="navbar--logo">Daki Shop</h1>
                </div>
                <div className="one-three navbar--right">
                    <div className="navbar--menu-item">Sign In</div>
                    <div className="navbar--menu-item">Register</div>
                    <div className="navbar--menu-item">
                        <Badge bagdeContent={2} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;