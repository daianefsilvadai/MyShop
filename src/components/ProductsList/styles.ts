import { styled } from "styled-components";

export const Container = styled.main`
  max-width: 1240px;
  margin: 4rem auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap; //quebra para elemento ir pra baixo
  gap: 2rem;

  //isso é do CSS. Uso o & comercial pra fazer referencia ao Container, nesse mesmo elemento que estou etilizando logo depois dele um nivel abaixo dele é pra aplicar esse estilo:  esse flex 1 faz o item extender o maximo, mas no minimo 300px de largura, se ficar menos quebre o elemento.
  & > * {
    flex: 1 300px;
  }
`;
