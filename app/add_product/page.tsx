"use client";

import AddProduct from "@/components/layout/Main/AddProduct";
import useFetchUserFromLocalStorage from "@/lib/hooks/useFetchUserFromLocalStorage";

const AddProductPage = () => {
  useFetchUserFromLocalStorage("userData");

  return (
    <div className="container">
      <AddProduct />
    </div>
  );
};

export default AddProductPage;
