import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AddMealContext from "./context/add-meal-context";

function App() {
  const [price, setPrice] = useState(0);
  const [cartStatus, setCartStatus] = useState(true);

  const priceCallback = (mealPrice) => {
    setCartStatus(false);
    setPrice(mealPrice);
  };

  return (
    <AddMealContext.Provider
      value={{ totalPrice: price, isCartEmpty: cartStatus }}
    >
      <Header></Header>
      <Meals price={price} parentCallback={priceCallback}></Meals>
    </AddMealContext.Provider>
  );
}

export default App;
