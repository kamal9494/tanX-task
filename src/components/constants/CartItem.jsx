import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const CartItem = ({
  amount,
  title,
  img,
  handleIncrement,
  handleDecrement,
  handleRemove,
  quantity,
}) => {
  return (
    <div className="shadow-md rounded-md flex flex-col-reverse md:flex-row  gap-2 items-center">
      <div className="flex gap-2 flex-col items-center md:flex-row md:items-start">
        <div className="w-[100px] min-w-[100px] h-[100px] rounded-md">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="flex min-w-[100px] flex-col items-center md:items-start justify-center">
          <span className="text-xl text-gray-500 mb-2 truncate w-[300px] md:w-[400px]">
            {title}
          </span>
          <span className="font-bold text-gray-500 mb-1">₹ {amount}</span>
          <div className="flex gap-2 mb-2">
            <button onClick={handleIncrement}>+</button>
            <input
              type="number"
              className="w-[40px] text-center border-gray-400 rounded-md border"
              value={quantity}
              disabled
            />
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>
      </div>
      <div className="text-red-500 flex justify-end w-full mr-5 md:block">
        <RxCrossCircled
          size={25}
          className="cursor-pointer"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
};

export default CartItem;
