import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./constants/CartItem";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/slices/cart";
import { order } from "../redux/slices/order";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import OrderModal from "./OrderModal";

const Cart = () => {
  const userInfo = useSelector((state) => state.auth);
  const nav = useNavigate();
  const items = useSelector((state) => state.cart.cartItems);
  const totalItems = useSelector((state) => state.cart.cartItems.length);
  const price = items.reduce(
    (totalPrice, item) => totalPrice + Number(item.amount) * item.quantity,
    0
  );
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => setIsVisible(false);
  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };
  const handleIncrement = (id) => {
    dispatch(increaseQuantity({ id }));
  };
  const handleDecrement = (id) => {
    dispatch(decreaseQuantity({ id }));
  };
  const placeOrder = () => {
    const orderDetails = {
      id: uuidv4(),
      products: items,
      userId: userInfo.user.id,
      price,
    };
    dispatch(order(orderDetails));
    dispatch(clearCart());
    setIsVisible(true);
  };
  return (
    <>
      {isVisible ? <OrderModal visible={isVisible} closeModal={closeModal} /> : null}
      {totalItems !== 0 ? (
        <div className="flex max-h-[100%] min-h-screen pt-5 bg-[#e5eef8] flex-col">
          <div className="flex flex-wrap gap-5 justify-center">
            <div className="max-w-[600px] w-full min-w-[300px]">
              <div className="bg-white shadow-md rounded-md p-4 overflow-y-auto7">
                <h2 className="text-xl mb-3">My Cart</h2>
                <div className="flex flex-col gap-5">
                  {items.map((item) => (
                    <CartItem
                      key={item.id}
                      title={item.title}
                      amount={item.amount}
                      img={item.image}
                      quantity={item.quantity}
                      handleRemove={() => handleRemove(item.id)}
                      handleIncrement={() => handleIncrement(item.id)}
                      handleDecrement={() => handleDecrement(item.id)}
                    />
                  ))}
                </div>
              </div>
              {userInfo.user ? (
                <button
                  className="bg-[#0377ed] my-2 p-2 text-white rounded-md"
                  onClick={placeOrder}
                >
                  PLACE ORDER
                </button>
              ) : (
                <button
                  className="bg-[#0377ed] my-2 p-2 text-white rounded-md"
                  onClick={() => nav("/login")}
                >
                  Login to PLACE ORDER
                </button>
              )}
            </div>
            <div className="bg-white flex h-fit flex-col gap-3 shadow-md rounded-md p-4 w-[300px]">
              <h2 className="text-xl text-gray-500">Price Details</h2>
              <div className="flex justify-between text-sm">
                <span>Price</span>
                <span>{price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount Price</span>
                <span>100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Charge</span>
                <span>50</span>
              </div>
              <hr className=" border-gray-500" />

              <div className="flex font-semibold justify-between text-md">
                <span>Total</span>
                <span>{price + 150}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 text-xl font-semibold text-center">
          No Items in Cart
        </div>
      )}
    </>
  );
};

export default Cart;
