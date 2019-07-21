import React from 'react';
import PropTypes from 'prop-types';
import ProductButtons from '../ProductButtons';
import ProductPicture from '../../_atoms/ProductPicture';
import ProductDescription from '../ProductDescription';
import { financialFormat } from '../../../utils';

export const ProductCard = ({ 
  product,
  cart,
  onAddToCart,
  onSubQuantity
}) => {
  
  const productInCart = cart.items.find(c => c.productId === product.productId) || [];
  return (
    <div className="st-Card" key={product.productId}>
      <ProductPicture
        source={product.images[0]}
        altText={product.title}
        quantity={productInCart.quantity || 0 }
        view="card"
      />
      <ProductDescription
        title={product.title}
        description={product.description}
        quantity={productInCart.quantity || 0 }
        price={product.price}
        view="card"
      />
      <div className="st-Card__footer">
        <div className="st-Card__pricing">
          { financialFormat(product.price) }
        </div>
        <ProductButtons
          productId={product.productId}
          onAddToCart={onAddToCart}
          onSubQuantity={onSubQuantity}
          quantity={productInCart.quantity || 0 }
          view="card"
      />
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.number,
    title: PropTypes.string.isRequired,
    inventoryLevel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    quantity: PropTypes.number,
    price: PropTypes.number
  }).isRequired,
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onSubQuantity: PropTypes.func.isRequired
};

export default ProductCard;
