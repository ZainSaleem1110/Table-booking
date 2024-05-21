import React, { useEffect, useState } from "react";
import MultiSelect from "../MultiSelect";
import { styled } from "@mui/styles";
import { topRestaurants, occasions, FoodCategories, rating } from "@/Constant/constant";
import {
  Button,
  TextField,
  Autocomplete,
  Select,
  Checkbox,
  Typography,
  LinearProgress,
  Slider,
  Link,
  ToggleButtonGroup,
  Box,
} from "@mui/material";

interface RESTAURANTS_LIST {
  id?: number;
  name?: string;
  country?: string;
}

interface PropsTextField {
  customHeight?: string;
  customWidth?: string;
  theme: any;
  handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PropsCheckbox {
  theme: any;
  colorChecked?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const StyledSlider = styled(Slider)(
  ({ theme, thumbSize }: { theme: any; thumbSize?: number }) => {
    return {
      color: "#DBDBDB",
      "& .MuiSlider-track": {
        color: "#f9b500",
      },
      "& .MuiSlider-rail": {
        opacity: "1 !important",
      },
      "& .MuiSlider-thumb": {
        height: thumbSize || 20,
        width: thumbSize || 20,
        backgroundColor: "#fff",
      },
    };
  }
);

const StyledSliderReversed = styled(Slider)(
  ({ theme, thumbSize }: { theme: any; thumbSize?: number }) => {
    return {
      color: "#DBDBDB",
      opacity: "1 !important",
      "& .MuiSlider-track": {
        color: "#DBDBDB",
      },
      "& .MuiSlider-rail": {
        opacity: "1 !important",
      },
      "& .MuiSlider-thumb": {
        height: thumbSize || 20,
        width: thumbSize || 20,
        backgroundColor: "#fff",
      },
    };
  }
);

const StyledTextField = styled(TextField)(
  ({ customWidth, customHeight, theme }: PropsTextField) => {
    return {
      width: customWidth || "100%",
      marginBottom: "20px",
      "& .MuiInputBase-root": {
        height: customHeight || "50px",
        padding: "0 0 0 0",
        borderRadius: "5px",
      },
      "& .Mui-disabled": {
        backgroundColor: "#F4F4F4",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(229, 229, 229, 1)",
        },
      },
      "& input": {
        color: "black",
        fontSize: "16px",
        fontWeight: 400,
        padding: "0 0 0 15px",
        "&::placeholder": {
          color: "grey",
          opacity: 1,
          fontWeight: 400,
        },
      },
      "& input:disabled": {
        border: "none",
      },
      "& .MuiInputAdornment-positionStart": {
        margin: "0 0 0 20px",
      },
      "& .MuiInputAdornment-positionEnd": {
        margin: "0 16px 0 0",
      },
    };
  }
);

const StyledTextFieldSlider = styled(StyledTextField)(
  ({ width }: { width?: string }) => {
    return {
      marginBottom: "0",
      width: width || "100px",
      maxWidth: "100px",
      backgroundColor: "#F4F4F4",
      "& .MuiInputBase-root": {
        height: "50px",
      },
      "& .MuiInputAdornment-positionStart": {
        color: "#1D1D1B",
        margin: "0 0 0 13px",
      },
      "& input": {
        color: "#1D1D1B",
        fontSize: "16px",
        fontWeight: 400,
        padding: "0 0 0 5px",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "0",
        },
        "&:hover fieldset": {
          border: "0",
        },
        "&.Mui-focused fieldset": {
          border: "0",
        },
      },
    };
  }
);

const StyledCheckbox = styled(Checkbox)(
  ({ theme, colorChecked }: PropsCheckbox) => {
    return {
      color: "#999999",
      padding: "0",
      "&.Mui-checked": {
        // color: colorChecked || theme.palette.secondary.main,
      },
    };
  }
);

function Filterbar() {
  const [showNoFound, setShowNoFound] = useState(false);
  const [restaurantsList, setRestaurantsList] = useState<RESTAURANTS_LIST[]>([]);
  const [selectedRestaurants, setSelectedRestaurants] = useState<
    RESTAURANTS_LIST[]
  >([]);
  const [occasionsList, setOccasionsList] = useState<RESTAURANTS_LIST[]>([])
  const [cuisinesList, setCuisinesList] = useState<RESTAURANTS_LIST[]>([])
  const [ratingList, setRatingList] = useState<RESTAURANTS_LIST[]>([])
  const [valueCost, setValueCost] = React.useState<number[]>([1000, 5000]);
  const [selectedOccasions, setSelectedOccasions] = useState([])
  const [selectedCuisines, setSelectedCuisines] = useState([])
  const [selectedRatings, setSelectedRatings] = useState([])

  const handleSelectedRestaurants = (selectedRestaurant: []) => {
    setSelectedRestaurants(
      selectedRestaurant && selectedRestaurant.length > 0
        ? selectedRestaurant
        : []
    );
  };

  const handleSelectedOccasions = (selectedOccasion: []) => {
    setSelectedOccasions(
      selectedOccasion && selectedOccasion.length > 0
        ? selectedOccasion
        : []
    );
  };

  const handleSelectedCuisines = (selectedCuisine: []) => {
    setSelectedCuisines(
      selectedCuisine && selectedCuisine.length > 0
        ? selectedCuisine
        : []
    );
  };

  const handleSelectedRating = (selectedRating: []) => {
    setSelectedRatings(
      selectedRating && selectedRating.length > 0
        ? selectedRating
        : []
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

  useEffect(()=>{
    if (FoodCategories && FoodCategories.length > 0) {
      const newArray = FoodCategories?.map((cuisines: any, index: any) => ({
        name: cuisines?.name,
        checked: false,
        id: cuisines?.id,
      }));
      setCuisinesList(newArray);
    }
  },[FoodCategories])

  useEffect(()=>{
    if (rating && rating.length > 0) {
      const newArray = rating?.map((rating: any, index: any) => ({
        name: rating?.name,
        checked: false,
        id: rating?.id,
      }));
      setRatingList(newArray);
    }
  },[rating])

  const handlerCost = (event: Event, newValue: number | number[]) => {
    setValueCost(newValue as number[]);
  };

  return (
    <div className="sticky top-[15%] left-0 w-[100%] z-10">
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
        <Box p="10px" mb="23px" className="mt-4">
          <Box mb="15px">
            <Typography variant="h6" mb="10px" className="font-bold text-[18px]">
              Budget
            </Typography>
            <StyledSlider
              className="changeHeightWidth"
              onChange={handlerCost}
              value={valueCost}
              min={0}
              max={40000}
            />
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mb={0}
                className="customNumbersShow"
                alignItems="center"
              >
                <StyledTextFieldSlider
                  value={valueCost[0]}
                  className="changeWidth"
                />
                <p className="flexPara">
                  <Typography>
                    $ {valueCost[0].toLocaleString("en-US")}
                  </Typography>
                  <Typography color="grey.500" variant="body1">
                    to
                  </Typography>
                  <Typography>
                    $ {valueCost[1]?.toLocaleString("en-US")}
                  </Typography>
                </p>
                <StyledTextFieldSlider
                  className="changeWidth"
                  value={valueCost[1]}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Filterbar;
