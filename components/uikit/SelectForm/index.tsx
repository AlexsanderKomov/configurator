import { Controller } from "react-hook-form";
import Select from "react-select";
import { ISelectForm } from "./interface";

function SelectForm({ name, defaultValue, options }: ISelectForm) {
  // const  = props;
  return (
    <>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => <Select {...field} options={options} />}
      />
    </>
  );
}

export default SelectForm;
