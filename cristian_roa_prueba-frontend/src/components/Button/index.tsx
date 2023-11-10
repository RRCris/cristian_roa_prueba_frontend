import { ReactNode } from "react";
import "./style.scss";
import { Icon } from "@iconify/react";
interface PropsButton {
  color?: "black" | "white";
  icon?: string;
  iconPosition?: "left" | "right";
  children?: ReactNode;
  onClick?(): void;
}
//el objetivo de este componente es: renderizar todos los botones
//y atravez de props sencillas personalizar la apariencia
export default function Button(props: PropsButton) {
  return (
    <button
      className="Button"
      style={{
        color: props.color || "black",
      }}
      onClick={props.onClick}
    >
      <div className={props.iconPosition ? "container sb" : "container"}>
        {props.iconPosition === "left" && (
          <Icon
            icon={props.icon || "mdi-light:home"}
            width={22}
            height={22}
            color="#FFF"
            className="animation"
          />
        )}
        {props.children}
        {props.iconPosition === "right" && (
          <Icon
            icon={props.icon || "mdi-light:home"}
            width={22}
            height={22}
            color="#FFF"
            className="animation"
          />
        )}
      </div>
    </button>
  );
}
