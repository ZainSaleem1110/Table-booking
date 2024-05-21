'use client'
import Cities from "./Components/Cities";
import FoodCategoriesSlider from "./Components/Sliders/FoodCategories";
import Destinations from "./Components/Destinations";
import Restaurants from "./Components/Sliders/Restaurants";
import Subscription from "./Components/Subscription";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-[100%] overflow-x-hidden">
      <div className="xl:w-[60%] lg:w-[80%] w-[90%] mb-20">
        <Cities />
        <Restaurants />
        <FoodCategoriesSlider />
      </div>
      <Subscription />
      <Destinations />
    </div>
  );
}
