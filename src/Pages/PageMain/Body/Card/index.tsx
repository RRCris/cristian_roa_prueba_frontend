import "./style.scss";
import Typografy from "@/components/Typografy";

interface PropsCard {
  image: string;
  title: string;
  description: string;
  trailer: string;
}
export default function Card(props: PropsCard) {
  return (
    <section className="Card">
      <a target="_blank" href={props.trailer}>
        <img src={props.image} alt={props.title} />
        <span>Click para ver trailer</span>
      </a>
      <main>
        <Typografy variant="CardTitle">{props.title}</Typografy>
        <Typografy variant="BodyText">{props.description}</Typografy>
      </main>
    </section>
  );
}
