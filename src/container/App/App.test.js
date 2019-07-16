import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ConnectedApp, { App } from './App';

function AppSetup(newProps = {}) {
  const mockStore = configureMockStore();
  const store = mockStore({});
  const props = {};

  const AppJSX = (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
  const AppComponent = shallow(AppJSX);
  return {
    props,
    newProps,
    AppComponent,
  };
}

it('renders correctly App component', () => {
  const { AppJSX } = AppSetup();
  const AppComponent = renderer.create(AppJSX).toJSON();
  expect(AppComponent).toMatchSnapshot();
});
