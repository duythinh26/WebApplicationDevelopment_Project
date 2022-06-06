import React, { useState } from 'react';
import styledComponents from "styled-components";
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import News from '../components/News';
import Footer from '../components/Footer';
import { useLocation } from "react-router";

const Container = styledComponents.div``;

const Title = styledComponents.h1`
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styledComponents.div`
    margin: 20px;
`;

const FilterText = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styledComponents.select`
    padding: 10px;
    margin-right: 20px;
`;

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({...filters, [e.target.name]: value});
    };

    console.log(filters);

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <option disabled>Color</option>
                        <option>white</option>
                        <option>black</option>
                        <option>red</option>
                        <option>blue</option>
                        <option>yellow</option>
                        <option>green</option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <option disabled>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <option value="newest">Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <News/>
            <Footer/>
        </Container>
    )
}

export default ProductList;