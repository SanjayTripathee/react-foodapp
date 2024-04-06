import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoding, setIsLoding] = useState(true);
  const URL = ` https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "919dd7f3c63a4b8a840bc2844d91df8a";
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
      <div className={styles.recipeCard}>
        <h1 className={styles.recepiName}> {food.title}</h1>
        <img className={styles.recepiImage} src={food.image} />
        <div className={styles.recepiDetails}>
          <span>
            <b>⏱{food.readyInMinutes}Min</b>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🍎Vegeterian" : "🍖Non-Vegetern"}
            </strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{food.pricePerServing / 100} Per serving</strong>
          </span>
        </div>

        <h2>Instruction</h2>
        <div className={styles.recepiInstruction}>
          <ol>
            {isLoding ? (
              <p>Lodding....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((steeep) => (
                <li>{steeep.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
