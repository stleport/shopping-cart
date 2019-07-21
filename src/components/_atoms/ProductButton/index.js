import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';

const ProductButton = ({
  iconName,
  iconColor,
  bgColor,
  enabled,
  onChangeQuantity
}) => {
  const buttonStyle = `st-Edit-button__button st-Edit-button__button${bgColor ==='dark' ? '--dark' : '--light'}`;
  return ( 
    <React.Fragment>
      <ButtonIcon 
        buttonStyle={buttonStyle}
        iconName={iconName}
        iconColor={iconColor}
        onChangeQuantity={onChangeQuantity}
        enabled={enabled}
      />
    </React.Fragment>
  );
};

ProductButton.defaultProps = {
  enabled: true
};

ProductButton.defaultProps = {
  onSubQuantity: null,
  onAddToCart: null
};

ProductButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  enabled: PropTypes.bool,
  onAddToCart: PropTypes.func,
  onSubQuantity: PropTypes.func
};

export default ProductButton;
