import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import makeApiCall from "../api";
import { useParams } from "react-router-dom";
import { addToFavs } from "../redux/slices/favorites";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem } from "../redux/slices/cart";
import { toast } from "sonner";
import { order } from "../redux/slices/order";
import OrderModal from "./OrderModal";

const Description = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.id);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const url = `http://localhost:5000/products?id=${id}`;
        const method = "GET";
        const result = await makeApiCall(url, method, null);
        setProduct(result.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchProduct();
  }, [id]);

  const closeModal = () => setIsVisible(false);

  const placeOrder = () => {
    if(!userId){
      toast.error("Please login to buy");
      return;
    }
    product.quantity = 1;
    product.price = product.amount;
    const orderDetails = {
      id: uuidv4(),
      products: [product],
      userId,
    };
    dispatch(order(orderDetails));
    setIsVisible(true);
  };

  const addToCart = (product) => {
    const productDetails = {
      ...product,
      quantity: 1,
    };
    dispatch(addItem(productDetails));
  };

  const addToFavourites = (product) => {
    if (!userId) {
      toast.error("Please login to add");
      return;
    }
    const { id, ...item } = product;
    const favItem = {
      ...item,
      id: uuidv4(),
      productId: id,
      userId,
    };
    dispatch(addToFavs(favItem));
  };

  return (
    <div className="flex h-[90vh] w-full flex-col md:flex-row">
      {isVisible ? (
        <OrderModal visible={isVisible} closeModal={closeModal} />
      ) : null}
      {isLoading && (
        <div className="text-center text-xl font-bold"> Loading...</div>
      )}
      {!isLoading && product && (
        <>
          <div className="p-10 md:w-[50%] w-full flex justify-center items-center">
            <img
              src={product.image}
              alt="pic"
              className="min-w-[250px] max-w-[400px]"
            />
          </div>
          <div className="flex md:w-[50%] p-10 w-full flex-col justify-around">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl">{product.title}</h1>
                <span className="bg-gray-300 p-2 h-fit rounded-full">
                  <FaHeart
                    className="text-gray-600 cursor-pointer"
                    size={24}
                    onClick={() => addToFavourites(product)}
                  />
                </span>
              </div>
              <p className="text-gray-500 text-md">{product.description}</p>
              <span className="font-bold text-3xl">₹ {product.amount}</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-evenly px-5 md:px-14 mt-5 gap-4">
              <button
                className="border-2 border-black w-[150px] px-6 py-4"
                onClick={placeOrder}
              >
                Buy Now
              </button>
              <button
                className="border-2 border-black w-[150px] text-white bg-black px-6 py-4"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Description;
