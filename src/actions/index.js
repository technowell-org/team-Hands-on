export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

export const addWithQuantity = (id, quant) => {
  return {
    type: "ADD_WITH_QUANTITY",
    id: id,
    quantity: quant,
  };
};

export const minusQuant = (index) => {
  return {
    type: "MINUS_QUANTITY",
    payload: index,
  };
};

export const plusQuant = (index) => {
  return {
    type: "PLUS_QUANTITY",
    payload: index,
  };
};

export const cancelItem = (index) => {
  return {
    type: "CANCEL_ITEM",
    payload: index,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
