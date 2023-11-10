import "./style.scss";
import Image from "@/components/Image";
import Loader from "@/components/Loader";
interface PropsHeader {
  title?: string;
  subtitle?: string;
  description?: string;
  images?: string[];
}
export default function Header(props: PropsHeader) {
  if (!props.title) return <Loader />;
  return (
    <div className="Header">
      <div className="containerImages">
        {props.images &&
          props.images.map((img, key) => (
            <div className={"image" + key}>
              <img key={key} src={img} alt="imagen de portada" />
            </div>
          ))}
      </div>
    </div>
  );
}
