"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filterbar from "../Components/FilterSideBar";

function Result() {
  const searchParams = useSearchParams();
  const router: any = useRouter();
  const [searchCity, setSearchCity] = useState("");
  const [filterByCity, setFilterByCity] = useState(false);

  useEffect(() => {
    const cityName = searchParams.get("name");
    const searchType = searchParams.get("type");
    if (searchType === "city") {
      setFilterByCity(true);
      if (cityName) {
        setSearchCity(cityName);
      }
    }
  }, [searchParams]);

  return (
    <div className="mt-24 px-10">
      <div className="w-[270px] relative">
        <Filterbar />
      </div>
      <div className="max-h-[100vh] overflow-y-auto">
        
      </div>
    </div>
  );
}

export default Result;
