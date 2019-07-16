import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductOverlay from '.';

function ProductOverlaySetup(newProps = {}) {
  const props = {
    quantity: 2
  };

  const ProductOverlayJSX = (
    <ProductOverlay {...props} />
  );

  const ProductOverlayComponent = shallow(ProductOverlayJSX);
  return {
    ProductOverlayComponent,
    ProductOverlayJSX,
    props
  };
}

describe('ProductOverlay', () => {
  it('renders correctly ProductOverlay component', () => {
    const { ProductOverlayJSX } = ProductOverlaySetup();
    const ProductOverlayComponent = renderer.create(ProductOverlayJSX).toJSON();
    expect(ProductOverlayComponent).toMatchSnapshot();
  });

  it('should pluralize "portion" when needed', () => {
    const { ProductOverlayComponent } = ProductOverlaySetup();
    expect(ProductOverlayComponent.find('h3').text()).toMatch(/portions/);
  });
});
