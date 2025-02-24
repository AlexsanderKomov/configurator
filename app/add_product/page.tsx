import ListLoadedProducts from "@/components/layout/Main/ListLoadedProducts";
import TypeOfSystems from "@/components/layout/Main/TypeOfSystems";
import ReadExcel from "@/components/layout/Main/TypeOfSystems/components/ReadExcel";
import { ToastContainer } from "react-toastify";

async function AddProducts() {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <ToastContainer />
      <TypeOfSystems />
      <ReadExcel />
      <ListLoadedProducts />
    </div>
  );
}

export default AddProducts;
