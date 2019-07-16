import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../../_molecules/CartItem';
import { financialFormat } from '../../../utils';

export const Cart = ({ 
  cart,
  // products,
  total, 
  addQuantity, 
  subQuantity, 
  removeFromCart 
}) => {
  const hasProducts = cart.length > 0;
  // const productsInCart = products.filter(p => cart.find(i => p.product.productId === i.productId));
  const cartList = hasProducts 
    ? (
      cart.map(item => (
        <div 
          key={item.productId} 
          className="st-Items"
        >
          <CartItem 
            cartItem={item} 
            addQuantity={addQuantity} 
            subQuantity={subQuantity} 
            removeFromCart={removeFromCart} 
          />
        </div>
      ))) 
    : (
      <p>Votre panier est vide</p>
    );

  return (
    <React.Fragment>
      <h1>Panier</h1>
      {cartList}
      <h3>
        Total :&#160;
        { financialFormat(total) }
      </h3>
    </React.Fragment>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number
  })).isRequired,
  // products: PropTypes.arrayOf(PropTypes.shape({
  //   productId: PropTypes.number 
  // })).isRequired,
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

export default Cart;
