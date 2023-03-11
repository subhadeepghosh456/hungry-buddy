import React from "react";
import { IMG_CDN_URL } from "../constant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";

const MenuCard = ({ name, imageId, price,id }) => {
  const dispatch = useDispatch();

  const addFoodItem = ({ name, imageId, price,id}) => {
    dispatch(addItems({ name, imageId, price,id }));
  };

  return (
    <div className="w-[100%] flex flex-col justify-between py-9 px-5 border stroke-lime-500 ">
      <div className="text-left">
        <h1 className="text-2xl">
          <FontAwesomeIcon icon={faHandPointer} /> {name}
        </h1>
        <h1>{price / 100}$</h1>
      </div>
      <div className="flex justify-end">
        <div className="flex  items-end flex-col w-[200px]">
          {imageId == '' ? (
            <img
              alt="image"
              src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
              
              className="w-[100%] rounded-md"
            />
          ) : (
            <img alt="image" src={IMG_CDN_URL + imageId} className="w-[100%] rounded-md" />
          )}
          <button
            className="px-4 bg-red-700 rounded-md hover:bg-red-400 text-white w-[100%]"
            onClick={() => addFoodItem({ name, imageId, price,id })}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
