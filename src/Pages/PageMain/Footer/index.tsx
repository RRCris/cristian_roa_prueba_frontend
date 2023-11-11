import "./style.scss";
import Typografy from "@/components/Typografy";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="containerColumns">
        <div>
          <Typografy variant="BodySubtitle">
            Todo lo dicho en esta pagina
          </Typografy>
          <Typografy variant="BodyText">
            es de ejemplifacion y no existe
          </Typografy>
        </div>
        <div>
          <Typografy variant="BodySubtitle">
            Esta pagina fue hecha con amor
          </Typografy>
          <Typografy variant="BodyText">
            Sientase libre de disfrutarla
          </Typografy>
        </div>
        <div>
          <Typografy variant="BodySubtitle">
            Diseño y Colorizacion adaptados
          </Typografy>
          <Typografy variant="BodyText">por cristian david roa</Typografy>
        </div>
      </div>
      <div className="caption">
        <Typografy variant="CaptionText">
          Este es un boiler plate diseñado y desarrollado por{" "}
          <a href="https://www.linkedin.com/in/devcris2023/" target="_blank">
            Cristian Roa
          </a>{" "}
          cualquier plaguio esta prohibido
        </Typografy>
      </div>
    </div>
  );
}
