import { lg, md } from "@/responsive/mediaqueries";
import styled from "styled-components";

//desde aqui podemos agregar nuevas typografias o modificar las existentes
//esto permite tener control de todos los textos a lo largo del proyecto
export const Typografies = {
  TitlePage: styled.h1`
    font-family: Roboto;
    font-weight: 400;
    font-style: normal;
    font-size: 3.5rem;

    ${md} {
      font-weight: 300;
      font-size: 5.5rem;
    }

    ${lg} {
      font-size: 6rem;
    }
  `,
  SubtitlePage: styled.h2`
    font-family: Roboto;
    font-weight: 700;
    font-style: normal;
    font-size: 2.2rem;

    ${md} {
      font-size: 3.3rem;
    }

    ${lg} {
      font-size: 3.5rem;
    }
  `,
  BodyText: styled.p`
    font-family: Roboto;
    font-weight: 300;
    font-style: normal;
    font-size: 1.5rem;

    ${md} {
      font-size: 1.6rem;
    }
    ${lg} {
      font-size: 1.8rem;
    }
  `,
  CardTitle: styled.h3`
    font-family: Roboto;
    font-weight: 600;
    font-style: normal;
    font-size: 2.3rem;

    ${md} {
      font-size: 2.6rem;
    }
    ${lg} {
      font-size: 3rem;
    }
  `,
  BodySubtitle: styled.h5`
    font-family: Roboto;
    font-weight: 600;
    font-style: normal;
    font-size: 1.6rem;

    ${lg} {
      font-size: 2rem;
    }
  `,
  CaptionText: styled.p`
    font-family: Roboto;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;

    ${md} {
      font-size: 1.1rem;
    }
    ${lg} {
      font-size: 1.3rem;
    }
  `,
};

export type Variants = keyof typeof Typografies;
