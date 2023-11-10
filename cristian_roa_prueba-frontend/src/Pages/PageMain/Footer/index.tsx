import React from "react";
import "./style.scss";
import Typografy from "@/components/Typografy";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="containerColumns">
        <div>
          <Typografy variant="BodySubtitle">
            Es libre de utilizar la Build
          </Typografy>
          <Typografy variant="BodyText">
            Es libre de utilizar la Build
          </Typografy>
        </div>
        <div>
          <Typografy variant="BodySubtitle">
            Es libre de utilizar la Build
          </Typografy>
          <Typografy variant="BodyText">
            Es libre de utilizar la Build
          </Typografy>
        </div>
        <div>
          <Typografy variant="BodySubtitle">
            Es libre de utilizar la Build
          </Typografy>
          <Typografy variant="BodyText">
            Es libre de utilizar la Build
          </Typografy>
        </div>
      </div>
      <div className="caption">
        <Typografy variant="CaptionText">
          La prueba deberá desarrollarse en React. Es libre de utilizar la Build
          Tool de su preferencia.
        </Typografy>
      </div>
    </div>
  );
}
