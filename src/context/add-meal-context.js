import React from "react";

const AddMealContext = React.createContext({
  totalPrice: null,
  isCartEmpty: true,
});

export default AddMealContext;
