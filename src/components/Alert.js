import React from "react";
// import { styles } from "../styles";

const Alert = ({ alert, classes }) => {
  // const classes = styles();

  return (
    <div className={classes.alert}>
      <h3>{alert}</h3>
    </div>
  );
};
export default Alert;
