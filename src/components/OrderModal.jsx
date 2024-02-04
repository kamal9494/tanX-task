import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const OrderModal = ({ visible, closeModal }) => {
  const nav = useNavigate();
  if (!visible) return null;
  const handleClose = (e) => {
    if (e.target.id === "container") closeModal();
  };

  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white w-[300px] flex gap-4 flex-col items-center p-5">
        <div className="w-full flex justify-end">
          <RxCross1
            className="cursor-pointer"
            onClick={() => closeModal()}
            size={23}
          />
        </div>
        <img src={require("../assets/tick.jpg")} alt="success" />
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold">Order Placed Successfully</h2>
          <span className="text-sm">It will delivered in 5 days</span>
        </div>
        <div>
          <button
            className="bg-blue-400 text-white px-4 py-2 rounded"
            onClick={() => nav("/orders")}
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
