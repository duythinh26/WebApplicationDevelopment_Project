import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { useSelector } from "react-redux";
import styledComponents from 'styled-components';

const navbar_contain = styledComponents.div`
    height: 60px;

`;

const navbar_wrap = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const navbar_language = styledComponents.div`
    font-size: 14px;
    cursor: pointer;
`;

const Left = styledComponents.div`
    display: flex;
    align-items: center;

`;

const navbar_search_contain = styledComponents.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 50px;
    padding: 5px;
`;

const Center = styledComponents.div`
    text-align: center;

`;

const Logo = styledComponents.h1`
    font-weight: normal;
    color: #000;

`;

const Right = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const menu_item = styledComponents.div`
    font-style: 14px;
    margin-left: 50px;
    cursor: pointer;

`;


const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    return (
        <navbar_contain>
            <navbar_wrap>
                <Left className="one-three ">
                    <navbar_language>EN</navbar_language>
                    <navbar_search_contain>
                        <input className="navbar__search-input"/>
                        <Search style={{ color: "black", fontSize: 16}}></Search>
                    </navbar_search_contain>
                </Left>
                <Center className="one-three ">
                    <Link to={"/"} className = "homepage" >
                        <Logo>Daki Shop</Logo>
                    </Link>
                </Center>
                <Right className="one-three ">
                    <Link to="/login" className="link">
                        <menu_item>Sign In</menu_item>
                    </Link>
                    <Link to="/register" className="link">
                        <menu_item>Register</menu_item>
                    </Link>
                    <Link to="/logout" className="link">
                        <menu_item>Logout</menu_item>
                    </Link>
                    <Link to="/cart" className="link">
                        <menu_item>
                            <Badge badgeContent={ quantity } color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </menu_item>
                    </Link>
                </Right>
            </navbar_wrap>
        </navbar_contain>
    )
}

export default Navbar;