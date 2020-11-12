import Axios from "axios";
import query from "./components/Header";
// import setQuery from "./components/Header";

const url = `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=4cafe148021d48608cc84656da432514`;

export const getData = async () => {
  const result = await Axios.get(url);

  console.log(result);
  // setQuery("");
};
