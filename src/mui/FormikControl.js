import React from "react";
// import CheckBoxGroupMui from "./CheckBoxGroupMui";
import Input from "./InputMui";
import RadioButtonsMui from "./RadioButtonsMui";
import SelectMui from "./SelectMui";
import TextareaMui from "./TextareaMui";
import DatePickerMui from "./DatePickerMui";

function FormikControl(props) {
  const { control, row, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextareaMui control={control} row={row} {...rest} />;
    case "select":
      return <SelectMui {...rest} />;
    case "radio":
      return <RadioButtonsMui {...rest} />;
    // case "checkbox":
    //   return <CheckBoxGroupMui {...rest} />;
    case "date":
      return <DatePickerMui {...rest} />;

    default:
      return null;
  }
}

export default FormikControl;
