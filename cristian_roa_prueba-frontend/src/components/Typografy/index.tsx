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
        opacity: props.animate ? 0 : 1,
        color: props.color,
        animation: props.animate + " .8s",
        animationDelay: props.delay + "ms",
        animationFillMode: "forwards",
      }}
    >
      {props.children}
    </Vr>
  );
}
