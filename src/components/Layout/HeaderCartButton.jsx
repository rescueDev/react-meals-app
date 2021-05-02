import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import AddMealContext from "../../context/add-meal-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(AddMealContext);
  console.log(ctx.isCartEmpty);
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {!ctx.isCartEmpty ? (
        <span className={classes.badge}>{ctx.totalPrice}</span>
      ) : (
        ""
      )}
    </button>
  );
};

export default HeaderCartButton;
