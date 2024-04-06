import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import "./app.css";
import Contaner from "./components/Contaner";
import InnerContaner from "./components/InnerContaner";
import FoodDetails from "./components/FoodDetails";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");
  return (
    <div>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Contaner>
        {/* Now Contaner is parent Component and inside contaner we create innercontaner
         as childern and inside innercontaner there is FoodList as innercontaner Children(also can say nested component) */}
        <InnerContaner>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContaner>
        <InnerContaner>
          <FoodDetails foodId={foodId} />
        </InnerContaner>
      </Contaner>
    </div>
  );
}
