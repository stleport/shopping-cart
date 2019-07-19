import cart from './cart';

describe('reducers', () => {
  let initialState = {
    items: [],
    total: 0
  };
  it('should provide the initial state', () => {
    expect(cart(undefined, {})).toEqual(initialState);
  });

  it('should handle REMOVE_FROM_CART action', () => {
    initialState = {
      items: [{
        productId: 2,
        title: 'Title'
      }]
    };

    expect(cart(initialState, {
      type: 'REMOVE_FROM_CART',
      productId: 2
    })).toEqual({
      items: []
    });
  });

  it('should handle ADD_TO_CART action', () => {
    initialState = {
      items: [{
        productId: 1
      }]
    };

    expect(cart(initialState, {
      type: 'ADD_TO_CART',
      productId: 2
    })).toEqual({
      items: [{
        productId: 1
      }, {
        productId: 2,
        quantity: 1
      }]
    });
  });
});