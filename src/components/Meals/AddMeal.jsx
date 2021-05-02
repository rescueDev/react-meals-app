import classes from "./AddButton.module.css";
import React, { Fragment } from "react";

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
