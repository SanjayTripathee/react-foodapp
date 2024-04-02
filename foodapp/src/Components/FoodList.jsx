export default function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <h1>{food.image}</h1>
      ))}
    </div>
  );
}
