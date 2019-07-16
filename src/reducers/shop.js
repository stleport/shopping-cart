import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../constants/ActionTypes';

const initialState = {
  products: [],
  cart: [],
  total: 0,
  pending: false,
  error: null
};

const shop = (state = initialState, action) => {
  const {
    productId,
    products
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
        products,
        pending: false
      };
    }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.error,
        pending: false
      };

    case ADD_TO_CART: {
      const addedItem = state.products.find(item => item.product.productId === productId);
      const existingItem = state.cart.find(item => item.productId === productId);
      if (!existingItem) {
        addedItem.product.quantity = 1;
        return {
          ...state,
          cart: [
            ...state.cart,
            addedItem.product,
          ],
          total: state.total + addedItem.product.price
        };
      }
      return {
        ...state,
        total: state.total + addedItem.price
      };
    }
    case REMOVE_FROM_CART: {
      const item = state.cart.find(e => e.productId === productId);
      const total = state.total - (item.price * item.quantity);
      return {
        ...state,
        cart: state.cart.filter(product => product.productId !== productId),
        total
      };
    }
    case ADD_QUANTITY: {
      const updated = state.cart.map((cartItem) => {
        if (cartItem.productId === action.productId) {
          // eslint-disable-next-line no-param-reassign
          cartItem.quantity += 1;
        }
        return cartItem;
      });
      const [item] = updated;
      return {
        ...state,
        ...{ cart: updated },
        total: state.total + item.price
      };
    }
    case SUB_QUANTITY: {
      const updated = state.cart.map((product) => {
        if (product.productId === action.productId) {
          // eslint-disable-next-line no-param-reassign
          if (product.quantity > 0) product.quantity -= 1;
        }
        return product;
      });
      const [item] = updated;
      return {
        ...state,
        ...{ cart: updated },
        total: state.total - item.price
      };
    }
    default:
      return state;
  }
};

export default shop;
