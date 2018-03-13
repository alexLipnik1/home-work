import { mystoreConstants } from '../_constants';


export function mysore(state = [], action) {
  switch (action.type) {
    case mystoreConstants.SET_PRODUCTS:
        return action.products;
    case mystoreConstants.ADD_PRODUCT:
        return [...state, action.product];
    case mystoreConstants.UPDATE_PRODUCT:
        return [
            ...state.slice(0, action.productId),
            action.product,
            ...state.slice(action.productId + 1), 
        ];
    case mystoreConstants.REMOVE_PRODUCT:
        return [
            ...state.slice(0, action.productId),
            ...state.slice(action.productId + 1), 
        ];
    default:
      return state;
  }
}