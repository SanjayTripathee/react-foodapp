import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoding, setIsLoding] = useState(true);
  const URL = ` https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "54f1ccbf21df4f348a6a076045358f1c";
  useEffect(() => {
    async function fetchFood() {
      let response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoding(false);
    }
    fetchFood();
  }, [foodId]); //Now when foodid change then this useEffect will fetch that id and display in food state
  return (
    <div>
      <div>
        <h3> {food.title}</h3>
        <img src={food.image} />
      </div>
      <span>
        <b>⏱{food.readyInMinutes}Min</b>
      </span>
      <span>{food.vegetarian ? "🍎Vegeterian" : "🍖Non-Vegetern"}</span>
      <div>
        <span>💲{food.pricePerServing / 100} Per serving</span>
      </div>
      <div>
        <h2>Instruction</h2>
        {isLoding ? (
          <p>Lodding....</p>
        ) : (
          food.analyzedInstructions[0].steps.map((steeep) => (
            <li>{steeep.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
