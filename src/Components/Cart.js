import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { crearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

    const dispatch = useDispatch();
    const handleCleare = ()=>{
        dispatch(crearCart())
    }

  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.totalAmount);
  return (
    <>
      <button className="bg-red-600 text-cyan-50 px-4 py-1 rounded-md ml-3 my-5 hover:bg-red-400" onClick={()=>handleCleare()}>ClearCart</button>
      <div className="text-center text-3xl py-8">Total Amount To Pay:{total} $</div>
      <div className="flex flex-wrap gap-[2%] px-[10%] justify-center">
        {cartItems.map((item) => {
          return <CartItem {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Cart;
