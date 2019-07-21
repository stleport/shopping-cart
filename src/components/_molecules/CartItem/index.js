import React from 'react';
import PropTypes from 'prop-types';
import ProductPicture from '../../_atoms/ProductPicture';
import ProductDescription from '../ProductDescription';
import ProductButtons from '../../_molecules/ProductButtons';

const CartItem = ({
  cart,
  cartItem,
  onAddToCart,
  onSubQuantity
}) => {
  const item = cart.items.find(c => c.productId === cartItem.productId);
  const productInCart = true;
  const isProductAvailable = true;
  return (
    <div className="st-Item">
      <div className="st-Item__image st-Item__image--small">
        <ProductPicture source={cartItem.images[0]} altText={cartItem.title} />
      </div>
      <div className="st-Item__content">
        <ProductDescription 
          title={cartItem.title} 
          description={cartItem.description} 
          quantity={item.quantity} 
          view="cart"
        />
        <ProductButtons
          isProductAvailable={isProductAvailable}
          productInCart={productInCart}
          productId={cartItem.productId}
          onAddToCart={onAddToCart}
          onSubQuantity={onSubQuantity}
          quantity={productInCart ? item.quantity : 0 }
        />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    productId: PropTypes.number,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    }))
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onSubQuantity: PropTypes.func.isRequired
};

export default CartItem;
