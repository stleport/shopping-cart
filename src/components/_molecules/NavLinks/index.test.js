import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { NavLinks } from '.';
import { pluralize } from '../../../utils';

function NavLinksSetup() {
  const props = {
    cart: {
      items: [{
        productId: 2,
        quantity: 2
      }],
      total: 0
    }
  };

  const NavLinksJSX = (
    <BrowserRouter>
      <NavLinks {...props} />
    </BrowserRouter>
  );

  const NavLinksComponent = mount(NavLinksJSX);
  return {
    NavLinksComponent,
    NavLinksJSX,
    props
  };
}

describe('NavLinks rendering', () => { 
  it('renders correctly NavLinks component', () => {
    const { NavLinksJSX } = NavLinksSetup();
    const NavLinksComponent = renderer.create(NavLinksJSX).toJSON();
    expect(NavLinksComponent).toMatchSnapshot();
  });
});

describe('NavLinks links', () => { 
  const { NavLinksComponent } = NavLinksSetup();

  it('should contain a link to /menu', () => {
    expect(NavLinksComponent.find('a[href="/menu"]').length).toEqual(1);
  });

  it('should contain a link to /cart', () => {
    expect(NavLinksComponent.find('a[href="/cart"]').length).toEqual(1);
  });

  it('should display number of products in cart when the cart is not empty', () => {
    expect(NavLinksComponent.find('a[href="/cart"]').text()).toMatch(/\d+ produits?/);
  });

  it('should pluralize "produit" when more than one product in cart', () => {
    expect(`produit${pluralize(2)}`).toMatch(/^produits$/);
  });
});
