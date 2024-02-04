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
    <div className="shadow-md rounded-md flex gap-2 items-center">
      <div className="w-[100px] min-w-[100px] h-[100px] rounded-md">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex min-w-[100px] w-fit max-w-[100%] flex-col items-start justify-center">
        <span className="text-xl text-gray-500 mb-2 truncate w-[400px]">
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
      <div className="text-red-500">
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
