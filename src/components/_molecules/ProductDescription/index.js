import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = ({ title, description, quantity, price, view }) => {
  const blockName = view === 'card' ? 'Card' : 'Item';
  return (
    <React.Fragment>
      <div className={`st-${blockName}__description`}>
        <h2 className={`st-${blockName}__title st-${blockName}__title--${view === 'card' ? 'small' : 'big'}`} >{title}</h2>
        {view === "cart" &&
        <div className={`st-${blockName}__content`}>
          <p className={`st-${blockName}__description-text`}>
            {description}
          </p>
          <div className={`st-${blockName}__pricing`}>
            Quantité :&#160;
            {quantity}
          </div>
        </div>  
        }    
      </div>
    </React.Fragment>
  )
};

ProductDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ProductDescription;
