import { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const RestaurantCategory = ({
  categoryData,
  showItems,
  setShowIndex,
  temp,
}) => {
  const { title, itemCards } = categoryData;
  // logic to show and hide the accodion body
  const showAccodionBody = (showItems) => {
    setShowIndex(showItems);
  };
  return (
    <div>
      <div className="w-7/12 mx-auto my-4 p-4 mt-6 pl-[50px] ">
        {/* Accordion header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={showAccodionBody}
        >
          <span className="font-bold text-md">
            {title} ({itemCards.length})
          </span>
          <span className="pr-5 ">
            {showItems ? (
              <IoIosArrowUp size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </span>
        </div>
        {/* Accordion body */}
        {showItems && <ItemList itemCards={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
