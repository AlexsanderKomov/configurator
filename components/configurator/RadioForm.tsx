import React from "react";
import { useConfigStore } from "./store";
import RadioButtonsGroup from "../uikit/RadioButtonGroup";
import { RADIO_OPTIONS_INTERCOM } from "./constants";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../uikit/Button";

const RadioForm = () => {
  const { setSelectedOption, stageForward } = useConfigStore();

  const methods = useForm({
    defaultValues: { option_intercom: "individually" },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSelectedOption(methods.getValues().option_intercom);
    stageForward();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <RadioButtonsGroup
          className="flex gap-5"
          name="option_intercom"
          options={RADIO_OPTIONS_INTERCOM}
        />
        <Button type="submit" text="Дальше" />
      </form>
    </FormProvider>
  );
};

export default RadioForm;
