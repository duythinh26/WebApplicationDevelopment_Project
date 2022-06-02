import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styledComponents from 'styled-components';
import "./css/Footer.css";

const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Footer = () => {
  return (
    <div className='footer__container'>
        <div className="footer__container--left">
            <h1 className="footer__logo">Daki Shop</h1>
            <p className="footer__desc">
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
            </p>
            <div className="social__container">
                <SocialIcon color='3B5999'>
                    <Facebook style={{ cursor: "pointer" }}/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram style={{ cursor: "pointer" }}/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter style={{ cursor: "pointer" }}/>
                </SocialIcon>
                <SocialIcon color='E60023'>
                    <Pinterest style={{ cursor: "pointer" }}/>
                </SocialIcon>
            </div>
        </div>
        <div className="footer__container--center">
            <h2 className="footer__title">Useful Links</h2>
            <ul className="footer__list">
                <li className="footer__list-item">Home</li>
                <li className="footer__list-item">Cart</li>
                <li className="footer__list-item">Man Fashion</li>
                <li className="footer__list-item">Woman Fashion</li>
                <li className="footer__list-item">Accessories</li>
                <li className="footer__list-item">My Account</li>
                <li className="footer__list-item">Order Tracking</li>
                <li className="footer__list-item">Wishlist</li>
                <li className="footer__list-item">Terms</li>
            </ul>
        </div>
        <div className="footer__container--right">
            <h2 className="footer__title">Contact</h2>
            <div className="contact__item">
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </div>
            <div className="contact__item">
                <Phone style={{marginRight:"10px"}}/> +1 234 567 890
            </div>
            <div className="contact__item">
                <MailOutline style={{marginRight:"10px"}}/>daki.shop@contact
            </div>
            <img className='payment__img' src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
    </div>
  )
}

export default Footer