import React, { ChangeEventHandler } from "react";
import "./style.scss";
import Typografy from "../Typografy";

interface PropsField {
  title?: string;
  name?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
}
export default function Field(props: PropsField) {
  return (
    <label className="Field">
      <Typografy variant="BodySubtitle">{props.title}</Typografy>
      <input
        type="text"
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </label>
  );
}
