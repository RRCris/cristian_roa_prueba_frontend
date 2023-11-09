import styled from "styled-components";

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
};

export type Variants = keyof typeof Typografies;
