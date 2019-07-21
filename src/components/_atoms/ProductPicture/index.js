import React from 'react';
import PropTypes from 'prop-types';
import ProductOverlay from '../../_molecules/ProductOverlay';
import { DEFAULT_PICTURE } from '../../../constants';

const ProductPicture = ({ altText, source, quantity, view }) => {
  const blockName = (view === 'card') ? 'Card' : 'Item';
  return (
    <React.Fragment>
      <div className={`st-${blockName}__image`}>
        <img 
          className="image" 
          alt={altText} 
          src={source} 
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = DEFAULT_PICTURE 
          }}
        />
      {quantity > 0 && (
        <ProductOverlay quantity={quantity} />
      )}
      </div>
    </React.Fragment>
  )
};

ProductPicture.propTypes = {
  altText: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

export default ProductPicture;
