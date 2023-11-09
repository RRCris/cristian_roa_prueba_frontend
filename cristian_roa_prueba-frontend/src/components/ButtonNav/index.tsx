import React, { ReactNode, useState } from "react";
import "./style.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

type Option = {
  onCLick(): void;
  title: string;
};
type OptionGrop = {
  onClick?(): void;
  options?: Option[];
  title: string;
};

export type MS = OptionGrop[];

interface PropsButtonNav {
  children?: ReactNode;
  onClick?(): void;
  data?: MS;
}

export default function ButtonNav(props: PropsButtonNav) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (props.data) setShow(!show);
    else props.onClick && props.onClick();
  };
  return (
    <div className="ButtonNav">
      <button className="but" onClick={handleClick}>
        {props.children}
      </button>
      <MenuSelect show={show} data={props.data} />
    </div>
  );
}

function MenuSelect({ show, data }: { show: boolean; data?: MS }) {
  if (show) {
    return (
      <div className="MenuSelect">
        {data?.map((op, key) => (
          <div key={key}>{<MenuOption data={op} />}</div>
        ))}
      </div>
    );
  }

  return <></>;
}

function MenuOption(props: { data: OptionGrop }) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    props.data.onClick && props.data.onClick();
    setShow(!show);
  };

  const drop = show && props.data.options;
  return (
    <div onClick={handleClick} className="MenuOption">
      <div className="contentHead">
        <p style={{ fontWeight: drop ? 900 : undefined }}>{props.data.title}</p>
        {props.data.options && (
          <Icon
            icon={"ri:arrow-drop-right-line"}
            width={27}
            height={27}
            className={show ? "openDrop" : ""}
          />
        )}
      </div>
      <div className={drop ? "openItems" : ""}>
        {drop &&
          props.data.options?.map(
            (op: Option, key: React.Key | null | undefined) => (
              <MenuItem key={key} data={op} />
            )
          )}
      </div>
    </div>
  );
}

function MenuItem(props: { data: Option }) {
  return (
    <div onClick={props.data.onCLick} className="MenuItem">
      <p>{props.data.title}</p>
    </div>
  );
}
