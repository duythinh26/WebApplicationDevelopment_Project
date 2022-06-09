import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';

const Container = styledComponents.div`
    flex: 1;
    margin: 5px;
    min-width: 25%;  
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`;

const Circle = styledComponents.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`;

const Image = styledComponents.image`
    height: 75%;
    z-index: 2;
`
const Info = styledComponents.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color:rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
`;

const Icon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
`;

const Product = ({ item }) => {
    return (
        <Container>
            <Circle/>
            <Image src={ item.img } alt="" />
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={ `/product/${ item._id }` }>
                    <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;