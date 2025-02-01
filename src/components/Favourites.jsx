import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cart";
import {
  selectFavoriteProducts,
  fetchFavProducts,
  removeFav,
} from "../redux/slices/favorites";
import FavItem from "./constants/FavItem";
import { FaHeart } from "react-icons/fa";
import Loading from "./constants/Loading";

const Favourites = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.favourites.loading);
  const products = useSelector(selectFavoriteProducts);
  const userId = useSelector((state) => state.auth.user?.id);

  useEffect(() => {
    dispatch(fetchFavProducts(userId));
  }, [userId]);

  const addToCart = (product) => {
    const productDetails = {
      ...product,
      quantity: 1,
    };
    dispatch(addItem(productDetails));
  };
  const removeItem = (id) => {
    // dispatch(deleteFav({ id }));
    dispatch(removeFav(id));
  };
  return (
    <>
      <div className="bg-[#e5eef8] p-2 flex justify-center items-center gap-2">
        click <FaHeart className="text-red-500" /> to remove from the list
      </div>
      <div className="bg-[#e5eef8] max-h-[100%] min-h-screen flex flex-wrap gap-4 justify-center px-5">
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <div className="mt-10 text-xl font-semibold text-center">
            No Items
          </div>
        ) : (
          products.map((product) => (
            <FavItem
              key={product.id}
              id={product.id}
              img={product.image}
              title={product.title}
              amount={product.amount}
              rating={product.rating}
              addToCart={() => addToCart(product)}
              removeItem={() => removeItem(product.id)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Favourites;
