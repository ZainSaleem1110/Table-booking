import React, { useEffect, useState } from "react";
import {
  topRestaurants,
  occasions,
  FoodCategories,
  rating,
} from "@/Constant/constant";
import MultiSelect from "../MultiSelect";

interface RESTAURANTS_LIST {
  id?: number;
  name?: string;
  country?: string;
}

function Filterbar() {
  const [showNoFound, setShowNoFound] = useState(false);
  const [restaurantsList, setRestaurantsList] = useState<RESTAURANTS_LIST[]>(
    []
  );
  const [selectedRestaurants, setSelectedRestaurants] = useState<
    RESTAURANTS_LIST[]
  >([]);
  const [occasionsList, setOccasionsList] = useState<RESTAURANTS_LIST[]>([]);
  const [cuisinesList, setCuisinesList] = useState<RESTAURANTS_LIST[]>([]);
  const [ratingList, setRatingList] = useState<RESTAURANTS_LIST[]>([]);
  const [valueCost, setValueCost] = React.useState<number[]>([1000, 5000]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleSelectedRestaurants = (selectedRestaurant: []) => {
    setSelectedRestaurants(
      selectedRestaurant && selectedRestaurant.length > 0
        ? selectedRestaurant
        : []
    );
  };

  const handleSelectedOccasions = (selectedOccasion: []) => {
    setSelectedOccasions(
      selectedOccasion && selectedOccasion.length > 0 ? selectedOccasion : []
    );
  };

  const handleSelectedCuisines = (selectedCuisine: []) => {
    setSelectedCuisines(
      selectedCuisine && selectedCuisine.length > 0 ? selectedCuisine : []
    );
  };

  const handleSelectedRating = (selectedRating: []) => {
    setSelectedRatings(
      selectedRating && selectedRating.length > 0 ? selectedRating : []
    );
  };

  useEffect(() => {
    if (topRestaurants && topRestaurants.length > 0) {
      const newArray = topRestaurants?.map((restaurant: any, index: any) => ({
        name: restaurant?.name,
        checked: false,
        id: restaurant?.id,
      }));
      setRestaurantsList(newArray);
    }
  }, [topRestaurants]);

  useEffect(() => {
    if (occasions && occasions.length > 0) {
      const newArray = occasions?.map((occasion: any, index: any) => ({
        name: occasion?.name,
        checked: false,
        id: occasion?.id,
      }));
      setOccasionsList(newArray);
    }
  }, [occasions]);

  useEffect(() => {
    if (FoodCategories && FoodCategories.length > 0) {
      const newArray = FoodCategories?.map((cuisines: any, index: any) => ({
        name: cuisines?.name,
        checked: false,
        id: cuisines?.id,
      }));
      setCuisinesList(newArray);
    }
  }, [FoodCategories]);

  useEffect(() => {
    if (rating && rating.length > 0) {
      const newArray = rating?.map((rating: any, index: any) => ({
        name: rating?.name,
        checked: false,
        id: rating?.id,
      }));
      setRatingList(newArray);
    }
  }, [rating]);

  return (
    <div className="w-[300px] z-10">
      <div className="bg-white flex justify-between items-center px-3 py-2 rounded-md shadow-md">
        <span className="font-bold">Filter Results:</span>
        <button
          className="text-[#003b95] font-semibold"
          onClick={() => {
            setShowNoFound(true);
          }}
        >
          Clear All
        </button>
      </div>
      <div className="bg-white px-3 py-2 rounded-md shadow-md mt-5 min-h-[60vh]">
        <MultiSelect
          title="Restaurants"
          categories={restaurantsList}
          onChange={handleSelectedRestaurants}
          clearData={showNoFound}
        />
        <MultiSelect
          title="Cuisines"
          categories={cuisinesList}
          onChange={handleSelectedCuisines}
          clearData={showNoFound}
        />
        <MultiSelect
          title="Occasions"
          categories={occasionsList}
          onChange={handleSelectedOccasions}
          clearData={showNoFound}
        />
        <MultiSelect
          title="Rating"
          categories={ratingList}
          onChange={handleSelectedRating}
          clearData={showNoFound}
        />
        <div>
          <h2 className="px-2 mt-5 font-bold text-[14px]">Budget</h2>
          <input
            type="range"
            min="1"
            max="100"
            className="priceSlider mt-3 ml-2"
          />
          <div className="mt-3 mx-2 flex items-center justify-between w-[90%]">
            <div className="bg-[#eee] w-[80px] px-2 flex items-center">
              <span>$</span>
              <input
                type="number"
                className="w-[100%] bg-[transparent] outline-none border-none"
              />
            </div>
            <span className="text-gray-500">to</span>
            <div className="bg-[#eee] w-[80px] px-2 flex items-center">
              <span>$</span>
              <input
                type="number"
                className="w-[100%] bg-[transparent] outline-none border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filterbar;
