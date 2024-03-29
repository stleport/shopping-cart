import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from '../../_molecules/NavLinks'; 
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { ReactComponent as Github } from '../../../assets/images/github.svg';

export const Header = ({ cart }) => (
  (
    <header className="st-Header st-Header--inverted">
      <div className="st-Header__wrapper">
        <div className="st-Header__navLinks">
          <a href="/menu" className="st-Header__item">
            <Logo className="st-Header__brand" /> 
          </a>
          <NavLinks cart={cart} />
        </div>
        <div className="st-Header__github">
          <a 
            className="item right floated"
            href="https://github.com/stleport/shopping-cart" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            <Github className="st-Header__githublogo" />
          </a>
        </div>
      </div>
    </header>
  )
);

Header.defaultProps = {
  cart: {
    items: [],
    total: 0
  }
};

Header.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.number
  })
};

export default Header;
