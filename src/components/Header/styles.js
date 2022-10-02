import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  max-width: 100%;
  height: 15vh;
  background-color: var(--gray-0);
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 15px;
  }

  .search__container {
    width: 250px;
    height: 50%;
    position: relative;
    margin-right: 15px;
    display: flex;
  }

  input {
    width: 100%;
    height: 75%;
    border: 2px solid var(--gray-20);
    border-radius: var(--base-radius);
    color: var(--gray-20);
    color: rgba(0, 0, 0, 0.25);
  }

  input:focus {
    outline: 1px solid var(--gray-100);
  }

  button {
    position: absolute;
    top: 5.5px;
    right: 5px;
    height: 50%;
    border-radius: var(--base-radius);
    border: none;
    width: 30%;
    font-family: "Inter", sans-serif;
    background-color: var(--color-primary);
    color: var(--gray-0);
  }

  button:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .search__container {
      width: 90vw;
    }

    img {
      margin: 0;
    }
  }
`;
