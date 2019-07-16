import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../constants/ActionTypes';
import { PRODUCTS_API_URL } from '../constants';

export const addToCart = productId => ({
  type: ADD_TO_CART,
  productId
});

export const removeFromCart = productId => ({
  type: REMOVE_FROM_CART,
  productId
});

export const addQuantity = productId => ({
  type: ADD_QUANTITY,
  productId
});

export function subQuantity(productId, quantity) {
    // eslint-disable-next-line func-names
    return function (dispatch) {
    dispatch({ type: SUB_QUANTITY, productId });
    if (quantity === 1) {
      dispatch({ type: REMOVE_FROM_CART, productId });
    }
  };
}

export function fetchProductsPending() {
  return {
      type: FETCH_PRODUCTS_PENDING
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products
};
}

export function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error
  };
}

export function getProductList() {
  // eslint-disable-next-line func-names
  return function (dispatch) {
      dispatch(fetchProductsPending());
      fetch(PRODUCTS_API_URL)
        .then(res => res.json())
        .then((res) => {
          if (res.error) {
            throw (res.error);
          }
          dispatch(fetchProductsSuccess(res.response[0].items));
        })
      .catch((error) => {
        dispatch(fetchProductsError(error));
      });
  };
}
