import React from "react";
import "./style.scss";
import Card from "@/Pages/PageMain/Body/Card";
import Form from "@/Pages/PageMain/Body/Form";
import Typografy from "@/components/Typografy";
import Slider from "react-slick";

const data = {
  image: "https://starsmydestination.files.wordpress.com/2023/10/image-47.png",
  title: "Loki Season 2",
  description:
    "Los Lokis están maldecidos con un propósito glorioso, y lo volverán a estar en la temporada 2 de 'Loki' en Disney+",
  trailer: "https://www.youtube.com/watch?v=DkskOhoQpuo",
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Body() {
  return (
    <div className="Body">
      <div className="carrucel">
        <div className="carrucel1">
          <Slider {...settings}>
            <Card {...data} />
            <Card {...data} />
            <Card {...data} />
            <Card {...data} />
            <Card {...data} />
          </Slider>
        </div>
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
