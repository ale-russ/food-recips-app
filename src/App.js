import React from "react";
import "./App.css";
import { styles } from "./styles";
import { getData } from "./axios";
import Header from "./components/Header";

function App() {
  getData();

  const classes = styles();
  return (
    <div className={classes.app}>
      <Header classes={classes} />
    </div>
  );
}
export default App;
