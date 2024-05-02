import React from 'react';
import './Product.css'
import cart from "../../images/cart_icon.png";
import star from '../../images/rating_img.png';
import drorpDown from '../../images/dropdown_icon.png'
const Product = (props) => {
    console.log(props.product);
    return (
        <div className='product'>
            <div className='product-logo'>
                <img src={props.product.img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{props.product.name}</h3>
                <img src={star} alt="" /> <img src={drorpDown} width={8} alt="" /> <small>{props.product.
starCount}</small>
                <p>By: {props.product.seller}</p>
                <p>₹{props.product.price}  </p>
                <p>Only {props.product.stock} left in Stock - Order Soon</p>
                <ul style={{marginLeft: '20px'}}>
                    <h3>Features</h3>
                    {
                        props.product.features.map(ft => <li>{ft.description} {ft.value}</li> )
                    }
                </ul>
                <div >
                    <button className='btn' onClick={props.HandleAddProduct}>Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Product;