import React, { useEffect } from "react";
import Item from "./constants/Item";
import { fetchProducts } from "../redux/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cart";
import { addToFavs } from "../redux/slices/favorites";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?.id);
  const products = useSelector((state) => state.product?.productsList);
  const isLoading = useSelector((state) => state.product?.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
    <div className="bg-[#e5eef8] max-h-[100%] min-h-screen flex flex-wrap gap-4 justify-center p-5">
      {isLoading ? (
        <h2 className="text-center">Loading...</h2>
      ) : products.length === 0 ? (
        <div className="mt-10 text-xl font-semibold text-center">
          No Products
        </div>
      ) : (
        products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            img={product.image}
            title={product.title}
            amount={product.amount}
            rating={product.rating}
            addToCart={() => addToCart(product)}
            addToFavourites={() => addToFavourites(product)}
          />
        ))
      )}
    </div>
  );
};

export default Products;
