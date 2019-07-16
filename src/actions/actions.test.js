import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './index';
import * as types from '../constants/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('addToCart should create ADD_TO_CART action', () => {
    expect(actions.addToCart(2)).toEqual(
      {
        type: types.ADD_TO_CART,
        productId: 2
      }
    );
  });

  it('removeFromCart should create REMOVE_FROM_CART action', () => {
    expect(actions.removeFromCart(2)).toEqual(
      {
        type: types.REMOVE_FROM_CART,
        productId: 2
      }
    );
  });

  it('addQuantity should create ADD_QUANTITY action', () => {
    expect(actions.addQuantity(2)).toEqual(
      {
        type: types.ADD_QUANTITY,
        productId: 2
      }
    );
  });

  // it('creates FETCH_PRODUCTS_SUCCESS when fetching products has been done', () => {
  //   fetchMock.getOnce('https://api.myjson.com/bins/nn7lt', {
  //     body: {
  //       products: [{
  //         product: {
  //           productId: 1
  //         }
  //       }]
  //     },
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });

  //   const expectedActions = [{
  //       type: types.FETCH_PRODUCTS_PENDING
  //     },
  //     {
  //       type: types.FETCH_PRODUCTS_SUCCESS,
  //       body: {
  //         products: [{
  //           product: {
  //             productId: 1
  //           }
  //         }]
  //       }
  //     }
  //   ];
  //   const store = mockStore({
  //     products: []
  //   });

  //   return store.dispatch(actions.fetchProductsPending()).then(() => {
  //     // return of async actions
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});
