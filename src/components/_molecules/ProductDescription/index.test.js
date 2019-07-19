import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductDescription from '.';

function ProductDescriptionSetup() {
  const props = {
    title: 'Title',
    description: 'Description',
    quantity: 2
  };

  const ProductDescriptionJSX = (
    <ProductDescription {...props} />
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
