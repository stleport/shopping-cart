import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../_molecules/ProductCard';

const ProductList = ({ 
  products,
  cart,
  getProductList,
  onAddToCart,
  onSubQuantity,
  onRemoveFromCart
}) => {
  useEffect(() => {
    getProductList();
  }, [getProductList]);
  
  const hasProducts = (products.length > 0) || '';
  const productList = hasProducts ? (
      products.map(item => (
        <ProductCard 
          key={item.product.productId} 
          product={item.product} 
          cart={cart}
          onAddToCart={onAddToCart}
          onSubQuantity={onSubQuantity}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))
    ) : (
      <p>Aucun produit trouvé</p>
    );
    
  if (products.pending) {
    return (
      <div className="stLoader__fullheight">
        <div className="loader">Loading</div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <h1 className="st-Page__title">Notre sélection</h1>
      <p className="st-Page__count">
        {products.length}
        &#160;produits trouvés
      </p>
      <div className="st-Cards">
        {productList}
      </div>
    </React.Fragment>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number
  })).isRequired,
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  getProductList: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onSubQuantity: PropTypes.func.isRequired,
  onRemoveFromCart: PropTypes.func.isRequired
};

export default ProductList;
