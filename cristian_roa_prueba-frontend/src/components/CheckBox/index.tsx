import { ChangeEventHandler, ReactNode } from "react";
import "./style.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Typografy from "../Typografy";

interface PropsCheckBox {
  name?: string;
  label?: string;
  children?: ReactNode;
  onChange?: ChangeEventHandler;
}
export default function CheckBox(props: PropsCheckBox) {
  return (
    <label className="CheckBox">
      <Typografy variant="BodyText">{props.label}</Typografy>
      <input
        type="checkbox"
        name={props.name}
        value={props.name}
        onChange={props.onChange}
      />
      <i className="">
        <Icon icon="iconamoon:check-duotone" className="icon" />
      </i>
    </label>
  );
}
