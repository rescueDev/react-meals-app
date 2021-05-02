import classes from "./Meals.module.css";
import React, { Fragment } from "react";
import meals from "../../data/meals";
import AddMeal from "./AddMeal";

const Meals = (props) => {
  //adding meal
  const addMeal = (meal) => {
    props.parentCallback(meal.price + props.price);
  };

  return (
    <Fragment>
      {meals.map((meal) => {
        return (
          <div key={meal.id} className={classes.mealcontainer}>
            <div className={classes.singlemeal}>
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>
              <h4 className={classes.price}>{meal.price} $</h4>
            </div>
            <div className={classes.add}>
              <AddMeal onAddMeal={() => addMeal(meal)}></AddMeal>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default Meals;
