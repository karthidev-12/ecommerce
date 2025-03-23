import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import axios from "axios";

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
     

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
const removeproduct =async(id)=>{
try {
  const response = await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}})
  if(response.data.success){
    toast.success(response.data.message)
   await fetchList()
  }else{
    toast.error(response.data.message)
  }
} catch (error) {
  console.log(error)
}
}
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <>
      <p className="mb-2">All products list</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item,index)=>(
           <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm" key={index}>
            <img className="w-12" src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
            <p className="text-right md:text-center cursor-pointer text-lg" onClick={()=>removeproduct(item._id)}>X</p>
            </div>
        ))}
      </div>
    </>
  );
};

export default List;
