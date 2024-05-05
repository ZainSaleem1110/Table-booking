import React, { useState, useEffect } from 'react'
import { Cities } from '@/Constant/constant';

interface CITIES_LIST {
    id?: number;
    name?: string;
    country?: string;
}

function CitiesSlider() {
    const [loading, setLoading] = useState(true)
    const skelton = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4"];
    const [allCitiesList, setAllCitiesList] = useState<CITIES_LIST[]>([])

    useEffect(() => {
        setAllCitiesList(Cities ?? [])
        setTimeout(() => { setLoading(false) }, 5000);
    }, [Cities])

    return (
        <div className="grid grid-cols-6">
            {loading === true
                ? skelton.map((limit: string, index: number) => {
                    return (
                        <div
                            key={index}
                            role="status"
                            className="max-w-sm rounded-md animate-pulse w-[150px] relative px-3 md:mt-0 mt-10"
                        >
                            <div className="h-[30px] bg-gray-200 rounded-md dark:bg-gray-700 w-[70%] my-7 z-10"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    );
                })
                : allCitiesList?.map((items: CITIES_LIST, index: number) => {
                    return (
                        <div
                            key={index}
                            className={`w-[150px] h-[60px] md:mt-0 mt-10 px-2`}
                        >
                            <a href="">{items.name ?? ""}</a>
                        </div>
                    );
                })}
        </div>
    )
}

export default CitiesSlider