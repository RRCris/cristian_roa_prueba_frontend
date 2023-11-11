import React from "react";
import "./style.scss";
import Card from "@/Pages/PageMain/Body/Card";
import Form from "@/Pages/PageMain/Body/Form";
import Typografy from "@/components/Typografy";
import Slider from "react-slick";
import { useResponse } from "@/hooks/useResponse";
import { ServiceGetMainSeries } from "@/services/movie";
import Loader from "@/components/Loader";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Body() {
  const { value, loading } = useResponse(ServiceGetMainSeries, true);
  ///se podria mostrar banner o un mejor manejo de errores de haber más tiempo

  if (loading)
    return (
      <div className="skeleton">
        <Loader />
      </div>
    );
  return (
    <div className="Body">
      <div className="contentTitle">
        <Typografy variant="TitlePage" color="#000">
          Series Estelares
        </Typografy>
      </div>
      <div className="carrucel">
        <Slider {...settings}>
          {value.series.map((card: any, key: number) => (
            <Card {...card} key={key} />
          ))}
        </Slider>
      </div>
      <div className="contentTitle">
        <Typografy variant="SubtitlePage" color="#000">
          Deja Tus Datos👇
        </Typografy>
        <Typografy variant="BodySubtitle" color="#000">
          Para recibir más información
        </Typografy>
      </div>
      <Form />
    </div>
  );
}
