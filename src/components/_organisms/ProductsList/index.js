import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../../_molecules/Product';

const ProductList = ({ 
  products,
  cart,
  getProductList,
  addToCart,
  addQuantity,
  subQuantity,
  removeFromCart,
  pending
}) => {
  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const hasProducts = products.length > 0;
  const productList = hasProducts ? (
      products.map(item => (
        <Product 
          key={item.product.productId} 
          product={item.product} 
          cart={cart}
          addToCart={addToCart}
          addQuantity={addQuantity}
          subQuantity={subQuantity}
          removeFromCart={removeFromCart}
        />
      ))
    ) : (
      <p>Aucun produit trouvé</p>
    );
    
  if (pending) {
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
        {hasProducts && products.length}
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
  cart: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number
  })).isRequired,
  getProductList: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired
};

export default ProductList;
