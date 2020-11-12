//import React from "react";
import { createUseStyles } from "react-jss";

export const styles = createUseStyles({
  header: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    "& h1": {
      position: "relative",
      fontSize: "4rem",
      letterSpacing: "0.1rem",
      fontStyle: "italic",
      color: "#40b48e",
      textShadow: "0rem 0.2rem 3rem rgb(119, 107, 115)",
      textTransform: "uppercase",
      margin: "4rem 0",
      "@media (min-width: < 760px)": {
        width: "8.33%",
        //fontSize: "2rem",
      },
    },
  },

  search__form: {
    width: "60rem",
    height: "10rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d3d3d3",
    borderRadius: "0.5rem",
    marginBottom: "5rem",
    boxShadow: {
      x: "1rem",
      y: "2rem",
      blur: "5rem",
      color: "#aaa",
    },
    position: "relative",

    // "& input": {
    //   fontSize: "1.6rem",
    //   border: 0,
    //   borderBottom: "0.1rem solid #ccc",
    //   margin: "0rem 0.5rem",
    //   borderRadius: "0.5rem",
    //   height: "3rem",
    //   outline: "none",
    // },

    "& MuiButton-root:hover": {
      color: "#40b49e",
    },
  },

  search__formInput: {
    padding: "0 0.5rem",
    width: "60%",
    color: "#555",
    fontSize: "1.6rem",
    border: 0,
    borderBottom: "0.1rem solid #ccc",
    margin: "0rem 0.5rem",
    borderRadius: "0.5rem",
    height: "3rem",
    outline: "none",
    // "&:hover": {
    //   border: "solid white",
    //   outline: "none",
    // },
  },

  search__formSubmit: {
    width: "25%",
    textTransform: "uppercase",
    backgroundColor: "#40b48e",
    color: "#fff",
  },

  alert: {
    position: "absolute",
    top: "-3rem",
    left: "0",
    backgroundColor: "rgb(233, 72, 72)",
    width: "calc(100% - 0.4rem)",
    borderRadius: "0.5rem",
    padding: "0.2rem",
    "& h3": {
      fontSize: "1.8rem",
      color: "#fff",
      fontWeight: 400,
      textTransform: "uppercase",
      textAlign: "center",
    },
  },

  recipes: {
    width: "90%",
    display: "flex",
    // alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  recipe: {
    width: "30rem",
    margin: "3rem",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#d3d3d3",
    padding: "2rem",
    position: "relative",
    borderRadius: "0.5rem",
    boxShadow: "2rem 3rem 5rem #aaa",
    "& h2": {
      backgroundColor: "rgba(161,161,161, 0.7)",
      borderRadius: "0.5rem",
      padding: "0.3rem, 0.5rem",
      position: "absolute",
      top: "2.5rem",
      left: "2.5rem",
      right: "2.5",
      fontSize: "2.5rem",
      fontWeight: 400,
      textShadow: "0 0.5rem 0.5rem #555",
      color: "#fff",
    },
    "& img": {
      borderRadius: "1.8rem",
      objectFit: "cover",
    },

    "& a": {
      fontSize: "1.8rem",
      color: "#40b48e",
    },

    "& MuiButton-root": {
      fontSize: "2rem",
      textTransform: "uppercase",
      color: "#fff",
      backgroundColor: "#40b48e",
      border: "none",
      borderRadius: "0.5rem",
      height: "3rem",
    },
  },

  ingredient__list: {
    "& li": {
      margin: "0.5rem",
    },
  },

  ingredient__text: {
    fontSize: "1.5rem",
    color: "#888",
  },

  ingredient__weight: {
    color: "40b48e",
    fontSize: "1.3rem",
  },
});
