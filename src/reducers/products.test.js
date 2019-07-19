import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';
import products from './products';
import { PRODUCTS_API_URL } from '../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Initial state', () => {
  const initialState = {
    products: [],
    pending: false
  };

  it('should provide the initial state', () => {
    expect(products(undefined, {})).toEqual(initialState);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_PRODUCTS_SUCCESS when fetching products has been done', () => {
    fetchMock.getOnce(PRODUCTS_API_URL, {
      body: {
        response: [{
          banner: {},
          items: [{
            product: {
              productId: 1,
              title: 'Title'
            }
          }]
        }]
      },
      headers: {
        'content-type': 'application/json'
      }
    });

    const expectedActions = [{
        type: types.FETCH_PRODUCTS_PENDING
      },
      {
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: [{
          product: {
            productId: 1,
            title: 'Title'
          }
        }]
      }
    ];
    const store = mockStore({
      products: [{
        product: {
          productId: 1,
          title: 'Title'
        }
      }]
    });

    return store.dispatch(actions.getProductList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});