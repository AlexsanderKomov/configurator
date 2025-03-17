import { RADIO_OPTIONS_INTERCOM } from "../constants";
import RadioForm from "../RadioForm";

function Intercom() {
  return (
    <div className="flex flex-col items-center">
      <p>Как бы вы хотели собрать домофон?</p>
      <RadioForm name="intercom" options={RADIO_OPTIONS_INTERCOM} />
    </div>
  );
}

export default Intercom;
