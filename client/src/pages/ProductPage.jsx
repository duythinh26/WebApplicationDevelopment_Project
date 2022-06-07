import React, { useEffect, useState } from 'react'
import styledComponents from 'styled-components';
import "../components/css/ProductPage.css"
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const FilterColor = styledComponents.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const ProductPage = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <div className='product-page__container'>
      <Announcement/>
      <Navbar/>
      <div className="product-page__wrapper">
        <div className="img__container">
          <img className='productpage__img' src={ product.img } alt="" />
        </div>
         <div className="info__container">
          <h1 className="product__info-title">
            { product.title } 
          </h1>
          <p className="info_desc">
            { product.desc }
          </p>
          <span className="price">$ { product.price }</span>
          <div className="product--filter__container">
            <div className="product__filter">
              <span className="filter__title">Color</span>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
              ))}
            </div>
            <div className="product__filter">
              <span className="filter__title">Size</span>
              <select name="" id="" className="filter__size" onChange={(e) => setSize(e.target.value)}>
              {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="add-to-cart__container">
            <div className="amount__container">
              <Remove style = {{ cursor: "pointer" }} onClick = {() => handleQuantity("dec")}/>
              <span className="amount">{ quantity }</span>
              <Add style = {{ cursor: "pointer" }} onClick = {() => handleQuantity("inc")}/>
            </div>
            <button className="add__button" onClick={handleClick}>Add to cart</button>
          </div>
        </div>
      </div>
      <News/>
      <Footer/>
    </div>
  )
};

export default ProductPage;