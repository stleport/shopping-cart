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
  addQuantity, 
  subQuantity 
} from '../../actions';

export function App({ 
  cart, 
  total,
  products, 
  pending, 
  getProductListConnect,
  addToCartConnect,
  removeFromCartConnect,
  addQuantityConnect,
  subQuantityConnect
}) {
  return (
    <React.Fragment>
      <Header cart={cart} total={total} />
      <Redirect from="/" to="/menu" />
      <Route 
        path="/cart" 
        render={() => (
          <Cart 
            cart={cart} 
            products={products} 
            total={total} 
            addToCart={addToCartConnect} 
            removeFromCart={removeFromCartConnect} 
            addQuantity={addQuantityConnect} 
            subQuantity={subQuantityConnect} 
          />
        )}
      />
      <Route 
        path="/menu" 
        render={() => (
          <Menu 
            products={products} 
            cart={cart}
            pending={pending} 
            getProductList={getProductListConnect}
            addToCart={addToCartConnect}
            addQuantity={addQuantityConnect}
            subQuantity={subQuantityConnect}
            removeFromCart={removeFromCartConnect}
          />
        )} 
      />
    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCartConnect: id => dispatch(addToCart(id)),
  addQuantityConnect: id => dispatch(addQuantity(id)),
  subQuantityConnect: (id, quantity) => dispatch(subQuantity(id, quantity)),
  removeFromCartConnect: id => dispatch(removeFromCart(id)),
  getProductListConnect: () => dispatch(getProductList())
});

const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products,
  total: state.total,
  pending: state.pending
});

App.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number 
  })).isRequired,
  total: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number
  })).isRequired,
  getProductListConnect: PropTypes.func.isRequired,
  addToCartConnect: PropTypes.func.isRequired,
  removeFromCartConnect: PropTypes.func.isRequired,
  addQuantityConnect: PropTypes.func.isRequired,
  subQuantityConnect: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
