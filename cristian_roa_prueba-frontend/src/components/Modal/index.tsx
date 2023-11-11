import "./style.scss";
import Typografy from "../Typografy";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useOnline } from "@/hooks/useOnline";

export default function Modal() {
  const online = useOnline();
  if (online) return;
  return (
    <div className={online ? "Modal on" : "Modal off"}>
      <Icon
        icon={online ? "icon-park-solid:check-one" : "ph:wifi-x-bold"}
        width={35}
        height={35}
      />
      <Typografy variant="BodySubtitle">
        {online ? "Por fin, ha vuelto!!" : "Ups, Te quedaste sin internet"}
      </Typografy>
    </div>
  );
}
