import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

function InputMui(props) {
  const { label, size, name, ...rest } = props;
  return (
    <div className="form-control">
      <Field name={name}>
        {({ field, form }) => {
          return (
            <TextField
              error={form.errors[name] && form.touched[name]}
              id={name}
              label={label}
              helperText={
                form.errors[name] && form.touched[name]
                  ? form.errors[name]
                  : null
              }
              {...rest}
              {...field}
            />
          );
        }}
      </Field>
    </div>
  );
}

export default InputMui;
