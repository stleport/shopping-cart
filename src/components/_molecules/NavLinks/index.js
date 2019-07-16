import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavLinks = ({ cart }) => {
  return (
    <React.Fragment>
      <Link to="/menu" className="st-Header__item">Menu</Link>
      <Link to="/cart" className="st-Header__item">
        Panier
        {(cart && cart.length > 0) && (
          ` : ${cart.length} produits`
        )}
      </Link>
    </React.Fragment>
  );
};

NavLinks.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number 
  })).isRequired,
};

export default NavLinks;
