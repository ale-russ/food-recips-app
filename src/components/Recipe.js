import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import RecipeDetails from "./RecipeDetails";

const theme = {
  root: {
    backgroundColor: "#35c37d",
    fontSize: "1.3rem",
    borderRadius: 10,
    left: 5,
    "&:hover": {
      backgroundColor: "white",
      transition: "all .2s ease-in-out",
    },
  },
};

const Recipe = ({ recipe, classes }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className={classes.recipe}>
      <h2>{label}</h2>
      <img src={image} alt="label" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <Button
        variant="contained"
        className={classes.root}
        onClick={() => setShow(!show)}
      >
        Ingredients
      </Button>
      {show && <RecipeDetails ingredients={ingredients} classes={classes} />}
    </div>
  );
};

export default withStyles(theme)(Recipe);
