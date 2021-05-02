import classes from "./AddButton.module.css";
import React from "react";

const AddButton = (props) => {
  return (
    <div>
      <button className={classes.btn}>+ADD</button>
    </div>
  );
};

export default AddButton;
