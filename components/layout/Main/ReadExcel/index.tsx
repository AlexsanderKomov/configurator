import { handleFileReader } from "@/lib/helpers/readExcel";

const ReadExcel = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("File uploaded");
        handleFileReader(e);
        console.log(e);
      }}
    >
      <input type="file" accept=".xls, .xlsx" />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ReadExcel;
