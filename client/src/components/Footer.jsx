import styledComponents from 'styled-components';
import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';

const Container = styledComponents.div`
    display: flex;
`;

const Left = styledComponents.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const Logo = styledComponents.h1``;

const Description = styledComponents.p`
    margin: 20px 0px;
`;

const SocialContainer = styledComponents.div`
    display: flex;
`;

const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    color: #fff;
    background-color: #${(props) => props.color};
    margin-right: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Center = styledComponents.div`
    flex: 1;
    padding: 20px;
`;

const Title = styledComponents.h2`
    margin-bottom: 30px;
`;

const List = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styledComponents.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styledComponents.div`
    flex: 1;
    padding: 20px;
`;

const Contact = styledComponents.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styledComponents.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Daki Shop</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook style={{ cursor: "pointer" }}/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram style={{ cursor: "pointer" }}/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter style={{ cursor: "pointer" }}/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <Contact>
                    <Room style={{ marginRight:"10px" }}/> International University VNU-HCMC
                </Contact>
                <Contact>
                    <Phone style={{ marginRight:"10px" }}/> +1 234 567 890
                </Contact>
                <Contact>
                    <MailOutline style={{ marginRight:"10px" }}/>daki.shop@contact
                </Contact>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt='payment method'/>
            </Right>
        </Container>
    )
}

export default Footer;