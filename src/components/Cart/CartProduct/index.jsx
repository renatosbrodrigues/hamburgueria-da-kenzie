import { BsFillTrashFill } from "react-icons/bs";

export const CartProduct = ({ name, category, img, removeItem }) => {
  return (
    <div className="cartProduct">
      <div className="cartProductImg">
        <img src={img} alt={name} />
      </div>
      <div className="cartProductDescription">
        <h4>{name}</h4>
        <p>{category}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          removeItem(name);
        }}
      >
        <BsFillTrashFill></BsFillTrashFill>
      </button>
    </div>
  );
};
