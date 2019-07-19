import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClickButton, buttonStyle, children }) => (
  (
    <button 
      type="button"
      onClick={onClickButton} 
      className={buttonStyle} 
    >
      {children}
    </button>
  )
);

Button.defaultProps = {
  buttonStyle: ''
};

Button.propTypes = {
  buttonStyle: PropTypes.string,
  onClickButton: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
