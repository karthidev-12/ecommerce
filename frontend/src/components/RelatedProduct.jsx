import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
console.log(related,"jjhhjhjhj")
  useEffect(() => {
    if (products?.length > 0) {
        console.log(products,category,subCategory,"hhhh")
      let productsCopy = products.slice();

      productsCopy = productsCopy?.filter(
        (item) => category === item?.category
      );
      productsCopy = productsCopy?.filter(
        (item) => subCategory === item?.subCategory
      );
console.log(productsCopy,"hhhh==")
      setRelated(productsCopy?.slice(0, 5));
    }
  }, [products,subCategory,category]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="Related" text2="products" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related?.map((item, index) => (
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

export default RelatedProduct;
