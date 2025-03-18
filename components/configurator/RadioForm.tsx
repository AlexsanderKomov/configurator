import React from "react";
import { useConfigStore } from "./store";
import RadioButtonsGroup from "../uikit/RadioButtonGroup";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../uikit/Button";
import { IRadionButtonGroup } from "../uikit/RadioButtonGroup/interface";

const RadioForm = (props: IRadionButtonGroup) => {
  const { updateSelectedOption, stageForward } = useConfigStore();
  const methods = useForm({
    defaultValues: { option_equipment: props.options[0].value },
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          updateSelectedOption(data.option_equipment);
          stageForward();
        })}
        className="p-4 space-y-4 flex flex-col items-center"
      >
        <RadioButtonsGroup
          className="flex gap-5"
          name="option_equipment"
          options={props.options}
        />
        <Button type="submit" text="Дальше" />
      </form>
    </FormProvider>
  );
};

export default RadioForm;
