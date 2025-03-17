import { RADIO_OPTIONS_LOCK } from "../constants";
import RadioForm from "../RadioForm";

function Lock() {
  return (
    <div className="flex flex-col items-center">
      <p>Нужно ли вам дополнительное оборудование на вход?</p>
      <RadioForm name="lock" options={RADIO_OPTIONS_LOCK} />
    </div>
  );
}

export default Lock;
