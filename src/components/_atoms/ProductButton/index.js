import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../ButtonIcon';

const ProductButton = ({
  iconName,
  iconColor,
  bgColor,
  enabled,
  onAddToCart,
  onSubQuantity
}) => {
  const classNames = () => {
    const bgColorModifier = bgColor === 'dark' ? '--dark' : '--light';
    const enabledAttribute = enabled || ' disabled';
    const button = `st-Edit-button__button st-Edit-button__button${bgColorModifier} button${enabledAttribute}`;
    return button;
  };

  return ( 
    <React.Fragment>
      {iconName === 'plus' ? (
        <ButtonIcon 
          onChangeQuantity={onAddToCart}
          iconName="plus"
          iconColor={iconColor}
          buttonStyle={classNames()}
        />
      ) : (
        <ButtonIcon 
          onChangeQuantity={onSubQuantity}
          iconName="minus"
          iconColor={iconColor}
          buttonStyle={classNames()}
        />
      )}
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
