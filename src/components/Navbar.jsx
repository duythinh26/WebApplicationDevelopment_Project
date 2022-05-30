import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import "./css/Navbar.css"


const Navbar = () => {
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
                    <h1 className="navbar__logo">Daki Shop</h1>
                </div>
                <div className="one-three navbar--right">
                    <div className="navbar__menu-item">Sign In</div>
                    <div className="navbar__menu-item">Register</div>
                    <div className="navbar__menu-item">
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