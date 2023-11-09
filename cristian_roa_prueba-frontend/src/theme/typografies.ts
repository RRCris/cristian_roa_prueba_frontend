import styled from "styled-components";

//desde aqui podemos agregar nuevas typografias o modificar las existentes
//esto permite tener control de todos los textos a lo largo del proyecto
export const Typografies = {
  TitlePage: styled.h1`
    font-family: Roboto;
    font-weight: 300;
    font-style: normal;
    font-size: 9rem;
  `,
  SubtitlePage: styled.h2`
    font-family: Roboto;
    font-weight: 700;
    font-style: normal;
    font-size: 4rem;
  `,
  BodyText: styled.p`
    font-family: Roboto;
    font-weight: 200;
    font-style: normal;
    font-size: 1rem;
  `,
  CardTitle: styled.h3`
    font-family: Roboto;
    font-weight: 600;
    font-style: normal;
    font-size: 2.5rem;
  `,
  BodySubtitle: styled.h5`
    font-family: Roboto;
    font-weight: 600;
    font-style: normal;
    font-size: 1.1rem;
  `,
};

export type Variants = keyof typeof Typografies;
