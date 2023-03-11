import React from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Head = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex h-20  justify-between items-center px-3">
      <img
        className="h-20 w-20"
        alt="Logo"
        src="https://pbs.twimg.com/profile_images/515774380287090688/G_ZZ1_Cu_400x400.png"
      />
      <ul className="flex gap-[5%] text-2xl font-bold sm:gap-[10%]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>{" "}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <span className="text-2xl mr-3"> <Link to="/cart"><FontAwesomeIcon icon={faCartPlus} /></Link></span>
        {/* {cartItems.length===0 ? <span></span> :<span className="inline-block bg-red-600 text-center rounded-3xl -ml-5 -mb-5 px-[2px] py-[2px] text-white ">{cartItems.length}</span>} */}
      
      </div>
    </div>
  );
};

export default Head;
