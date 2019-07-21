import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ButtonIcon from '.';

function ButtonIconSetup(newProps = {}) {
  const props = {
    iconName: 'plus',
    iconAlign: 'right', 
    iconFloat: 'floated',
    iconColor: 'dark',
    enabled: true,
    bgColor: 'dark',
    onClick: jest.fn(),
    buttonStyle: '',
    onChangeQuantity: jest.fn()
  };

  const ButtonIconJSX = (
    <ButtonIcon {...{ ...props, ...newProps }} />
  );

  const ButtonIconComponent = mount(ButtonIconJSX);
  return {
    ButtonIconComponent,
    ButtonIconJSX,
    props
  };
}

describe('ButtonIcon', () => {
  it('renders correctly ButtonIcon component', () => {
    const { ButtonIconJSX } = ButtonIconSetup();
    const ButtonIconComponent = renderer.create(ButtonIconJSX).toJSON();
    expect(ButtonIconComponent).toMatchSnapshot();
  });
  it('onChangeQuantity handler should be call on plus button click', () => {
    const { ButtonIconComponent, props } = ButtonIconSetup();
    ButtonIconComponent.find('button').simulate('click');
    expect(props.onChangeQuantity).toHaveBeenCalled();
  });
});
