import React from "react";
 import { Field, ErrorMessage } from "formik";
// import TextError from "./TextError";
 import { TextField } from "@mui/material";

function DatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          <TextField
            type="date"
            defaultValue="2019-05-24"
            inputProps={{ min: "2019-01-24", max: "2020-05-31" }}
          />;
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  );
}

export default DatePicker;
