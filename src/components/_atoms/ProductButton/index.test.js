import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductButton from '.';

function ProductButtonSetup(newProps = {}) {
  const props = {
    iconName: 'plus',
    iconAlign: 'right', 
    iconFloat: 'floated',
    iconColor: 'dark',
    enabled: true,
    bgColor: 'dark',
    onClick: jest.fn(),
    onChangeQuantity: jest.fn()
  };

  const ProductButtonJSX = (
    <ProductButton {...{ ...props, ...newProps }} />
  );

  const ProductButtonComponent = mount(ProductButtonJSX);
  return {
    ProductButtonComponent,
    ProductButtonJSX,
    props
  };
}

describe('ProductButton', () => {
  it('renders correctly ProductButton component', () => {
    const { ProductButtonJSX } = ProductButtonSetup();
    const ProductButtonComponent = renderer.create(ProductButtonJSX).toJSON();
    expect(ProductButtonComponent).toMatchSnapshot();
  });
  it('onAddToCart handler should be call on plus button click', () => {
    const { ProductButtonComponent, props } = ProductButtonSetup();
    ProductButtonComponent.find('button').simulate('click');
    expect(props.onChangeQuantity).toHaveBeenCalled();
  });
  // it('onSubQuantity handler should be call on minus button click', () => {
  //   const { ProductButtonComponent, props } = ProductButtonSetup({ iconName: 'minus' });
  //   ProductButtonComponent.find('button').simulate('click');
  //   expect(props.onSubQuantity).toHaveBeenCalled();
  // });
});
