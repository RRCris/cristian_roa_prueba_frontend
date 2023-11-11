import React from "react";
import "./style.scss";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useResponse } from "@/hooks/useResponse";
import { ServiceGetBannerInfo } from "@/services/movie";

export default function PageMain() {
  const { value, error } = useResponse(ServiceGetBannerInfo, true);

  //con la variable error podriamos mostarr un banner en caso de error de servidor o de conexion o de formato de datos
  return (
    <div className="PageMain">
      <Header {...value} />
      <Body />
      <Footer />
    </div>
  );
}
