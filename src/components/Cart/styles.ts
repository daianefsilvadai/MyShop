import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}
export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};

  width: 350px;
  height: 100vh;
  background-color: white;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.5;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  display: flex;
  padding: 2rem 0;
  list-style: none;
  flex-direction: column;
  gap: 1rem;
  display: flex;
`;

export const CartProductItem = styled.li``;

export const CartItens = styled.h3`
  font-style: italic;
`;

export const CartTotal = styled.h3``;

export const ImgCartRemove = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 15%;
  background-color: violet;
  margin-left: 1rem;
  svg {
    font-size: 1rem;
  }
`;
