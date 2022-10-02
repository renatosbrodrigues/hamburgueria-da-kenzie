import styled from "styled-components";

export const CartContainer = styled.div`
  width: 30%;

  height: 80vh;
  margin: 15px 15px 0 0;
  background-color: var(--gray-0);
  border-radius: var(--base-radius);

  h2 {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 10vh;
    background-color: var(--color-primary);
    color: white;
    font-size: var(--heading2-size);
    border-top-left-radius: var(--base-radius);
    border-top-right-radius: var(--base-radius);
  }

  .cartProductContainer {
    overflow-y: scroll;
    max-height: 80%;
    height: 100%;
  }

  .cartProduct {
    display: flex;
    align-items: center;
    margin: 10px 0 0 10px;
    gap: 25px;
  }

  .cartProductImg {
  }

  .cartProductImg img {
    width: 85px;
    height: 85px;
    background-color: var(--gray-20);
    border-radius: var(--base-radius);
  }

  .cartProductDescription {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cartProduct button {
    background: none;
    border: none;
    width: 25px;
    height: 25px;
    font-size: 20px;
  }

  .cartProduct button:hover {
    cursor: pointer;
    color: var(--negative);
  }

  .clearCartButton {
    width: 100px;
    height: 25px;
    background-color: var(--gray-20);
    border: 2px solid var(--gray-20);
    border-radius: var(--base-radius);
    color: var(--gray-50);
    cursor: pointer;
  }

  .clearCartButton:hover {
    color: var(--color-secondary);
  }
  .priceContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    font-size: 20px;
  }

  .priceContainer span {
    color: var(--gray-50);
  }

  @media screen and (max-width: 769px) {
    width: 90%;
    height: 50vh;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
`;
