import React from 'react';
import PropTypes from 'prop-types';

const ProductOverlay = ({ quantity }) => (
  (
    <div>
      <div className="st-Card__overlay">
        <h3>
          {quantity}
          &#160;portion
          {(quantity > 1) && 's'}
          &#160;dans votre Frichti
        </h3>
      </div>
    </div>
  )
);

ProductOverlay.defaultProps = {
  quantity: 0
};

ProductOverlay.propTypes = {
  quantity: PropTypes.number
};

export default ProductOverlay;
