import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
//const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY = "919dd7f3c63a4b8a840bc2844d91df8a";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza"); //This state use to change item we inter in inpur search bar.
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results); //It put all data result on array....setData function perform or put some change on foodData variable in
    }
    fetchFood();
  }, [query, API_KEY]);
  return (
    <div className={styles.SearchContaner}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
