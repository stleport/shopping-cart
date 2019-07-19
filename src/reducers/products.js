import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../constants/ActionTypes';

const initialState = {
  pending: false,
  products: []
};

const products = (state = initialState, action) => {
  const {
    payload
  } = action;
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        pending: false,
        products: payload.filter(e => e.product.productId)
      };
    }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
          error: action.error
      };
    default:
      return state;
  }
};

export default products;