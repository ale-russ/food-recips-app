import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Axios from "axios";
import Recipe from "./Recipe";
import Alert from "./Alert";

const theme = {
  root: {
    backgroundColor: "#35c37d",
    fontSize: "1.3rem",
    borderRadius: 10,
    left: 5,
    "&:hover": {
      backgroundColor: "white",
      transition: "all .4s ease-in-out",
    },
  },
};

const Header = ({ classes }) => {
  // classes = styles();
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const edamamAppKey = "88d4aa83ec27f0f87fe2749783ffb47c";
  const edamamAppId = "4a1b0772";
  // api from  edamam.com
  const edamamUrl = `https://api.edamam.com/search?q=steak&app_id=${edamamAppId}&app_key=${edamamAppKey}`;

  // api from spoonacular.com
  // const url = `https://api.spoonacular.com/food/products/search?query=steak&apiKey=4cafe148021d48608cc84656da432514`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(edamamUrl);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className={classes.header}>
      <h1>Food Searching App</h1>
      <form className={classes.search__form} onSubmit={handleSubmit}>
        {alert !== "" && <Alert alert={alert} classes={classes} />}
        <input
          className={classes.search__formInput}
          type="text"
          placeholder="Search Food"
          // autoComplete="off"
          onChange={handleChange}
          value={query}
        />
        <Button
          variant="contained"
          className={classes.root}
          onSubmit={handleSubmit}
        >
          Search
        </Button>
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => (
            <Recipe key={uuidv4()} recipe={recipe} classes={classes} />
          ))}
      </div>
    </div>
  );
};

export default withStyles(theme)(Header);
