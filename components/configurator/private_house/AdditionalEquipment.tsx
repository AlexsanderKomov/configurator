import { RADIO_OPTIONS_ADDITIONAL_EQUIPMENT } from "../constants";
import RadioForm from "../RadioForm";

function AdditionalEquipment() {
  return (
    <div>
      <p>Нужно вам дополнительное оборудование?</p>
      <RadioForm
        name="additional_equipment"
        options={RADIO_OPTIONS_ADDITIONAL_EQUIPMENT}
      />
    </div>
  );
}

export default AdditionalEquipment;
