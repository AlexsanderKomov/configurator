import { RADIO_OPTIONS_LOCK } from "../constants";
import RadioForm from "../RadioForm";

function Lock() {
  return (
    <div className="flex flex-col items-center">
      <p>Выберите замок если он вам нужен</p>
      <RadioForm name="lock" options={RADIO_OPTIONS_LOCK} />
    </div>
  );
}

export default Lock;
