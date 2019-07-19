import React from 'react';
import PropTypes from 'prop-types';

const ProductPicture = ({ altText, source }) => (
  (
    <img 
      className="image" 
      alt={altText} 
      src={source} 
      onError={(e) => { e.target.onerror = null; e.target.src = 'frichti.jpg'; }}
    />
  )
);

ProductPicture.propTypes = {
  altText: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

export default ProductPicture;
