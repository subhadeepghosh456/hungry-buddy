import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import useRestraunt from "../utils/useRestaurant";
import MenuCard from "./MenuCard";
import Shrimmer from "./Shrimmer";

const RestrauntMenu = () => {
  const { id } = useParams();
  const restaurant = useRestraunt(id);
  console.log(restaurant);

  const star = (
    <svg
      className="w-4 h-4 fill-current text-yellow-600 mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 1L7 7H1l5 4.8L3 19l7-5.2L17 19l-2.5-7.2L19 7h-6l-3-6z" />
    </svg>
  );

  return (
    <>
    <div className="bg-gradient-to-r from-blue-900 to-black p-4 rounded-lg shadow-lg md:flex md:items-center px-[20%] ">
      <div className="relative md:w-1/2 lg:w-1/3 md:mr-4">
        <img
          class="w-full rounded-lg shadow-md"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="Beautiful Image"
        />
        <div className="absolute top-0 left-0 p-2">
          <span className="bg-pink-500 text-white font-bold py-1 px-2 rounded-full">
            New
          </span>
        </div>
      </div>
      <div className="pt-4 md:w-1/2 lg:w-2/3">
        <h1 className="text-white text-xl font-bold">{restaurant.name}</h1>
        <h3 className="text-white text-xl font-bold">{restaurant?.area}</h3>
        <h3 className="text-white text-xl font-bold">{restaurant?.city}</h3>
        <h3 className="text-white text-xl font-bold">
          {restaurant?.costForTwoMsg}
        </h3>
        <div className="flex">
          <h3 className="text-white text-xl font-bold">
            {restaurant?.avgRating}
          </h3>
          <span>{star}</span>
        </div>
      </div>
    </div>
     <div>
     <h1 className="px-[20%]">Menu</h1>
     {restaurant?.menu?.items === undefined ? (
       <Shrimmer />
     ) : (
       Object.values(restaurant?.menu?.items).map((item) => (
         <div className="px-[20%] w-full" >
           <MenuCard key={item?.id} id={item?.id} name={item?.name} imageId={item?.cloudinaryImageId} price={item?.price}/>
           
         </div>
       ))
     )}
   </div>
   </>
  );
};

export default RestrauntMenu;
