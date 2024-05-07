import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FoodCategories } from '@/Constant/constant';
import Image from 'next/image';

interface FOOD_LIST {
    id?: number;
    name?: string;
    image?: string;
    totalRestaurants?: number;
}

function FoodCategoriesSlider() {
    const [loading, setLoading] = useState(true)
    const skelton = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];
    const [allCategories, setAllCategories] = useState<FOOD_LIST[]>([])

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className="cursor-pointer select-none absolute right-[-50px] top-[75px] text-white bg-[#003b95] w-[30px] h-[30px] rounded-full hover:bg-[#1a4fa0]"
                style={{
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className="cursor-pointer select-none absolute left-[-50px] top-[75px] text-white bg-[#003b95] w-[30px] h-[30px] rounded-full hover:bg-[#1a4fa0]"
                style={{
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                },
            },
        ],
        // afterChange,
    };

    useEffect(() => {
        setAllCategories(FoodCategories.length > 0 ? FoodCategories : [])
        setTimeout(() => { setLoading(false) }, 5000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [FoodCategories])

    return (
        <div>
            <h2 className='text-[32px] font-bold mt-20'>Top Trending Cuisines</h2>
            <p className='mb-5 w-[70%]'>Explore some of the most exciting and trending activities across the globe!</p>
            <Slider {...settings}>
                {loading === true
                    ? skelton.map((limit: string, index: number) => {
                        return (
                            <div
                                key={index}
                                role="status"
                                className="max-w-sm rounded-md animate-pulse md:max-w-[300px] relative px-3 md:mt-0 mt-10"
                            >
                                <div className="flex items-center justify-center mb-4 bg-gray-300 rounded-md dark:bg-gray-700 h-[250px] ">
                                    <svg
                                        className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 16 20"
                                    >
                                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                    </svg>
                                </div>
                                <div className="h-[30px] bg-gray-200 rounded-md dark:bg-gray-700 w-[70%] mb-2 z-10"></div>
                                <div className="h-[10px] bg-gray-200 rounded-md dark:bg-gray-700 w-[70%] mb-2 z-10"></div>
                                <span className="sr-only">Loading...</span>
                            </div>
                        );
                    })
                    : FoodCategories?.map((items: FOOD_LIST, index: number) => {
                        return (
                            <div
                                key={index}
                                className={`md:max-w-[300px] h-[170px] w-full md:mt-0 mt-10 px-2`}
                            >
                                <div
                                    className={`rounded-xl border shadow-sm overflow-hidden h-full relative cursor-pointer`}
                                >
                                    <Image src={items.image ?? ""} alt="food categories" width={300} height={170} className='object-cover' />
                                    <div className='absolute top-0 left-0 w-full h-full flex items-end' style={{ background: "rgba(0,0,0,.5)" }}>
                                        <h2 className='p-3 text-[20px] font-semibold text-white'>{items.name ?? ""}</h2>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </Slider>
        </div>
    )
}

export default FoodCategoriesSlider