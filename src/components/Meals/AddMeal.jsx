import classes from "./AddButton.module.css";
import React, { Fragment } from "react";
import AddButton from "../UI/AddButton";

const AddMeal = (props) => {
  return (
    <Fragment>
      <button className={classes.btn} onClick={props.onAddMeal}>
        +ADD
      </button>
    </Fragment>
  );
};

export default AddMeal;
