import React, { useState, useEffect } from "react";
import Image from "next/image";
interface RESTAURANTS_LIST {
  id?: number;
  name?: string;
  country?: string;
  checked?: boolean;
}

export default function MultiSelect({
  title,
  categories,
  onChange,
  clearData,
}: {
  title: string;
  categories: RESTAURANTS_LIST[];
  onChange: any;
  clearData: boolean;
}) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownList, setDropdownList] = useState<RESTAURANTS_LIST[]>([]);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setDropdownList(categories);
    }
  }, [categories]);

  return (
    <div className="pt-2">
      <div className="flex justify-between items-center">
        <div
          className="flex items-center gap-2 pointer"
          onClick={() => {
            setOpenDropdown(!openDropdown);
          }}
        >
          <Image
            src={
              openDropdown === true
                ? "/Images/icons/triangle-bottom-icon.svg"
                : "/Images/icons/triangle-right-primary-icon.svg"
            }
            alt="arrow"
            width={20}
            height={20}
          />
          <h2>{title}</h2>
        </div>
        {selectedCount && selectedCount > 0 ?(
          <div className="w-[20px] h-[20px] rounded-md text-white bg-[#ffb700] flex justify-center items-center text-[14px] font-bold">
            {selectedCount}
          </div>
        ):(
          ""
        )}
      </div>
      <div
        className={`${
          openDropdown === true ? "h-full" : "h-[0px]"
        } overflow-hidden transition duration-700 ease-linear pl-7`}
      >
        {dropdownList.map((items: RESTAURANTS_LIST, index: number) => {
          return (
            <div key={index} className="flex items-center gap-3 pt-2">
              <input type="checkbox" className="text-[#ffb700]" />
              <p key={index} className="text-[14px]">
                {items?.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
