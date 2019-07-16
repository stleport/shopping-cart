import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '.';

function FooterSetup() {
  const props = {
    description: 'Description',
    quantity: 1
  };

  const FooterJSX = (
    <Footer {...props} />
  );

  const FooterComponent = shallow(FooterJSX);
  return {
    FooterComponent,
    FooterJSX,
    props
  };
}

describe('Footer', () => {

  it('renders correctly Footer component', () => {
    const { FooterJSX } = FooterSetup();
    const FooterComponent = renderer.create(FooterJSX).toJSON();
    expect(FooterComponent).toMatchSnapshot();
  });
});
