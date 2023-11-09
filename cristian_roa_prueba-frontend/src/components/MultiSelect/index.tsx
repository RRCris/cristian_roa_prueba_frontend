import React, { useState, ChangeEventHandler, useEffect } from "react";
import "./style.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import CheckBox from "../CheckBox";

interface PropsMultiSelect {
  title?: string;
  data: string[];
  onChange?(select: string[]): void;
}
export default function MultiSelect(props: PropsMultiSelect) {
  const [open, SetOpen] = useState(false);
  const [select, SetSelect] = useState<string[]>([]);

  useEffect(() => {
    props.onChange && props.onChange(select);
  }, [select]);

  const handleFunction: ChangeEventHandler = (e) => {
    if (e.target.checked) SetSelect([...select, e.target.value]);
    else SetSelect(select.filter((op) => op != e.target.value));
  };
  return (
    <div className="MultiSelect">
      <div className="bar" onClick={() => SetOpen(!open)}>
        <i>{props.title}</i>
        <Icon
          icon="solar:arrow-down-broken"
          width={28}
          height={28}
          className={open ? "openIcon" : "closeIcon"}
        />
      </div>

      {open && (
        <div className="optionsMenu">
          {props.data.map((op, key) => (
            <CheckBox
              label={op}
              key={key}
              name={op}
              onChange={handleFunction}
            />
          ))}
        </div>
      )}
    </div>
  );
}
