import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = ({ description, quantity }) => (
  (
    <React.Fragment>
      <p className="description">
        {description}
      </p>
      <div className="st-Item__pricing">
        Quantité :&#160;
        {quantity}
      </div>
    </React.Fragment>
  )
);

ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ProductDescription;
