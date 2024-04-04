import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./app.css";
import Contaner from "./components/Contaner";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Contaner>
        {/* Now Contaner is parent Component and FoodList is Children */}
        <FoodList foodData={foodData} />
      </Contaner>
    </div>
  );
}
