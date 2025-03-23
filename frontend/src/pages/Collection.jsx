import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setFilterproducts] = useState([]);
const[sortType,setSortType]=useState('relavent')
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const handleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const handleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products?.slice();
    if(showSearch && search){
      productCopy =productCopy?.filter(item => item?.name?.toLowerCase()?.includes(search?.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy?.filter((item) =>
        category.includes(item?.category)
      );
    }

    if (subCategory?.length > 0) {
      productCopy = productCopy?.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterproducts(productCopy);
  };
  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch,products]);

  const sortProduct = () => {
    const fpCopy = filterProducts?.slice();

    switch (sortType) {
      case "low-high":
        setFilterproducts(fpCopy?.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterproducts(fpCopy?.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };
  useEffect(() => {
  sortProduct()
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          Filters
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onClick={handleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onClick={handleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"kids"}
                onClick={handleCategory}
              />
              kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onClick={handleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onClick={handleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onClick={handleSubCategory}
              />
              winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="Collections" />
          <select onChange={(e)=>setSortType(e.target.value)} className="border border-gray-300 text-sm px-2">
            <option value="relavent">Sort by:relavent</option>
            <option value="low-high">Sort by:low-high</option>
            <option value="high-low">Sort by:high-low</option>
          </select>
        </div>
        {/* ****products************** */}

        <div className="grid grids-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts?.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
