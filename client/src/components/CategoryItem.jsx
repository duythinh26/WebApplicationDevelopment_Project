import styledComponents from "styled-components";
import { Link } from 'react-router-dom';

const Container = styledComponents.div`
  flex: 1;
  height: 70vh;
  margin: 5px;
  position: relative;
`;

const Image = styledComponents.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styledComponents.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styledComponents.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styledComponents.button`
  font-weight: normal;
  border: none;
  padding: 10px;
  background-color: #fff;
  color: #808080;
  cursor: pointer;
`;


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to = { `/products/${ item.cat }` }>
        <Image src={ item.img } alt="" />
        <Info>
          <Title>{ item.title }</Title>
          <Button>Buy Now!!</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem;