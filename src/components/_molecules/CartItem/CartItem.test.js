import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CartItem from '.';

function CartItemSetup(newProps = {}) {
  const props = {
    cartItem: { 
      title: 'Item',
      description: 'Description',
      images: ['http://example.com'],
      quantity: 1
    },
    addQuantity: jest.fn(),
    subQuantity: jest.fn(),
    removeFromCart: jest.fn()
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
    const { CartItemJSX } = CartItemSetup();
    const CartItemComponent = renderer.create(CartItemJSX).toJSON();
    expect(CartItemComponent).toMatchSnapshot(); 
  });

  it('should contain two buttons', () => {
    const { CartItemComponent } = CartItemSetup();
    expect(CartItemComponent.find('ProductButton').length).toEqual(2);
  });
});
