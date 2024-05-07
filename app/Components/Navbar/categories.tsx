import { useState } from 'react'
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineFlightTakeoff, MdAttractions } from "react-icons/md";
import { FaCar, FaTaxi } from "react-icons/fa";

interface CATEGORIES {
    name: string;
    logo: any;
    active: boolean;
    id: number;
}

function Categories() {
    const [categoriesOffer, setCategoriesOffer] = useState([
        { id: 1, name: "Stays", logo: <IoBedOutline />, active: true },
        { id: 2, name: "Flights", logo: <MdOutlineFlightTakeoff />, active: false },
        { id: 3, name: "Car rentals", logo: <FaCar />, active: false },
        { id: 4, name: "Attractions", logo: <MdAttractions />, active: false },
        { id: 5, name: "Airport taxis", logo: <FaTaxi />, active: false },
    ])

    const handleSelected = (id: number) => {
        const categoriesCopy = categoriesOffer
        categoriesCopy.map((items: CATEGORIES) => {
            if (items.id === id) {
                items.active = true
            } else {
                items.active = false
            }
        })
        setCategoriesOffer([...categoriesCopy])
    }

    return (
        <div className="flex items-center gap-5">
            {categoriesOffer && categoriesOffer?.length > 0 && categoriesOffer.map((items: CATEGORIES, index:number) => {
                return (
                    <div key={index} className={`flex items-center gap-3 h-[40px] text-white cursor-pointer hover:bg-[#1a4fa0] px-5 rounded-full hover:border hover:border-white ${items.active === true ? "border border-white bg-[#1a4fa0]" : "border border-transparent"}`} onClick={() => { handleSelected(items.id) }}>
                        {items.logo}
                        <span>{items.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories