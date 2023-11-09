import React, { ReactNode } from "react";
import { Typografies, Variants } from "@/theme/typografies";

interface PropsTypografy {
  children?: ReactNode;
  variant?: Variants;
  color?: string;
}
export default function Typografy(props: PropsTypografy) {
  const Vr = Typografies[props.variant || "SubtitlePage"];
  return <Vr style={{ color: props.color }}>{props.children}</Vr>;
}
