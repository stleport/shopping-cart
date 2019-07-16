import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '.';

function HeaderSetup(newProps = {}) {
  const props = {};

  const HeaderJSX = (
    <Router>
      <Header {...props} />
    </Router>
  );
  const HeaderComponent = shallow(HeaderJSX);
  return {
    props,
    newProps,
    HeaderJSX,
    HeaderComponent,
  };
}

describe('Header', () => {
  it('renders correctly Header component', () => {
    const { HeaderJSX } = HeaderSetup();
    const HeaderComponent = renderer.create(HeaderJSX).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  });
  
});
