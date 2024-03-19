import { Product } from "../../data/products";
// vai lidar com as ections de adicionar,remover, limpar produtos
// estado do carrinho, guardo o array do produto que criei no products
interface CartState {
  cart: Product[];
}

// iniciando o carrinho, todo estado é um objeto que vai seguir a tipagem do cart que é arrayu produto, onde esta vazio o carrinho
const initialState: CartState = {
  cart: [],
};

interface CartAction {
  type: string;
  payload: Product;
}

export function cartReducer(state = initialState, action: CartAction) {
  switch (action.type) {
    case "cart/add-product":
      return {
        ...state,
        cart: [...state.cart, action.payload], //payload:produto que se deseja adicionar ao carrinho
      };
    case "cart/remove-product":
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      return {
        ...state,
        cart: cartFiltered,
      };
    default:
      return state;
  }
}
