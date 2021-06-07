const Addreducer = (items = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (items.length === 0) {
        let cartItemT = [];
        cartItemT.push({ id: action.payload, quantity: 1 });
        return cartItemT;
      } else {
        let i;
        let tem = 0; // no item
        for (i = 0; i < items.length; i++) {
          let val = items[i];
          if (action.payload === val.id) {
            tem = 1;
            let cartItemT1 = [...items];
            cartItemT1.splice(i, 1, {
              id: action.payload,
              quantity: val.quantity + 1,
            });
            return cartItemT1;
          }
        }
        if (tem === 0) {
          let cartItemT2 = [...items];
          cartItemT2.push({ id: action.payload, quantity: 1 });
          return cartItemT2;
        }
      }
      break;
    case "ADD_WITH_QUANTITY":
      if (items.length === 0) {
        let cartItemT = [];
        cartItemT.push({ id: action.id, quantity: action.quantity });
        return cartItemT;
      } else {
        let i;
        let tem = 0; // no item
        for (i = 0; i < items.length; i++) {
          let val = items[i];
          if (action.id === val.id) {
            tem = 1;
            let cartItemT1 = [...items];
            cartItemT1.splice(i, 1, {
              id: action.id,
              quantity: val.quantity + action.quantity,
            });
            return cartItemT1;
          }
        }
        if (tem === 0) {
          let cartItemT2 = [...items];
          cartItemT2.push({ id: action.id, quantity: action.quantity });
          return cartItemT2;
        }
        break;
      }
    case "MINUS_QUANTITY":
      let cartItemT4 = [...items];

      if (cartItemT4[action.payload].quantity > 1) {
        cartItemT4[action.payload].quantity =
          cartItemT4[action.payload].quantity - 1;
        return cartItemT4;
      } else {
        cartItemT4[action.payload].quantity = 1;
        return cartItemT4;
      }

    case "PLUS_QUANTITY":
      let cartItemT5 = [...items];
      cartItemT5[action.payload].quantity =
        cartItemT5[action.payload].quantity + 1;
      return cartItemT5;

    case "CANCEL_ITEM":
      let cartItemT3 = [...items];
      cartItemT3.splice(action.payload, 1);
      return cartItemT3;

    case "CLEAR_CART":
      return [];

    default:
      return items;
  }
};
export default Addreducer;
