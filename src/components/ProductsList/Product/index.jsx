import { ToastContainer } from "react-toastify";

export const Product = ({ name, category, img, price, id, handleClick }) => {
  return (
    <div className="productCard">
      <div className="productImg">
        <img src={img} alt={name} />
      </div>
      <div className="productDescription">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>R$ {price}</span>

        <button
          className="addToCart"
          onClick={() => {
            handleClick(id);
          }}
          type="button"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};
