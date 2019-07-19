import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = ({ description, title, quantity }) => (
  (
    <React.Fragment>
      <h2>{title}</h2>
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ProductDescription;
