import { useState } from 'react'
import Image from 'next/image';

interface CATEGORIES {
    name: string;
    logo: any;
    active: boolean;
    id: number;
}

function Categories() {
    const [categoriesOffer, setCategoriesOffer] = useState([
        { id: 1, name: "Breakfast", logo: "/Images/Categories/breakfast.png", active: true },
        { id: 2, name: "Lunch", logo: "/Images/Categories/lunch.png", active: false },
        { id: 3, name: "Dinner", logo: "/Images/Categories/dinner.png", active: false },
        { id: 4, name: "Hi-Tea", logo: "/Images/Categories/hi-tea.png", active: false },
        { id: 5, name: "Party", logo: "/Images/Categories/party.png", active: false },
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
                        <Image src={items.logo} alt="logo" width={20} height={20}/>
                        <span>{items.name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories