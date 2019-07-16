import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CartLayout from '.';

function CartLayoutSetup(newProps = {}) {
  const props = {
    children: '',
    footer: ''
  };

  const CartLayoutJSX = (
    <CartLayout {...props} />
  );

  const CartLayoutComponent = shallow(CartLayoutJSX);

  return {
    props,
    newProps,
    CartLayoutJSX,
    CartLayoutComponent,
    // CartLayoutComponentConnect
  };
}

describe('CartLayout', () => {
  it('renders correctly CartLayout component', () => {
    const { CartLayoutJSX } = CartLayoutSetup();
    const CartLayoutComponent = renderer.create(CartLayoutJSX).toJSON();
    expect(CartLayoutComponent).toMatchSnapshot();
  });
});
