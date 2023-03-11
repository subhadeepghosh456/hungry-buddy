import React from "react";
import { IMG_CDN_URL } from "../constant";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLandmark } from "@fortawesome/free-solid-svg-icons";

const star = (
  <svg
    className="w-4 h-4 fill-current text-yellow-600 mr-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path d="M10 1L7 7H1l5 4.8L3 19l7-5.2L17 19l-2.5-7.2L19 7h-6l-3-6z" />
  </svg>
);

const Card = ({ cloudinaryImageId, name, area, avgRating }) => {
  const green = (
    <div className="text-white px-3 bg-green-600 font-semibold rounded-sm">
      {avgRating}
    </div>
  );

  const red = (
    <div className="text-white px-3 bg-red-600 font-semibold rounded-sm">
      {avgRating}
    </div>
  );
  return (
    <div className="max-w-sm w-[100%] rounded overflow-hidden ">
      <img
        className="w-full h-72 hover:scale-y-150 transition duration-500 ease-in-out"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Restaurant"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex items-center mb-2">
          {Array(Math.floor(avgRating))
            .fill("")
            .map(() => star)}

          {Math.floor(avgRating) > 3 ? green : red}
        </div>
        
        <div className="text-gray-700 font-semibold"><FontAwesomeIcon icon={faLandmark} /> {area} </div>
      </div>
    </div>
  );
};

export default Card;
