import { IRadioButton } from "./interface";

function RadioBtn(props: IRadioButton) {
  const { id, label } = props;

  return (
    <div className="config flex justify-center items-center">
      <label className="mr-2" htmlFor={id}>
        {label}
      </label>
      <input type="radio" {...props} />
    </div>
  );
}

export default RadioBtn;
