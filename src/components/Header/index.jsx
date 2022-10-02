import { HeaderContainer } from "./styles";
import logo from "../../assets/BurgerKenzieLogo.png";
import { useState } from "react";

export const Header = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState();
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div className="search__container">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          placeholder="Digitar pesquisa"
        />

        <button
          type="button"
          onClick={() => {
            handleSearch(inputValue);
          }}
        >
          pesquisar
        </button>
      </div>
    </HeaderContainer>
  );
};
