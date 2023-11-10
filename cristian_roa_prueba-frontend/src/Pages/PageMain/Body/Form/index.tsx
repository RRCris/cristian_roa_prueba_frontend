import React, { useState } from "react";
import "./style.scss";
import MultiSelect from "@/components/MultiSelect";
import RadioButton from "@/components/RadioButton";
import Field from "@/components/Field";
import Button from "@/components/Button";

export default function Form() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [values, setValues] = useState<any>({});

  const asignation = (name: string) => {
    return {
      name,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange: (e: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setValues((v: any) => ({ ...v, [name]: e.target.value }));
      },
    };
  };

  const plataformas = values.plataformas?.length
    ? values.plataformas.map((e: string) => " " + e)
    : "Todos nuestros servicios";

  return (
    <form className="Form">
      <div className="containerPartForm">
        <MultiSelect
          title="Select"
          data={["Option 1", "Option 2", "Option 3", "Option 4"]}
          {...asignation("plataformas")}
        />
        <br />
      </div>
      <div className="containerPartForm" {...asignation("pais")}>
        <div className="bgcolor">
          <RadioButton label="Option 1" name="Radio" value="option 1" />
          <RadioButton label="Option 2" name="Radio" value="option 2" />
          <RadioButton label="Option 3" name="Radio" value="option 3" />
          <RadioButton label="Option 4" name="Radio" value="option 4" />
          <RadioButton label="Clear Radios" name="Radio" value="" />
        </div>
      </div>
      <div className="containerPartForm">
        <Field
          placeholder="Put your Name here!"
          {...asignation("name")}
          title="Name:"
        />
        <Field
          placeholder="Put your Email here!"
          {...asignation("email")}
          title="Email:"
        />
        <div className="Render">{`Hola ${
          values.name || "Manuel"
        }, a tu correo(${
          values.email || "GoParadise@asistance.co"
        }) te eviaremos informacion acerca de ${plataformas} en ${
          values.pais || "Colombia"
        } para que puedas descubrir todas nuestras increibles ofertas`}</div>
        <Button color="white">Submit</Button>
      </div>
    </form>
  );
}
