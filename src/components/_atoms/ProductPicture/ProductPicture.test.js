import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProductPicture from '.';

function ProductPictureSetup(newProps = {}) {
  const props = {
    altText: 'Alt text',
    source: 'http://example.com',
  };

  const ProductPictureJSX = (
    <ProductPicture {...props} />
  );

  const ProductPictureComponent = shallow(ProductPictureJSX);
  return {
    ProductPictureComponent,
    ProductPictureJSX,
    props
  };
}

describe('ProductPicture', () => {

  it('renders correctly ProductPicture component', () => {
    const { ProductPictureJSX } = ProductPictureSetup();
    const ProductPictureComponent = renderer.create(ProductPictureJSX).toJSON();
    expect(ProductPictureComponent).toMatchSnapshot();
  });

});
