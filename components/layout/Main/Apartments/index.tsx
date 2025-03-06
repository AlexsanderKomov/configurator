import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import RadioButtonsGroup from "@/components/uikit/RadioButtonGroup";

import { RADIO_OPTIONS } from "./constants";
import Button from "@/components/uikit/Button";

function Appartments() {
  const methods = useForm({ defaultValues: { apartments: "private_house" } });

  const route = useRouter();

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center gap-4 mb-5"
        onSubmit={methods.handleSubmit((data) => {
          route.push(`/configurator/${data?.apartments}`);
        })}
      >
        <RadioButtonsGroup
          name="apartments"
          options={RADIO_OPTIONS}
          className="flex flex-row gap-4"
        />
        <Button type="submit" text="Выбрать" />
      </form>
    </FormProvider>
  );
}

export default Appartments;
