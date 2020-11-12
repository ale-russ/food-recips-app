import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients, classes }) => {
  return ingredients.map((ingredient) => {
    return (
      <ul key={uuidv4()} className={classes.ingredient__list}>
        <li className={classes.ingredient__text}>{ingredient.text}</li>
        <li className={classes.ingredient__weight}>
          Weight - {ingredient.weight}
        </li>
      </ul>
    );
  });
};
export default RecipeDetails;
