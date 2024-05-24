import React from "react";
import Image from "next/image";
import StarRatings from "react-star-ratings";

function RestaurantCard({ data }: any) {
  return (
    <div className={`px-2 cursor-pointer`}>
      <div className="border-2 rounded-xl h-[350px] w-full bg-white">
        <div
          className={`rounded-tl-xl rounded-tr-xl border shadow-sm overflow-hidden w-full h-[250px] relative cursor-pointer`}
        >
          <Image
            src={data.image ?? ""}
            alt="food categories"
            width={300}
            height={250}
            className="object-cover h-[100%] w-[100%]"
          />
          <div
            className="absolute top-0 left-0 w-full h-full flex items-end"
            style={{ background: "rgba(0,0,0,.5)" }}
          ></div>
        </div>
        <div className="px-5">
          <h2 className="mt-2 text-[16px] font-semibold text-center truncate">
            {data.name ?? ""}
            {data.locatedIn ? `, ${data.locatedIn}` : ""}
          </h2>
          <div className="flex items-center justify-center">
            <StarRatings
              rating={data.rating}
              starRatedColor="orange"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
              starSpacing="2px"
            />
            <p className="mt-2 pl-2">
              {"("}
              {data.rating ?? 0}
              {")"}
            </p>
          </div>
          <p className="text-center mt-1">{data.reviews ?? ""} Reviews</p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
