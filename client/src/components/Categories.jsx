import React from 'react';
import "./css/Categories.css";
import { categories } from "../data";
import CategoryItem from './CategoryItem';
import styledComponents from "styled-components";

const Container = styledComponents.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

`

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem item = {item} key = {item.id}/>
        ))}
    </Container>
  )
}

export default Categories;