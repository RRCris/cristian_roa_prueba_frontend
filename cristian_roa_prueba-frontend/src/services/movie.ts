import { DataBannerInfo, DataMainSeries } from "@/mock/pelis";

//aqui se realizaria cualquier tratado de datos como validar, cambiar, mappear, Typar,
//y si algo esta mal puedes tirar error
export function ServiceGetBannerInfo() {
  return new Promise((res) => {
    setTimeout(() => res(DataBannerInfo), 3000 + Math.random() * 3000);
  });
}

export function ServiceGetMainSeries() {
  return new Promise((res) => {
    setTimeout(() => res(DataMainSeries), 3000 + Math.random() * 3000);
  });
}
