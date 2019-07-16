import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ProductCard } from '.';

function ProductCardSetup(newProps = {}) {
  const props = {
    product: {
      productId: 1,
      title: 'Sablés',
      inventoryLevel: 'AVAILABLE',
      shortDescription: 'Description',
      images: ['http://example.com/image.jpg']
    },
    cart: [
      {
        productId: 1,
      },
    ],
    addToCart: jest.fn(),
    addQuantity: jest.fn(),
    subQuantity: jest.fn()
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
    const { ProductCardJSX } = ProductCardSetup();
    const ProductCardComponent = renderer.create(ProductCardJSX).toJSON();
    expect(ProductCardComponent).toMatchSnapshot(); 
  });

  // it('should contain three buttons', () => {
  //   const { ProductCardComponent } = ProductCardSetup();
  //   expect(ProductCardComponent.find('ProductCardButton').length).toEqual(3);
  // });
});
