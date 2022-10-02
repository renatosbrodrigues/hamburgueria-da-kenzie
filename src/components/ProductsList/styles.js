import styled from "styled-components";

export const ProductsContainer = styled.div`
  margin-top: 15px;
  max-width: 55%;
  width: 65%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .productCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 2px solid var(--gray-20);
    border-radius: var(--base-radius);
    width: 300px;
    height: 350px;
  }

  .productImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    width: 100%;
    max-height: 40%;
    height: 100%;
    background-color: var(--gray-0);
  }

  .productDescription {
    max-width: 100%;
    width: 100%;
    max-height: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
  }

  .productDescription h3 {
    font-size: var(--heading3-size);
    font-weight: var(--heading-weight);
  }

  .addToCart {
    max-width: 40%;
    width: 100%;
    max-height: 30px;
    height: 100%;
    border: none;
    border-radius: var(--base-radius);
    background-color: var(--color-primary);
    color: white;
    cursor: pointer;
  }
  .productDescription button:hover {
    filter: brightness(0.9);
  }

  @media screen and (max-width: 769px) {
    display: flex;
    justify-content: flex-start;
    max-width: 100%;
    width: 100vw;
    height: 300px;
    overflow-x: scroll;
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  .productDescription button {
    max-width: 90%;
  }

  .productCard {
    width: 200px;
    height: 250px;
  }

  .productImg img {
    width: 125px;
    height: 125px;
  }
`;
