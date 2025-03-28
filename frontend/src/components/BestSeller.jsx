import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    const bestProduct = products?.filter((item) => item.bestseller);
    setBestSeller(bestProduct?.slice(0, 5));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-cenetr text-3xl py-8">
        <Title text1={"Best"} text2={"seller"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller?.map((item, index) => (
            
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
