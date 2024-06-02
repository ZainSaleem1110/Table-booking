"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface REVIEWS {
  postId?: number;
  id?: number;
  name?: string;
  email?: string;
  body?: string;
  customerRating?: number;
}

const Static_Details = [
  {
    id: 1,
    name: "Haveli Restaurant",
    locatedIn: "Faisalabad",
    rating: 2,
    reviews: [
      {
        postId: 1,
        id: 1,
        name: "Eliseo",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        customerRating: 2,
      },
      {
        postId: 1,
        id: 2,
        name: "Jayne Kuhic",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        customerRating: 3,
      },
      {
        postId: 1,
        id: 3,
        name: "Nikita",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
        customerRating: 4,
      },
      {
        postId: 1,
        id: 4,
        name: "Lew Alysha",
        email: "Lew@alysha.tv",
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
        customerRating: 5,
      },
      {
        postId: 1,
        id: 5,
        name: "Hayden Althea",
        email: "Hayden@althea.biz",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
        customerRating: 1,
      },
      {
        postId: 2,
        id: 6,
        name: "Presley Mueller",
        email: "Presley.Mueller@myrl.com",
        body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
        customerRating: 2,
      },
      {
        postId: 2,
        id: 7,
        name: "Dallas Ole",
        email: "Dallas@ole.me",
        body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
        customerRating: 3,
      },
      {
        postId: 2,
        id: 8,
        name: "Mallory Kunze",
        email: "Mallory_Kunze@marie.org",
        body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
        customerRating: 4,
      },
      {
        postId: 2,
        id: 9,
        name: "Meghan Littel",
        email: "Meghan_Littel@rene.us",
        body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
        customerRating: 5,
      },
      {
        postId: 2,
        id: 10,
        name: "Carmen Keeling",
        email: "Carmen_Keeling@caroline.name",
        body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
        customerRating: 3,
      },
    ],
    images: [
      "/Images/Restaurants/pic1.jpeg",
      "/Images/Restaurants/pic2.jpg",
      "/Images/Restaurants/pic3.jpeg",
      "/Images/Restaurants/pic4.jpg",
      "/Images/Restaurants/pic5.png",
      "/Images/Restaurants/pic1.jpeg",
    ],
    description:
      "Haveli Restaurant is located in the historic Haveli Khalil Khan, which is an architectural landmark in Lahore. Nestled in the lap of history, the Haveli offers outstanding views of the famous Badshahi Mosque built by the Moghul emperor Aurangzeb in 1673,which remained the largest mosque in the world for over 300 years, the Temple of Guru Arjun ( 1563-1606), or Dera Sahib, where Raja Ranjit Singh of the Sikh kingdom of Punjab was cremated in 1839 along with his principal Rani,the princess of Kangra and three other wives, the tombs of Allama Iqbal and Sir Sikamder Hayat Khan, the Minar-e-Pakistan and last but not least, the impressive Lahore Fort with its fascinating history of one thousand years. While the views from Haveli restaurant are incomparable, its cuisine is equally fabulous and satisfying. Our guests are treated like royalty, while they enjoy delicious Barbeque, tasty mutton and chicken dishes, tawa preparations, and our chef's special recipe of Lahori style delicacies.",
  },
];

const ratingStar = (color: string) => {
  return (
    <svg
      viewBox="0 0 51 48"
      className="widget-svg"
      style={{
        width: "20px",
        height: "20px",
        transition: "transform 0.2s ease-in-out 0s",
      }}
    >
      <path
        className="star"
        d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
        style={{
          fill: color,
          transition: "fill 0.2s ease-in-out 0s",
        }}
      ></path>
    </svg>
  );
};

function DetailPage() {
  const [defaultImg, setDefaultImg] = useState("");
  useEffect(() => {
    if (
      Static_Details &&
      Static_Details.length > 0 &&
      Static_Details[0].images &&
      Static_Details[0].images.length > 0
    ) {
      setDefaultImg(Static_Details[0].images[0]);
    }
  }, [Static_Details]);
  return (
    <div className="sm:px-20 px-6 my-5">
      <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-x-10 mt-20">
        <div className="w-full">
          <div className="relative border rounded-md w-full sm:h-[500px] h-[300px] overflow-hidden">
            <img className="w-full h-full" src={defaultImg} alt="" />
            {Static_Details && Static_Details[0].rating && (
              <div className="absolute top-0 right-0 bg-white text-[orange] px-3 py-2 font-bold z-20 flex items-center gap-2 rounded-sm">
                {Static_Details[0].rating}
                {ratingStar("orange")}
              </div>
            )}
          </div>
          <div className="flex overflow-x-auto scrollbar pb-3 mt-4 gap-3">
            {Static_Details &&
              Static_Details[0]?.images &&
              Static_Details[0].images.map((img, index) => {
                return (
                  <Image
                    key="index"
                    className={`border rounded-md cursor-pointer sm:h-[150px] h-[80px] sm:w-[150px] w-[80px] object-cover`}
                    src={img}
                    width={100}
                    height={100}
                    alt="Logo"
                    onClick={() => {
                      setDefaultImg(img);
                    }}
                  />
                );
              })}
          </div>
        </div>
        <div>
          <div className="pb-6 flex flex-col gap-y-2 border-b-2 border-black lg:mt-0 mt-10">
            {Static_Details && Static_Details[0].locatedIn && (
              <p className="text-[12px] sm:text-start text-center">{Static_Details[0]?.locatedIn}</p>
            )}
            {Static_Details && Static_Details[0].name && (
              <p className="font-bold sm:text-start text-center">{Static_Details[0]?.name}</p>
            )}
            {Static_Details && Static_Details[0].reviews.length > 0 && (
              <p className="sm:text-start text-center">{Static_Details[0]?.reviews.length} reviews</p>
            )}
            <button className="bg-[#f5db8b] h-[50px] sm:max-w-[500px] w-full mt-5 font-bold rounded-md hover:bg-white hover:text-[#f5db8b] hover:border hover:border-[#f5db8b]">
              Book Now
            </button>
          </div>
          <div className="py-6 flex flex-col gap-y-2 border-b-2 border-black">
            {Static_Details && Static_Details[0].description && (
              <>
                <p className="font-bold sm:text-start text-center">Description:</p>
                <p className="sm:text-start text-center">{Static_Details[0].description}</p>
              </>
            )}
          </div>
        </div>
      </div>
      {Static_Details &&
        Static_Details.length > 0 &&
        Static_Details[0].reviews &&
        Static_Details[0].reviews.length > 0 && (
          <div className="sm:mt-20 mt-10">
            <p className="md:text-[32px] sm:text-[28px] text-[20px] font-bold sm:text-start text-center">
              Client{"'"}s Reviews
            </p>
            <div className="gap-y-8 flex flex-col mt-10">
              {Static_Details[0].reviews.map((item: REVIEWS,index:number) => {
                return (
                  <div className="bg-white shadow-sm py-10 px-7 rounded-md" key={index}>
                    <div className="flex sm:flex-row flex-col sm:items-start items-center sm:gap-8 gap-4">
                      <div className="w-[60px] h-[60px] overflow-hidden">
                      <Image
                        src="/Images/user.jpg"
                        alt="customer"
                        width={60}
                        height={60}
                        className="object-cover object-top rounded-full w-full h-full"
                      />
                      </div>
                      <div className="w-full">
                        <p className="font-bold text-lg sm:text-start text-center">{item.name}</p>
                        <p className="text-sm sm:text-start text-center">{item.email}</p>
                        {item.customerRating && (
                          <span className="flex items-center sm:justify-start justify-center mt-1">
                            <p className="mr-2">
                              {"("}
                              {item.customerRating}
                              {")"}
                            </p>
                            {item.customerRating > 0
                              ? ratingStar("orange")
                              : ratingStar("gray")}
                            {item.customerRating > 1
                              ? ratingStar("orange")
                              : ratingStar("gray")}
                            {item.customerRating > 2
                              ? ratingStar("orange")
                              : ratingStar("gray")}
                            {item.customerRating > 3
                              ? ratingStar("orange")
                              : ratingStar("gray")}
                            {item.customerRating > 4
                              ? ratingStar("orange")
                              : ratingStar("gray")}
                          </span>
                        )}
                        <p className="mt-5 sm:text-start text-center">{item?.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
    </div>
  );
}

export default DetailPage;
