import React from "react";

const OrderItem = ({ amount, title, img, quantity }) => {
  return (
    <div className="shadow-md rounded-md flex gap-2 items-center">
      <div className="w-[100px] min-w-[100px] h-[100px] rounded-md">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex min-w-[100px] w-fit max-w-[full] flex-col items-start justify-center">
        <span className="text-xl text-gray-500 mb-2 truncate w-[100%]">
          {title}
        </span>
        <span className="font-bold text-gray-500 mb-1">₹ {amount}</span>
        <div className="flex gap-2 mb-2">
          <span className="text-gray-500">Quantity :</span>
          <input
            type="number"
            className="w-[40px] text-center border-gray-400 rounded-md border"
            value={quantity}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
