import ListLoadedProducts from "@/components/layout/Main/ListLoadedProducts";
import TypeOfSystems from "@/components/layout/Main/TypeOfSystems";
import ReadExcel from "@/components/layout/Main/TypeOfSystems/components/ReadExcel";
import ErrorLoadingFile from "@/components/uikit/ErrorLoadingFile";
import { getSession } from "../auth/session";
import { redirect } from "next/navigation";

async function AddProducts() {
  const session = await getSession();

  if (!session) {
    redirect("/login"); // Перенаправление на страницу входа
  }

  return (
    <div className="flex flex-col items-center gap-y-8">
      <ErrorLoadingFile />
      <TypeOfSystems />
      <ReadExcel />
      <ListLoadedProducts />
    </div>
  );
}

export default AddProducts;
