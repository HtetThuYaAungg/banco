import React from "react";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";
import Select from "../components/utils/Select";
import Textarea from "../components/utils/Textarea";
import Label from "../components/utils/Label";
import { BUTTON } from "../constants/utils";

function FormDemo() {
  return (
    <form>
      <Label labelText="User Name"/>
      <Input placeholder="User name" />
      <br />
      <br />
      <Textarea placeholder="Details" />
      <br />
      <Select
        options={[
          {
            text: "Abank",
            value: "abank",
          },
          {
            text: "Kbz",
            value: "Kbz",
          },
        ]}
      />
      <br />
      <br />
      <Button btnTitle="Register" />
      &nbsp;&nbsp;
      <Button btnTitle="Cancel" btnType={[BUTTON.CANCEL]} />
      <br />
      <br />
      <Button btnTitle="Signin" btnType={[BUTTON.FULLWIDTH, BUTTON.DANGER]} />
    </form>
  );
}

export default FormDemo;
