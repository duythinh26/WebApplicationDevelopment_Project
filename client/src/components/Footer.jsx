import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styledEngine from '@mui/styled-engine';
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

const foot_container = styledComponents.div`
    display: flex;
`;

const foot_container_left = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`;

const foot_desc = styledComponents.p`
    margin: 20px 0px;

`;

const social__contain = styledComponents.div`
    display: flex;

`;

const foot_contain_center = styledComponents.div`

    flex: 1;
    padding: 20px;

`;

const foot_title = styledComponents.h2`
    margin-bottom: 30px;

`;

const foot_list = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`;

const foot_list_item = styledComponents.li`
    width: 50%;
    margin-bottom: 10px;

`;

const foot_contain_right = styledComponents.div`
    flex: 1;
    padding: 20px;

`;

const contact_item = styledComponents.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`;

const Footer = () => {
  return (
    <foot_container>
        <foot_container_left>
            <h1 className="footer__logo">Daki Shop</h1>
            <foot_desc>
                There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
            </foot_desc>
            <social__contain>
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
            </social__contain>
        </foot_container_left>
        <foot_contain_center>
            <foot_title>Useful Links</foot_title>
            <foot_list>
                <foot_list_item>Home</foot_list_item>
                <foot_list_item>Cart</foot_list_item>
                <foot_list_item>Man Fashion</foot_list_item>
                <foot_list_item>Woman Fashion</foot_list_item>
                <foot_list_item>Accessories</foot_list_item>
                <foot_list_item>My Account</foot_list_item>
                <foot_list_item>Order Tracking</foot_list_item>
                <foot_list_item>Wishlist</foot_list_item>
                <foot_list_item>Terms</foot_list_item>
            </foot_list>
        </foot_contain_center>
        <foot_contain_right>
            <foot_title>Contact</foot_title>
            <contact_item>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </contact_item>
            <contact_item>
                <Phone style={{marginRight:"10px"}}/> +1 234 567 890
            </contact_item>
            <contact_item>
                <MailOutline style={{marginRight:"10px"}}/>daki.shop@contact
            </contact_item>
            <img className='payment__img' src="https://i.ibb.co/Qfvn4z6/payment.png" alt='payment method'/>
        </foot_contain_right>
    </foot_container>
  )
}

export default Footer