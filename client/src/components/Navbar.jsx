import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from '@mui/material/Badge';
import styledComponents from 'styled-components';
import "./css/style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styledComponents.div`
    height: 60px;
`;

const Wrapper = styledComponents.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Language = styledComponents.div`
    font-size: 16px;
    cursor: pointer;
`;

const Left = styledComponents.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styledComponents.div`
    border: 0.5px solid lightgray;
    margin-left: 50px;
    padding: 5px;
    display: flex;
    align-items: center;
`;

const SearchInput = styledComponents.input`
    border: none;   
`;

const Center = styledComponents.div`
    text-align: center;
`;

const Logo = styledComponents.h1`
    font-weight: bold;
    color: #000;
`;

const Right = styledComponents.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styledComponents.div`
    font-size: 16px;
    margin-left: 50px;
    cursor: pointer;
`;

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left className="one-three">
                    <Language>EN</Language>
                    <SearchContainer>
                        <SearchInput/>
                        <Search style={{ color: "black", fontSize: 16 }}></Search>
                    </SearchContainer>
                </Left>
                <Center className="one-three">
                    <Link to={ "/" } className = "homepage">
                        <Logo>Daki Shop</Logo>
                    </Link>
                </Center>
                <Right className="one-three">
                    <Link to="/login" className="link">
                        <MenuItem>Sign In</MenuItem>
                    </Link>
                    <Link to="/register" className="link">
                        <MenuItem>Register</MenuItem>
                    </Link>
                    {/* <Link to="/logout" className="link">
                        <MenuItem>Logout</MenuItem>
                    </Link> */}
                    <Link to="/cart" className="link">
                        <MenuItem>
                            <Badge badgeContent={ quantity } color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;