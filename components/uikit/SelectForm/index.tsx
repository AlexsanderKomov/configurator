import { Controller } from "react-hook-form";
import Select from "react-select";
import { ISelectForm } from "./interface";

function SelectForm(props: ISelectForm) {
  const { name, defaultValue, options } = props;
  return (
    <div>
      <Controller
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => <Select {...field} options={options} required />}
      />
    </div>
  );
}

export default SelectForm;
