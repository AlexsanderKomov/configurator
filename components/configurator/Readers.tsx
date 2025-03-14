import { RADIO_OPTIONS_READERS } from "./constants";
import RadioForm from "./RadioForm";

function Readers() {
  return (
    <div>
      <p>Нужно ли вам дополнительное оборудование на вход?</p>
      <RadioForm name="readers" options={RADIO_OPTIONS_READERS} />
    </div>
  );
}

export default Readers;
