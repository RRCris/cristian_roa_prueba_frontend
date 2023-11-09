import React, { ChangeEventHandler } from "react";
import "./style.scss";
import Typografy from "../Typografy";

interface PropsRadioButton {
  label?: string;
  name?: string;
  value?: string;
  onChange?: ChangeEventHandler;
}
export default function RadioButton(props: PropsRadioButton) {
  return (
    <label className="RadioButton">
      <Typografy variant="BodyText">{props.label}</Typografy>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      <i />
    </label>
  );
}
