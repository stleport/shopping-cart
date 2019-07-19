import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ iconName, iconStyle }) => {
  const icon = {
    plus: 'plus.svg',
    minus: 'minus.svg'
  }[iconName];

  return (
    <img 
      src={icon} 
      fill="white" 
      alt={iconName} 
      className={iconStyle} 
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired
};

export default Icon;
