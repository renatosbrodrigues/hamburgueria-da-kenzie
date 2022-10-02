import { Product } from "./Product";

export const ProductsList = ({ productsList, handleClick }) => {
  return (
    <>
      {productsList.map((product) => {
        return (
          <Product
            name={product.name}
            category={product.category}
            img={product.img}
            price={product.price}
            key={product.id}
            id={product.id}
            handleClick={handleClick}
          ></Product>
        );
      })}
    </>
  );
};
