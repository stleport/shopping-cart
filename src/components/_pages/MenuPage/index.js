import React from 'react';
import PropTypes from 'prop-types';
import MenuLayout from '../../_templates/MenuLayout';
import { Header } from '../../_organisms/Header';
import ProductsList from '../../_organisms/ProductsList';
import Footer from '../../_organisms/Footer';

const MenuPage = props => (
  (
    <MenuLayout
      header={<Header />}
      footer={<Footer />}
    >
      <ProductsList {...props} />
    </MenuLayout>
  )
);

MenuPage.propTypes = {
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

export default MenuPage;
