import shop from './shop';

describe('reducers', () => {
  const initialState = {
    products: [],
    cart: [],
    total: 0,
    pending: false,
    error: null
  };

  it('should provide the initial state', () => {
    expect(shop(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_PRODUCTS_PENDING action', () => {
    expect(shop({}, {
      type: 'FETCH_PRODUCTS_PENDING'
    })).toEqual({
      pending: true
    });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS action', () => {
    const products = [{
      product: {
        productId: 1
      }
    }];

    expect(shop({}, {
      type: 'FETCH_PRODUCTS_SUCCESS',
      products
    })).toEqual({
      products: [{
        product: {
          productId: 1
        }
      }],
      pending: false
    });
  });

  // it('should handle REMOVE_FROM_CART action', () => {
  //   const cartobj = [{
  //       productId: 1
  //   }];

  //   expect(shop(cartobj, {
  //     type: 'REMOVE_FROM_CART',
  //     productId: 2
  //   })).toBe(undefined);
  // });

  // it('should handle ADD_TO_CART action', () => {
  //   const state = {
  //     products: [{
  //       product: {
  //         productId: 2,
  //         price: 10
  //       }
  //     }],
  //     cart: [{
  //       productId: 1
  //     }]
  //   };

  //   expect(shop(state, {
  //     type: 'ADD_TO_CART',
  //     productId: 2
  //   })).toEqual({
  //     cart: [{
  //       productId: 1
  //     }, {
  //       productId: 2,
  //       quantity: 1
  //     }],
  //     total: 10
  //   });
  // });
});
