import React from 'react'
import Image from 'next/image'

interface CITIES_LIST {
    id?: number;
    name?: string;
    country?: string;
    image?: string;
    countryFlag?: string;
}

function CitiesCard({ data }: { data: CITIES_LIST }) {
    return (
        <div className='overflow-hidden w-full h-[250px] rounded-lg relative cursor-pointer'>
            <Image src={data.image ?? ""} alt="city" width={400} height={250} className='object-cover w-full h-[250px]' />
            <div className='absolute top-0 left-0 rounded-lg w-full h-full text-white px-5 pt-5' style={{ background: "rgba(0,0,0,.7)" }}>
                <h4 className='sm:text-[24px] text-[20px] font-semibold flex items-center gap-2'>
                    {data.name}
                    <span>
                        <Image src={data.countryFlag ?? ""} alt="country flag" width={30} height={30} />
                    </span>
                </h4>
            </div>
        </div>
    )
}

export default CitiesCard