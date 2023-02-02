import React from "react";
import { Field } from "formik";
import { TextField } from "@mui/material";

function TextareaMui(props) {
  const { label, control, size, row, name, ...rest } = props;
  return (
    <div className="form-control">
      <Field name={name}>
        {({ field, form }) => {
          return (
            <TextField
              multiline
              rows={row}
              size={size}
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

export default TextareaMui;
