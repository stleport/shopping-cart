import React from 'react';
import PropTypes from 'prop-types';
import {
  ReactComponent as Plus
} from '../../../assets/images/plus.svg';
import {
  ReactComponent as Minus
} from '../../../assets/images/minus.svg';

const ProductButton = ({
  iconName,
  iconColor,
  bgColor,
  enabled,
  onClick
}) => {
  const classNames = function classNames() {
    const bgColorModifier = bgColor === 'dark' ? '--dark' : '--light';
    const enabledAttribute = enabled || ' disabled';
    const button = `st-Edit-button__button st-Edit-button__button${bgColorModifier} button${enabledAttribute}`;
    const icon = `st-Edit-button__icon--${iconColor}`;
    return {
      button,
      icon
    };
  };

  return ( 
    <React.Fragment>
      <button
        className={classNames().button}
        type="button"
        onClick={onClick}
      >
        {iconName === 'plus' ? (
          <Plus 
            fill={iconColor}
            className={classNames().icon}
          />
        ) : (
          <Minus 
            fill={iconColor}
            className={classNames().icon}
          />
        )}
      </button>
    </React.Fragment>
  );
};

ProductButton.defaultProps = {
  enabled: true
};

ProductButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  enabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default ProductButton;