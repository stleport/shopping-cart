import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../../_molecules/CartItem';

export const Cart = ({ 
  cart,
  products,
  onAddToCart, 
  onSubQuantity, 
  onRemoveFromCart 
}) => {
  const productsInCart = products
      .filter(p => cart.items
      .find(e => e.productId === p.product.productId));

  const cartList = productsInCart.length > 0
    ? (
      productsInCart.map(cartItem => (
        <div className="st-Items" key={cartItem.product.productId}>
          <CartItem 
            cart={cart}
            cartItem={cartItem.product} 
            onAddToCart={onAddToCart} 
            onSubQuantity={onSubQuantity} 
            onRemoveFromCart={onRemoveFromCart} 
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
    </React.Fragment>
  );
};

Cart.defaultProps = {
  cart: {
    items: [],
    total: 0
  }
};

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number
  })).isRequired,
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    }))
  }),
  onAddToCart: PropTypes.func.isRequired,
  onSubQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

export default Cart;
