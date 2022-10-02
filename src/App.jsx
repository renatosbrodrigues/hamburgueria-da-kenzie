import { useEffect, useState } from "react";
import "./App.css";
import { Cart } from "./components/Cart";
import { CartContainer } from "./components/Cart/styles";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { ProductsContainer } from "./components/ProductsList/styles";
import GlobalStyles, { MainContainer } from "./styles/globalStyling.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())

      .then((res) => setProductsList(res));
  }, []);

  function notify() {
    toast.error("voce ja adicionou este item!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleCLick(id) {
    const found = currentSale.find((item) => item.id === id);

    if (found) {
      return notify();
    } else {
      let product = productsList.find((product) => product.id === id);

      setCartTotal([...cartTotal, product.price]);

      setCurrentSale([...currentSale, product]);
    }
  }

  function removeItem(name) {
    let filteredlist = currentSale.filter((product) => product.name !== name);

    setCurrentSale(filteredlist);

    let filteredPrices = filteredlist.map((product) => {
      return product.price;
    });

    setCartTotal(filteredPrices);
  }

  function handleSearch(name) {
    const filteredList = productsList.filter(
      (product) => product.name.toLowerCase() === name.toLowerCase()
    );

    setProductsList(filteredList);
  }

  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Header handleSearch={handleSearch}></Header>
      <MainContainer>
        <ProductsContainer>
          <ProductsList
            productsList={productsList}
            handleClick={handleCLick}
          ></ProductsList>
        </ProductsContainer>
        <CartContainer>
          <Cart
            currentSale={currentSale}
            cartTotal={cartTotal}
            setCurrentSale={setCurrentSale}
            removeItem={removeItem}
          ></Cart>
        </CartContainer>
      </MainContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </div>
  );
}

export default App;
