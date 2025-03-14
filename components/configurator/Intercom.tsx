import RadioForm from "./RadioForm";
import { RADIO_OPTIONS_INTERCOM } from "./constants";

function Intercom() {
  return (
    <div>
      <p>Как бы вы хотели собрать домофон?</p>
      <RadioForm name="intercom" options={RADIO_OPTIONS_INTERCOM} />
    </div>
  );
}

export default Intercom;
