import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/_organisms/Header';
import Menu from '../../components/_pages/MenuPage';
import Cart from '../../components/_pages/CartPage';
import { 
  getProductList, 
  addToCart, 
  removeFromCart, 
  subQuantity 
} from '../../actions';

export function App({ 
  cart, 
  products, 
  getProductListConnect,
  addToCartConnect,
  removeFromCartConnect,
  subQuantityConnect
}) {
  return (
    <React.Fragment>
      <Header cart={cart} />
      <Redirect from="/" to="/menu" />
      <Route 
        path="/cart" 
        render={() => (
          <Cart 
            cart={cart} 
            total={cart.total}
            products={products.products} 
            onAddToCart={addToCartConnect} 
            onRemoveFromCart={removeFromCartConnect} 
            onSubQuantity={subQuantityConnect} 
          />
        )}
      />
      <Route 
        path="/menu" 
        render={() => (
          <Menu 
            products={products.products} 
            cart={cart}
            pending={products.pending} 
            getProductList={getProductListConnect}
            onAddToCart={addToCartConnect}
            onSubQuantity={subQuantityConnect}
            onRemoveFromCart={removeFromCartConnect}
          />
        )} 
      />
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCartConnect: id => dispatch(addToCart(id)),
  subQuantityConnect: (id, quantity) => dispatch(subQuantity(id, quantity)),
  removeFromCartConnect: id => dispatch(removeFromCart(id)),
  getProductListConnect: () => dispatch(getProductList())
});

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
});

App.defaultProps = {
  cart: {
    items: [],
    total: 0
  },
  products: {
    pending: false
  }
};

App.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number.isRequired,
      quantity: PropTypes.number
    })),
    total: PropTypes.number
  }),
  products: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number
    })).isRequired 
  }),
  getProductListConnect: PropTypes.func.isRequired,
  addToCartConnect: PropTypes.func.isRequired,
  removeFromCartConnect: PropTypes.func.isRequired,
  subQuantityConnect: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
