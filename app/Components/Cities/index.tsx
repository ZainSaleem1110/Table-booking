import React, { useState, useEffect } from 'react'
import CitiesCard from './citiesCard'
import { Cities } from '@/Constant/constant.js'

interface CITIES_LIST {
  id?: number;
  name?: string;
  country?: string;
}

function Restaurants() {
  const [allCitiesList, setAllCitiesList] = useState<CITIES_LIST[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const skelton = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7"];

  useEffect(() => {
    setAllCitiesList(Cities && Cities?.length > 0 ? Cities : [])
    setTimeout(() => { setLoading(false) }, 5000);
  }, [Cities])

  return (
    <div className='py-20'>
      <h2 className='text-[32px] font-bold mb-5'>Available for dinner now in Pakistan.</h2>
      <div className='mt-5 grid grid-cols-3 gap-5'>
        {loading === true
          ? skelton.map((limit: string, index: number) => {
            return (
              <div
                key={index}
                role="status"
                className="max-w-sm rounded-md animate-pulse md:max-w-full relative px-3 md:mt-0 mt-10"
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
                <div className="h-[30px] bg-gray-200 rounded-md dark:bg-gray-700 w-[50%] mb-2 z-10 absolute top-4 left-8"></div>
                <span className="sr-only">Loading...</span>
              </div>
            );
          })
          : allCitiesList && allCitiesList?.length > 0 && allCitiesList.map((cities: CITIES_LIST) => {
            return (
              <CitiesCard data={cities} />
            )
          })}
      </div>
    </div>
  )
}

export default Restaurants