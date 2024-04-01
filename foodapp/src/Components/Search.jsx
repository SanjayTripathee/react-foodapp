import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "ee61b00570c84c748284a6e34a6bb798";

export default function Search() {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    function fetchFood() {}
  }, [query]);
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
