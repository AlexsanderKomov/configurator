import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import RadioButtonsGroup from "@/components/uikit/RadioButtonGroup";

import { RADIO_OPTIONS } from "./constants";

function Appartments() {
  const methods = useForm({ defaultValues: { apartments: "privateHouse" } });

  const route = useRouter();

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center gap-4 mb-5"
        onSubmit={methods.handleSubmit((data) => {
          route.push(`/config/${data?.apartments}`);
        })}
      >
        <RadioButtonsGroup
          name="apartments"
          options={RADIO_OPTIONS}
          className="flex flex-row gap-4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Выбрать
        </button>
      </form>
    </FormProvider>
  );
}

export default Appartments;
