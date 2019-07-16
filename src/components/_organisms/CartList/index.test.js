import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Cart } from '.';

function CartListSetup() {
  const props = {
    cart: [
      {
        title: 'Item',
        productId: 1,
        quantity: 1,
        images: ['http://www.example.com'],
        description: 'Description'
      },
    ],
    addToCart: jest.fn(),
    addQuantity: jest.fn(),
    subQuantity: jest.fn(),
    removeFromCart: jest.fn(),
    total: 0
  }; 

  const CartListJSX = (
    <Cart {...props} />
  );

  const CartListComponent = shallow(CartListJSX);
  return {
    CartListComponent,
    CartListJSX,
    props
  };
}

describe('CartList', () => {
  it('renders correctly CartList component', () => {
    const { CartListJSX } = CartListSetup();
    const CartListComponent = renderer.create(CartListJSX).toJSON();
    expect(CartListComponent).toMatchSnapshot(); 
  });
});
