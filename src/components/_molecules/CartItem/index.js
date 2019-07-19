import React from 'react';
import PropTypes from 'prop-types';
import ProductPicture from '../../_atoms/ProductPicture';
import ProductDescription from '../ProductDescription';
import ProductButton from '../../_atoms/ProductButton';

const CartItem = ({
  cart,
  cartItem,
  onAddToCart,
  onSubQuantity
}) => {
  const item = cart.items.find(c => c.productId === cartItem.productId);
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
        />
        <div className="st-Item__extra">
          <ProductButton 
            iconName="minus"
            iconAlign="right" 
            iconColor="white"
            bgColor="dark"
            onSubQuantity={
              () => onSubQuantity(cartItem.productId, item.quantity)
            }
          />
          <ProductButton 
            iconName="plus"
            iconAlign="right"
            iconColor="dark"
            bgColor="light"
            onAddToCart={() => onAddToCart(cartItem.productId)}
          />
        </div>
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
