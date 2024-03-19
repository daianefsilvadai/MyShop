import { useDispatch, useSelector } from "react-redux";
import { TfiShoppingCartFull } from "react-icons/tfi";
import * as S from "./styles";
import { RootReducer, rootReducer } from "../../redux/User/root-reducer";

interface CartProps {
  showCart: boolean;
}
export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <S.CartItens>{product.title}</S.CartItens>${product.price}
            <S.ImgCartRemove
              title="Remover do carrinho"
              onClick={() =>
                dispatch({ type: "cart/remove-product", payload: product })
              }
            >
              <TfiShoppingCartFull></TfiShoppingCartFull>
            </S.ImgCartRemove>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal>Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
