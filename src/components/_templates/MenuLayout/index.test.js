import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MenuLayout from '.';

function MenuLayoutSetup() {
  const props = {
    children: '',
    footer: ''
  };

  const MenuLayoutJSX = (
    <MenuLayout {...props} />
  );

  const MenuLayoutComponent = shallow(MenuLayoutJSX);

  return {
    props,
    MenuLayoutJSX,
    MenuLayoutComponent,
  };
}

describe('MenuLayout', () => {
  it('renders correctly MenuLayout component', () => {
    const { MenuLayoutJSX } = MenuLayoutSetup();
    const MenuLayoutComponent = renderer.create(MenuLayoutJSX).toJSON();
    expect(MenuLayoutComponent).toMatchSnapshot();
  });
});
