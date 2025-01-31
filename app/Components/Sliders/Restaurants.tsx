import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { topRestaurants } from '@/Constant/constant';
import RestaurantCard from '../RestaurantCard';
import { useRouter } from "next/navigation";
interface FOOD_LIST {
    id?: number;
    name?: string;
    image?: string;
    locatedIn?: string;
    rating?: number;
    reviews?: number;
}

function Restaurants() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [allRestaurants, setAllRestaurants] = useState<FOOD_LIST[]>([])
    const skelton = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className="cursor-pointer select-none absolute right-[-5px] top-[150px] text-white bg-[#003b95] w-[30px] h-[30px] rounded-full hover:bg-[#1a4fa0]"
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
                className="cursor-pointer select-none absolute left-[-5px] top-[150px] text-white bg-[#003b95] w-[30px] h-[30px] rounded-full hover:bg-[#1a4fa0] z-10"
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
                breakpoint: 1881,
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
        setAllRestaurants(topRestaurants && topRestaurants?.length > 0 ? topRestaurants : [])
        setTimeout(() => { setLoading(false) }, 5000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [topRestaurants])
    return (
        <div id='restaurants'>
            <h2 className='sm:text-[32px] text-[18px] font-bold sm:text-start text-center'>Top Restaurants In Pakistan</h2>
            <p className='sm:mb-5 mb-10 sm:w-[70%] sm:text-[16px] text-[14px] sm:text-start text-center sm:mt-0 mt-2'>Great food is the make or break between a good and a great travel experience, so never settle with these top restaurants in the entire world!</p>
            <Slider {...settings}>
                {loading === true
                    ? skelton.map((limit: string, index: number) => {
                        return (
                            <div
                                key={index}
                                role="status"
                                className="rounded-md animate-pulse relative px-3"
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
                    : allRestaurants?.map((items: FOOD_LIST, index: number) => {
                        return (
                            <div key={index} className={`md:mt-0 mt-10 px-2 cursor-pointer`} onClick={()=>{
                                router.push(`/detail?id=${items.id}`)
                            }}>
                                <RestaurantCard data={items}/>
                            </div>
                        );
                    })}
            </Slider>
        </div>
    )
}

export default Restaurants