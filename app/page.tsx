'use client'
import Navbar from "./Components/Navbar";
import Cities from "./Components/Cities";
import FoodCategoriesSlider from "./Components/Sliders/FoodCategories";
import Destinations from "./Components/Destinations";
import Restaurants from "./Components/Sliders/Restaurants";
import Subscription from "./Components/Subscription";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="xl:w-[60%] md:w-[80%] w-[100%] mb-20">
        <Cities />
        <Restaurants />
        <FoodCategoriesSlider />
      </div>
      <Subscription />
      <Destinations />
      <Footer/>
    </div>
  );
}
