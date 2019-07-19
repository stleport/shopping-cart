import {
  ADD_TO_CART,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
} from '../constants/ActionTypes';

const initialState = {
  items: [],
  total: 0
};

const cart = (state = initialState, action) => {
  const {
    productId
  } = action;
  switch (action.type) {
    case ADD_TO_CART: {
      const inCart = state.items.find(e => e.productId === productId);
      if (!inCart) {
        return {
          ...state,
          items: [
            ...state.items,
            {
              productId,
              quantity: 1
            }
          ]
        };
      }
      return {
        ...state,
        items: [...state.items.map(item => (
          item.productId === productId ? {
            ...item,
            quantity: item.quantity + 1
          } : item
        ))]
      };
    }

    case SUB_QUANTITY: {
      return {
        ...state,
        items: [...state.items.map(item => (
          item.productId === productId ? {
            ...item,
            quantity: item.quantity - 1
          } : item
        ))]
      };
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter(item => item.productId !== productId)
      };
    }

    default:
      return state;
  }
};

export default cart;
