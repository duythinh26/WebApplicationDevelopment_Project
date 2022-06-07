import React from 'react';
import styledComponents from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import "../components/css/CartPage.css";
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Container = styledComponents.div``;

const Wrapper = styledComponents.div`
    padding: 20px;  
`;

const Title = styledComponents.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styledComponents.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${ (props) => props.type === "filled" && "none" };
    background-color: ${ (props) => props.type === "filled" ? "black" : "transparent" };
    color: ${ (props) => props.type === "filled" && "white" };
`;

const TextContainer = styledComponents.div``;

const TopText = styledComponents.div`
    text-decoration: none;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styledComponents.div`
    display: flex;
    justify-content: space-between;
`

const Info = styledComponents.div`
    flex: 3;
`;

const Product = styledComponents.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styledComponents.div`
    flex: 2;
    display: flex;
`;

const Image = styledComponents.img`
    width: 200px;
`;

const Details = styledComponents.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const PriceDetail = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styledComponents.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styledComponents.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styledComponents.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styledComponents.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styledComponents.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styledComponents.h1`
    font-weight: 200;
`;

const SummaryItem = styledComponents.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const Checkout = styledComponents.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`;


const Cart = () => {

    const cart = useSelector(state => state.cart);
    
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>Your cart</Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TextContainer>
                        <TopText>Shopping Bag</TopText>
                        <TopText>Your Wishlist</TopText>
                    </TextContainer>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                    {cart.products.map((product) => (
                        <Product>
                            <ProductDetail>
                                <Image src = { product.img }/>
                                <Details>
                                    <span>
                                        <b>Product:</b> { product.title } 
                                    </span>
                                    <span>
                                        <b>ID:</b> { product._id }
                                    </span>
                                    <ProductColor color={ product.color }></ProductColor>
                                    <span>
                                        <b>Size:</b> { product.size }
                                    </span>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>{ product.quantity }</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $ { product.price * product.quantity }
                                </ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <span>Subtotal</span>
                            <span>${ cart.total }</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span>Estimated Shipping</span>
                            <span>$5.90</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span>Shipping Discount</span>
                            <span>-$5.90</span>
                        </SummaryItem>
                        <SummaryItem type = "total">
                            <span>Total</span>
                            <span>${ cart.total }</span>
                        </SummaryItem>
                        <Checkout>Check out</Checkout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart;