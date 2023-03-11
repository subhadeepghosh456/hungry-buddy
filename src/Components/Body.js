import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import Shrimmer from "./Shrimmer";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";

const Body = () => {
  const [input, setInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    console.log(json?.data?.cards[2]?.data?.data?.cards);
  }

  const NoRestaurants = ({ searchText }) => {
    return (
      <h1 className="noRestsurant">
        Sorry. No restaurant found!!! with {searchText}..
      </h1>
    );
  };

  if(allRestaurants === undefined){
    return null;
  }

  return allRestaurants?.length === 0 ? (
    <Shrimmer />
  ) : (
    <div >
      <div className="flex justify-center">
        <input
          className="w-[30%] px-5 py-3 leading-5 text-gray-700 placeholder-gray-500 transition-colors duration-150 ease-in-out bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          type="text"
          placeholder="Enter your search here.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          onClick={() => {
            const data = filterData(input, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Click Me
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
        {filteredRestaurants?.length === 0 ? (
          <NoRestaurants searchText={input} />
        ) : (
          filteredRestaurants?.map((item) => {
            return (
              <Link to={"/restaurant/" + item?.data?.id} key={item?.data?.id}>
                <Card {...item?.data} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
