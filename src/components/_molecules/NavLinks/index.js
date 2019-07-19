import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pluralize } from '../../../utils';

export const NavLinks = ({ cart }) => (
  (
    <React.Fragment>
      <Link to="/menu" className="st-Header__item">Menu</Link>
      <Link to="/cart" className="st-Header__item">
        Panier
        {(cart.items.length > 0) && (
          ` : ${cart.items.length} produit`)}
        {pluralize(cart.items.length)}
      </Link>
    </React.Fragment>
  )
);

NavLinks.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.number.isRequired
  }).isRequired
};

export default NavLinks;
