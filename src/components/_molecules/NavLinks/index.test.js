import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { NavLinks } from '.';

function NavLinksSetup() {
  const props = {
    cart: [{
      productId: 2
    }]
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
    expect(NavLinksComponent.find('a[href="/cart"]').text()).toMatch(/1 produit/);
  });
});
