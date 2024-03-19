import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/User/root-reducer";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const dispatch = useDispatch();

  // criando um estado para o carrinho, a priore não mostre o carrinho.
  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    //usuario nao esta logado
    if (user === null) {
      dispatch({
        type: "user/login",
        payload: {
          name: "Daiane Ferreira",
          email: "daianefsilvadai.com",
        },
      });
    } else {
      dispatch({
        type: "user/logout",
      });
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {/* esta logado ? então coloca logout  senão tiver coloca login   */}
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          {/* Ao clicar no botao cartbutton quero abrir uma barra lateral para conseguir acessar as informações do carrinho  vou criar um novo componente para essa barra Cart*/}
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
