import { CartProduct } from "./CartProduct";

export const Cart = ({ currentSale, cartTotal, removeItem, clearCart }) => {
  let totalPrice = cartTotal.reduce((prev, price) => prev + price, 0);
  return (
    <>
      <h2>Carrinho de Compras</h2>

      <div className="cartProductContainer">
        {currentSale.length > 0 ? (
          currentSale.map((product) => {
            return (
              <div className="cartProduct">
                <CartProduct
                  name={product.name}
                  category={product.category}
                  img={product.img}
                  key={product.id}
                  id={product.name}
                  removeItem={removeItem}
                ></CartProduct>
              </div>
            );
          })
        ) : (
          <>
            <h4>voce ainda nao adicionou nada!</h4>
          </>
        )}
      </div>

      <div className="priceContainer">
        <p>Total</p>
        <span>R$ {Number(totalPrice).toFixed(2)}</span>

        <button
          type="button"
          onClick={() => {
            clearCart();
          }}
          className="clearCartButton"
        >
          Remover Todos
        </button>
      </div>
    </>
  );
};
