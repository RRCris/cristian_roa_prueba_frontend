import React, { FormEventHandler, useState } from "react";
import "./style.scss";
import MultiSelect from "@/components/MultiSelect";
import RadioButton from "@/components/RadioButton";
import Field from "@/components/Field";
import Button from "@/components/Button";
import Typografy from "@/components/Typografy";

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const plataformas = values.plataformas?.length
    ? values.plataformas.map((e: string) => " " + e)
    : "Todos nuestros servicios";

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="containerPartForm">
        <Typografy variant="BodyText">Plataformas que te interesan :</Typografy>
        <MultiSelect
          title="Select"
          data={["Netflix", "HBO+", "Star+", "Disney+", "Paramount+"]}
          {...asignation("plataformas")}
        />
        <br />
      </div>
      <div className="containerPartForm" {...asignation("pais")}>
        <Typografy variant="BodyText">Pais en el que vives :</Typografy>
        <div className="bgcolor">
          <RadioButton label="Colombia" name="Radio" value="Colombia" />
          <RadioButton label="Argentina" name="Radio" value="Argentina" />
          <RadioButton label="Mexico" name="Radio" value="Mexico" />
          <RadioButton label="Ecuador" name="Radio" value="Ecuador" />
          <RadioButton label="Panamá" name="Radio" value="Panamá" />
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
