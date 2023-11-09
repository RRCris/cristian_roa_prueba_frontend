import React, { ReactNode } from "react";
import { Typografies, Variants } from "@/theme/typografies";

interface PropsTypografy {
  children?: ReactNode;
  variant?: Variants;
}
export default function Typografy(props: PropsTypografy) {
  const Vr = Typografies[props.variant || "SubtitlePage"];
  return <Vr>{props.children}</Vr>;
}
