import React from 'react';
import styledComponents from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import "../components/css/CartPage.css";
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

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
    text-decoration: underline;
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
`;


const Cart = () => {
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
                    <Product>
                        <ProductDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                            <Details>
                                <span className='product__name'>JESSIE THUNDER SHOES</span>
                                <span className='product__id'><b>ID:</b> 93813718293</span>
                                <ProductColor color='black'/>
                                <span className='product__size'><b>Size:</b> 37.5</span>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove style={{ cursor: "pointer" }}/>
                                <ProductAmount>2</ProductAmount>
                                <Add style={{ cursor: "pointer" }}/>
                            </ProductAmountContainer>
                            <div className="product__price">$30</div>
                        </PriceDetail>
                    </Product>
                    <div className="bottom__product">
                        <div className="bottom__product-detail">
                            <img className='cart__product--img' src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                            <div id="detail">
                                <span>HAKURA T-SHIRT</span>
                                <span><b>ID:</b> 93813718295</span>
                                <ProductColor color='grey'/>
                                <span><b>Size:</b> M</span>
                            </div>
                        </div>
                        <div className="bottom__price-detail">
                            <div className="product__amount--container">
                                <Remove style={{ cursor: "pointer" }}/>
                                <div className="product__amount">1</div>
                                <Add style={{ cursor: "pointer" }}/>
                            </div>
                            <ProductPrice>$20</ProductPrice>
                        </div>
                    </div>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <span>Subtotal</span>
                        <span>$80</span>
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
                        <span>$80</span>
                    </SummaryItem>
                    <Checkout>Check out</Checkout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart