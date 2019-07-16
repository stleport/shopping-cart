import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../_organisms/Footer';

const MenuLayout = ({ footer, children }) => (
  (
    <React.Fragment>
      <main>
        <div className="st-Page__wrapper">
          {children}
        </div>
      </main>
      <Footer>{footer}</Footer>
    </React.Fragment>
  )
);

MenuLayout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired
};

export default MenuLayout;
