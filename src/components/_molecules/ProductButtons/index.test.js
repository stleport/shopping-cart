import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CartItem from '.';

function ProductButtons() {
  const props = {
    onAddToCart: jest.fn(),
    onSubQuantity: jest.fn(),
    onRemoveFromCart: jest.fn(),
    quantity: 2
  }; 

  const CartItemJSX = (
    <CartItem {...props} />
  );

  const CartItemComponent = shallow(CartItemJSX);
  return {
    CartItemComponent,
    CartItemJSX,
    props
  };
}

describe('CartItem', () => {
  it('renders correctly CartItem component', () => {
    const { CartItemJSX } = ProductButtons();
    const CartItemComponent = renderer.create(CartItemJSX).toJSON();
    expect(CartItemComponent).toMatchSnapshot(); 
  });

  it('should contain two buttons', () => {
    const { CartItemComponent } = ProductButtons();
    expect(CartItemComponent.find('ProductButton').length).toEqual(2);
  });
});
