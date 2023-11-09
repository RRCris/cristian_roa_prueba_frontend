import React, { ReactNode, useState } from "react";
import "./style.scss";

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
      <div>
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
  return (
    <div onClick={handleClick}>
      <p>{props.data.title}</p>
      {show &&
        props.data.options &&
        props.data.options.map(
          (op: Option, key: React.Key | null | undefined) => (
            <MenuItem key={key} data={op} />
          )
        )}
    </div>
  );
}

function MenuItem(props: { data: Option }) {
  return (
    <div onClick={props.data.onCLick}>
      <p>{props.data.title}</p>
    </div>
  );
}
