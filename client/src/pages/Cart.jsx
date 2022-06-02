import React from 'react';
import styledComponents from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import "../components/css/CartPage.css";
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const TopButton = styledComponents.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const ProductColor = styledComponents.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const SummaryItem = styledComponents.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const Cart = () => {
  return (
    <div className="cart__container">
        <Announcement/>
        <Navbar/>
        <div className="cart__wrapper">
            <h1 className="cart__title">Your cart</h1>
            <div className="cart__top">
                <TopButton>Continue shopping</TopButton>
                <div className="text__container">
                    <span className="top__text">Shopping Bag</span>
                    <span className="top__text">Your Wishlist</span>
                </div>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </div>
            <div className="cart__bottom">
                <div className="bottom__info">
                    <div className="bottom__product">
                        <div className="bottom__product-detail">
                            <img className='product__img' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                            <div id="detail">
                                <span>JESSIE THUNDER SHOES</span>
                                <span><b>ID:</b> 93813718293</span>
                                <ProductColor color='black'/>
                                <span><b>Size:</b> 37.5</span>
                            </div>
                        </div>
                        <div className="bottom__price-detail">
                            <div className="product__amount--container">
                                <Remove style={{ cursor: "pointer" }}/>
                                <div className="product__amount">2</div>
                                <Add style={{ cursor: "pointer" }}/>
                            </div>
                            <div className="product__price">$30</div>
                        </div>
                    </div>
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
                            <div className="product__price">$20</div>
                        </div>
                    </div>
                </div>
                <div className="summary">
                    <h1 className="summary__title">Order Summary</h1>
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
                    <button className="checkout">Check out</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart