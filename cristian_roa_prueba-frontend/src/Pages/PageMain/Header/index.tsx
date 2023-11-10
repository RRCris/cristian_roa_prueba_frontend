import Button from "@/components/Button";
import "./style.scss";
import Loader from "@/components/Loader";
import Typografy from "@/components/Typografy";

interface PropsHeader {
  title?: string;
  subtitle?: string;
  description?: string;
  images?: string[];
}
export default function Header(props: PropsHeader) {
  if (!props.title) return <Loader />;
  return (
    <header className="Header">
      <div className="containerImages">
        {props.images &&
          props.images.map((img, key) => (
            <div className={"image" + key} key={key}>
              <img src={img} alt="imagen de portada" />
            </div>
          ))}
      </div>
      <main className="containerText">
        <Typografy variant="TitlePage">{props.title}</Typografy>
        <Typografy variant="SubtitlePage">{props.subtitle}</Typografy>
        <Typografy variant="BodyText">{props.description}</Typografy>
        <Button icon="icon-park-solid:play" iconPosition="right">
          Go there...
        </Button>
      </main>
    </header>
  );
}
