export interface ResponseBannerInfo {
  title: string;
  images: string[];
  description: string;
  subtitle: string;
}

export interface Serie {
  image: string;
  description: string;
  title: string;
  trailer: string;
}
export interface ResponseMainSeries {
  series: Serie[];
}
