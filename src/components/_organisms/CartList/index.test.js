import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Cart } from '.';

function CartListSetup() {
  const props = {
    products: [],
    cart: {
      items: [{
        title: 'Item',
        productId: 1,
        quantity: 1,
        images: ['http://www.example.com'],
        description: 'Description'
      }]
    },
    onAddToCart: jest.fn(),
    onSubQuantity: jest.fn(),
    onRemoveFromCart: jest.fn()
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
