import { useFormContext } from "react-hook-form";

import RadioButton from "../RadioButton";

import { IRadionButtonGroup } from "./interface";

/** Группа радио-кнопок */
function RadioButtonsGroup(props: IRadionButtonGroup) {
  const { name, options, onChange, className } = props;

  const { register } = useFormContext();

  return (
    <ul className={className}>
      {options.map((option, index) => {
        const key = `radio_${option}_${option?.id || index}`;

        const registerProps = register(name);

        return (
          <li className="last-of-type:mb-0" key={key}>
            <RadioButton
              id={option?.id ?? option.value}
              {...option}
              {...props}
              {...registerProps}
              onChange={(value) => {
                registerProps.onChange(value);
                onChange?.(value);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default RadioButtonsGroup;
