import React from 'react';
import PropTypes from 'prop-types';
import ProductPicture from '../../_atoms/ProductPicture';
import ProductDescription from '../ProductDescription';
import ProductButton from '../../_atoms/ProductButton';

const CartList = ({ 
  cartItem,
  addQuantity,
  subQuantity
}) => (
  (
    <div className="st-Item">
      <div className="st-Item__image--small">
        <ProductPicture 
          source={cartItem.images[0]} 
          altText={cartItem.title} 
        />
      </div>
      <div className="st-Item__content">
        <h2>{cartItem.title}</h2>
        <ProductDescription 
          description={cartItem.description} 
          quantity={cartItem.quantity} 
        />
        <div className="st-Item__extra">
          <ProductButton 
            iconName="minus"
            iconAlign="right" 
            iconColor="white"
            bgColor="dark"
            onClick={() => subQuantity(cartItem.productId, cartItem.quantity)}
          />
          <ProductButton 
            iconName="plus"
            iconAlign="right"
            iconColor="dark"
            bgColor="light"
            onClick={() => addQuantity(cartItem.productId)}
          />
        </div>
      </div>
    </div>
  )
);

CartList.propTypes = {
  cartItem: PropTypes.shape({
    // productId: PropTypes.number.isRequired,
    productId: PropTypes.number,
    quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired
};

export default CartList;
