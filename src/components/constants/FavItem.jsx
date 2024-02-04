import React from "react";
import { BiCartAdd } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FavItem = ({ id, img, title, amount, rating, addToCart, removeItem }) => {
  const nav = useNavigate();

  const openProject = () => {
    nav("/product/" + id);
  };

  return (
    <div className="flex flex-col h-fit justify-between bg-white rounded-lg shadow-md w-[300px] hover:shadow-xl">
      <div onClick={openProject} className="cursor-pointer">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={img}
          alt={title}
        />
        <div className="flex flex-col p-5">
          <h3 className="text-xl text-gray-500 mb-2 truncate">{title}</h3>
          <div className="flex flex-col mb-1">
            <span className="font-bold text-gray-500 mb-1">₹ {amount}</span>
            <span className="text-white bg-green-500 font-semibold w-fit text-xs py-[3px] px-[8px] rounded-md">
              {rating}
            </span>
          </div>
        </div>
      </div>
      <div className="flex text-gray-500 justify-between px-5 mb-5">
        <FaHeart
          size={25}
          className="cursor-pointer text-red-500"
          onClick={removeItem}
        />
        <BiCartAdd size={25} className="cursor-pointer" onClick={addToCart} />
      </div>
    </div>
  );
};

export default FavItem;
