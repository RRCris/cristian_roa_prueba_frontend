import { DataBannerInfo } from "@/mock/pelis";

export function GetBannerInfo() {
  return new Promise((res) => {
    setTimeout(() => res(DataBannerInfo));
  });
}
