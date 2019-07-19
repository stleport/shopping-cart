import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';

const ButtonIcon = ({ 
  iconName, 
  iconColor, 
  buttonStyle, 
  onChangeQuantity
}) => (
  (
    <React.Fragment>
      <Button 
        onClickButton={onChangeQuantity} 
        buttonStyle={buttonStyle}
      >
        <Icon 
          iconName={iconName} 
          iconStyle={`st-Edit-button__icon--${iconColor}`}
        />
      </Button> 
    </React.Fragment>
  )
);

ButtonIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
};


export default ButtonIcon;
