import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Products/Product';
const Shop = () => {
    const first30 = fakeData.slice(0, 30);
    const [products, setProduct] = useState(first30);
    const HandleAddProductItem = () => {
        console.log(HandleAddProductItem, products);
    }
    return (
        <div className='shop-container'>
            <div className="shop-product">
                <ul >
                    {
                        products.map(pd => <Product product={pd} HandleAddProduct={HandleAddProductItem}
                        ></Product>)
                    }
                </ul>
            </div>
            <div className='shop-cart'>
                <h2>Order Summary</h2>
                <h4>Items Order - 1</h4>
                <h6>item <span style={{ marginLeft: '40px' }}>₹1</span> </h6>
                <h6>Shipping & Handling <span style={{ marginLeft: '40px' }}>₹1</span> </h6>
                <h6>Shipping & Handling <span style={{ marginLeft: '40px' }}>₹1</span> </h6>
                <h6>Shipping & Handling <span style={{ marginLeft: '40px' }}>₹1</span> </h6>
                <h6>Shipping & Handling <span style={{ marginLeft: '40px' }}>₹1</span> </h6>
            </div>

        </div>
    );
};

export default Shop;