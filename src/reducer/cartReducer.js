const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.cartList };
    case "UPDATE_TOTAL":
      return {
       ...state,
        cartList: state.cartList,
        total: payload.total,
      };
    case "EMPTY_CART":
      return { ...state, cartList: [], total: 0 };
    default:
      throw new Error("No case found for type: " + type);
  }
};

export default cartReducer;
