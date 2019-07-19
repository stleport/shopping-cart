import React from 'react';
import {
  shallow
} from 'enzyme';
import renderer from 'react-test-renderer';
import {
  ProductCard
} from '.';

function ProductCardSetup() {
  const props = {
    product: {
      productId: 1,
      title: 'Sablés',
      inventoryLevel: 'AVAILABLE',
      shortDescription: 'Description',
      images: ['http://example.com/image.jpg']
    },
    cart: {
      items: [{
        productId: 1,
        quantity: 2
      }],
      total: 0
    },
    item: {
      productId: 1
    },
    onAddToCart: jest.fn(),
    onSubQuantity: jest.fn()
  };

  const ProductCardJSX = (
    <ProductCard {...props} />
  );

  const ProductCardComponent = shallow(ProductCardJSX);
  return {
    ProductCardComponent,
    ProductCardJSX,
    props
  };
}

describe('ProductCard', () => {
  it('renders correctly ProductCard component', () => {
    const {
      ProductCardJSX
    } = ProductCardSetup();
    const ProductCardComponent = renderer.create(ProductCardJSX).toJSON();
    expect(ProductCardComponent).toMatchSnapshot();
  });
});
