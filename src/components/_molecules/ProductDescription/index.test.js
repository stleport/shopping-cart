import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductDescription from '.';

function ProductDescriptionSetup(newProps = {}) {
  const props = {
    description: 'Description',
    quantity: 1
  };

  const ProductDescriptionJSX = (
    <ProductDescription {...{ ...props, ...newProps }} />
  );

  const ProductDescriptionComponent = shallow(ProductDescriptionJSX);
  return {
    ProductDescriptionComponent,
    ProductDescriptionJSX,
    props
  };
}

describe('ProductDescription', () => {

  it('renders correctly ProductDescription component', () => {
    const { ProductDescriptionJSX } = ProductDescriptionSetup();
    const ProductDescriptionComponent = renderer.create(ProductDescriptionJSX).toJSON();
    expect(ProductDescriptionComponent).toMatchSnapshot();
  });
});
