import React from "react";
import "./style.scss";
import Image from "@/components/Image";
interface PropsHeader {
  title?: string;
  subtitle?: string;
  description?: string;
  images?: string[];
}
export default function Header(props: PropsHeader) {
  if (!props.title) return <h1>load...</h1>;
  return (
    <div className="Header">
      <div className="containerImages">
        <Image
          src={props.images ? props.images[0] : ""}
          alt="imagen de portada"
        />
      </div>
    </div>
  );
}
