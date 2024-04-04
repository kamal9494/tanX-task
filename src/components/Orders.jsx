import React, { useEffect } from "react";
import { fetchOrders } from "../redux/slices/order";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "./constants/OrderItem";
import Loading from "./constants/Loading";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders?.ordersList);
  const isLoading = useSelector((state) => state.orders.loading);

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(fetchOrders());
    }
  }, [dispatch, orders.length]);

  const Order = ({ order }) => {
    return (
      <div className="bg-white text-black p-5">
        <p className="font-semibold mb-2">
          Order ID: <span>{order.id}</span>
        </p>
        <div className="flex flex-col gap-5">
          {order.products.map((product, index) => (
            <OrderItem
              key={index}
              title={product.title}
              img={product.image}
              amount={product.amount}
              quantity={product.quantity}
            />
          ))}
        </div>
        <p className="py-3 font-semibold text-md">Price: {order.price}</p>
      </div>
    );
  };
  return (
    <div className="bg-[#e5eef8] items-center min-h-screen flex flex-col p-5">
      {isLoading ? (
        <Loading />
      ) : orders.length === 0 ? (
        <div className="mt-10 text-xl font-semibold text-center">No Orders</div>
      ) : (
        <div className="flex flex-col gap-5">
          {orders.map((order, index) => (
            <div key={index}>
              <h1 className="text-2xl font-bold">Order No {index + 1}</h1>
              <Order order={order} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
