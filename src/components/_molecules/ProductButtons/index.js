import React from 'react';
import ProductButton from '../../_atoms/ProductButton';

const ProductsButtons = ( { 
  isProductAvailable, 
  onAddToCart, 
  onSubQuantity, 
  quantity, 
  productId,
  view
}) => {
  const blockName = view === 'card' ? 'Card' : 'Item';
  return (
    <div className={`st-${blockName}__actions`} >
      {quantity > 0 && (
        <ProductButton 
          iconName="minus"
          iconColor="white"
          bgColor="dark"
          onChangeQuantity={() => onSubQuantity(productId, quantity)}
        />
      )}
      <ProductButton 
        iconName="plus"
        iconColor="dark"
        bgColor="light"
        onChangeQuantity={() => onAddToCart(productId)}
      />
    </div>
  )
};

export default ProductsButtons;