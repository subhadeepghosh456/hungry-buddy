import React, { useState } from "react";
import { IMG_CDN_URL } from "../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteItems } from "../utils/cartSlice";
import { increasePrice, decreasePrice } from "../utils/cartSlice";

const CartItem = ({ name, imageId, price, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItems(id));
  };

  const [number, setNumber] = useState(1);

  const decrease = (price) => {
    setNumber(number - 1);
    dispatch(decreasePrice(price));
    console.log(price);
  };

  const increase = (price) => {
    setNumber(number + 1);
    dispatch(increasePrice(price));
    console.log(price);
  };

  return (
    <div className="flex w-52 flex-col">
      <div className="w-52">
        <img className="w-full" alt="Cartimage" src={IMG_CDN_URL + imageId} />
      </div>
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      <div className="text-center">
        {number <= 1 ? (
          <button className="px-2 rounded-sm bg-red-500 text-white">-</button>
        ) : (
          <button
            onClick={() => decrease(price)}
            className="px-2 rounded-sm bg-red-500 text-white"
          >
            -
          </button>
        )}
        <span className="px-5">{number}</span>
        <button
          onClick={() => increase(price)}
          className="px-2 rounded-sm bg-red-500 text-white"
        >
          +
        </button>
      </div>
      <div className="felx items-stretch">
        <span>price:{price / 100}$</span>
        <span className="ml-[5px]">
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={faTrash}
            onClick={() => handleDelete(id)}
          />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
