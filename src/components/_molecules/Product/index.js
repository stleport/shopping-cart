import React from 'react';
import PropTypes from 'prop-types';
import ProductButton from '../../_atoms/ProductButton';
import ProductPicture from '../../_atoms/ProductPicture';
import ProductOverlay from '../ProductOverlay';
import { financialFormat } from '../../../utils';

export const ProductCard = ({ 
  product,
  cart,
  addToCart,
  addQuantity,
  subQuantity
}) => {
  const isProductAvailable = product.inventoryLevel === 'AVAILABLE';
  const productInCart = cart.find(e => e.productId === product.productId);
  return (
    <div className="st-Card" key={product.productId}>
      <div className="st-Card__image">
        <ProductPicture
          source={product.images[0]}
          altText={product.title}
        />
        {productInCart && (
          <ProductOverlay quantity={productInCart.quantity} />
        )}
      </div>
      <div className="st-Card__content">
        <h4>{product.title}</h4>
      </div>
      <div className="st-Card__extra">
        <div className="st-Card__pricing">
          { financialFormat(product.price) }
        </div>
        <div className="st-Card__actions">
          { productInCart && (
          <ProductButton 
            iconName="minus"
            iconColor="white"
            bgColor="dark"
            onClick={() => subQuantity(product.productId, productInCart.quantity)}
          />
          )}
          {productInCart ? (
            <ProductButton 
              iconName="plus"
              iconColor="dark"
              bgColor="light"
              enabled={isProductAvailable}
              onClick={() => addQuantity(product.productId)}
            />
          ) : (
            <ProductButton 
              iconName="plus"
              iconColor="dark"
              bgColor="light"
              enabled={isProductAvailable}
              onClick={() => addToCart(product.productId)}        
            />
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.number,
    title: PropTypes.string.isRequired,
    inventoryLevel: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    quantity: PropTypes.number,
    price: PropTypes.number
  }).isRequired,
  cart: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number 
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired
};

export default ProductCard;
