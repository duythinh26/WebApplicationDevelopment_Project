import styledComponents from "styled-components";
import { categories } from "../data";
import CategoryItem from './CategoryItem';

const Container = styledComponents.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item = { item } key = { item.id }/>
      ))}
    </Container>
  )
}

export default Categories;