import IngredentsItem from "./IngredentsItem";

export default function IngredentsList({ food, isLoding }) {
  return (
    <div>
      <h2>Ingredents</h2>
      {isLoding ? (
        <p> Lodding....</p>
      ) : (
        food.extendedIngredients.map((item) => <IngredentsItem item={item} />)
      )}
    </div>
  );
}
