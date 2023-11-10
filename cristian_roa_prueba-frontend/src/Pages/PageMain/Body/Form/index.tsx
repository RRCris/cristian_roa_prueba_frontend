import React from "react";
import "./style.scss";
import MultiSelect from "@/components/MultiSelect";
import RadioButton from "@/components/RadioButton";
import Field from "@/components/Field";
import Button from "@/components/Button";

export default function Form() {
  return (
    <form className="Form">
      <div className="containerPartForm">
        <MultiSelect
          title="Select"
          data={["Option 1", "Option 2", "Option 3", "Option 4"]}
        />
        <br />
      </div>
      <div className="containerPartForm">
        <div className="bgcolor">
          <RadioButton label="Option 1" name="Radio" value="option 1" />
          <RadioButton label="Option 2" name="Radio" value="option 2" />
          <RadioButton label="Option 3" name="Radio" value="option 3" />
          <RadioButton label="Option 4" name="Radio" value="option 4" />
        </div>
      </div>
      <div className="containerPartForm">
        <Field placeholder="Put your Name here!" name="name" title="Name:" />
        <Field placeholder="Put your Email here!" name="email" title="Email:" />
        <div className="Render"></div>
        <Button color="white">Submit</Button>
      </div>
    </form>
  );
}
