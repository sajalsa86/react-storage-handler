import React from 'react';
import './Cosmetic.css';
import { addToDb, removeCartItem, removeShopingCart } from '../utilitis/fakedb';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    //add to cart
    const addToCurt = (id) => {
        addToDb(id);
    };
    //Delete Cart
    const deleteCart = id => {
        removeCartItem(id);

    };
    //Delete all cart
    const deleteAllItem = () => removeShopingCart();

    return (
        <div className='cosmetic'>
            <button onClick={deleteAllItem}> All Cancel</button>
            <h3>Product Name: {name}</h3>
            <h3>Product Price: {price}</h3>
            <h3>Product id: {id}</h3>

            <button onClick={() => addToCurt(id)}>Add to Curt</button>
            <button onClick={() => deleteCart(id)}> Cancel</button>

        </div>
    );
};

export default Cosmetic;