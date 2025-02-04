import { FormProvider, useForm } from "react-hook-form";
import { redirect } from "next/navigation";

import RadioButtonsGroup from "@/components/uikit/RadioButtonGroup";

import { RADIO_OPTIONS } from "./constants";

function Appartments() {
  const methods = useForm({ defaultValues: { apartments: "privateHouse" } });

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center gap-4 mb-5"
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);

          redirect(`/config/${data?.apartments}`);
        })}
      >
        <RadioButtonsGroup
          name="apartments"
          options={RADIO_OPTIONS}
          className="flex flex-row gap-4"
        />
        <button type="submit" className="border rounded-lg p-3 w-32">
          Выбрать
        </button>
      </form>
    </FormProvider>
  );
}

export default Appartments;
