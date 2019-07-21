import * as actions from './index';
import * as types from '../constants/ActionTypes';

describe('sync actions', () => {

  it('addToCart should create ADD_TO_CART action', () => {
    expect(actions.addToCart(2)).toEqual({
      type: types.ADD_TO_CART,
      productId: 2
    });
  });

  it('removeFromCart should create REMOVE_FROM_CART action', () => {
    expect(actions.removeFromCart(2)).toEqual({
      type: types.REMOVE_FROM_CART,
      productId: 2
    });
  });
});
