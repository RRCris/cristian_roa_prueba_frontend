import React from "react";
import "./style.scss";
import Header from "./Header";
import Body from "./Body";

const data = {
  title: "titulo pelicula",
  subtitle: "estrenada en febrero del 2024",
  description:
    "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo so",
  images: [
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "https://i.pinimg.com/originals/63/9e/93/639e93a9aa4dc0028d55b18c1ab5abf1.jpg",
  ],
};
export default function PageMain() {
  return (
    <div className="PageMain">
      <Header {...data} />
      <Body />
    </div>
  );
}
