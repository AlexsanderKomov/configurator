import { IRadioButton } from "./interface";
import styled from "styled-components";

function RadioButton(props: IRadioButton) {
  const { id, label } = props;

  return (
    <StyledWrapper>
      <div className="config flex justify-center items-center">
        <label className="label" htmlFor={id}>
          <input type="radio" {...props} className="radio-input" />
          <div className="radio-design" />
          <div className="label-text">{label}</div>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* MAIN */
  /* =============================================== */
  .label {
    display: flex;
    align-items: center;
    border-radius: 100px;
    padding: 14px 16px;
    margin: 5px 0;
    cursor: pointer;
    transition: 0.3s;
  }

  .label:hover,
  .label:focus-within,
  .label:active {
    background: #99999924;
  }

  .radio-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: -1;
  }

  .radio-design {
    width: 22px;
    height: 22px;
    border-radius: 100px;
    background: linear-gradient(to right bottom, #30ebff, #2563eb);
    position: relative;
  }

  .radio-design::before {
    content: "";
    display: inline-block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: #e6e6e6;
    transform: scale(1.1);
    transition: 0.3s;
  }

  .radio-input:checked + .radio-design::before {
    transform: scale(0);
  }

  .label-text {
    color: #999;
    margin-left: 14px;
    font-size: 18px;
    transition: 0.3s;
  }

  .radio-input:checked ~ .label-text {
    color: #000;
  }
`;

export default RadioButton;
