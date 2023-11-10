import React from "react";
import "./style.scss";
import Card from "@/Pages/PageMain/Body/Card";
import Form from "@/Pages/PageMain/Body/Form";
import Typografy from "@/components/Typografy";

const data = {
  image: "https://starsmydestination.files.wordpress.com/2023/10/image-47.png",
  title: "Loki Season 2",
  description:
    "Los Lokis están maldecidos con un propósito glorioso, y lo volverán a estar en la temporada 2 de 'Loki' en Disney+",
  trailer: "https://www.youtube.com/watch?v=DkskOhoQpuo",
};
export default function Body() {
  return (
    <div className="Body">
      <div className="carrucel">
        <Card {...data} />
        <Card {...data} />
        <Card {...data} />
        <Card {...data} />
        <Card {...data} />
      </div>
      <div className="contentTitle">
        <Typografy variant="SubtitlePage" color="#000">
          Tus Datos
        </Typografy>
      </div>
      <Form />
    </div>
  );
}
