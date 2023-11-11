import React, { ReactNode } from "react";
import { Typografies, Variants } from "@/theme/typografies";
import "./style.scss";

interface PropsTypografy {
  children?: ReactNode;
  variant?: Variants;
  color?: string;
  animate?: "drop-left";
  delay?: number;
}
export default function Typografy(props: PropsTypografy) {
  const Vr = Typografies[props.variant || "SubtitlePage"];
  return (
    <Vr
      style={{
        color: props.color,
        animation: props.animate + " 1s",
        animationDelay: "" + props.delay,
      }}
    >
      {props.children}
    </Vr>
  );
}
