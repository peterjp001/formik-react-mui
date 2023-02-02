import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React from "react";

// const CustomizedSelectForFormik = ({ children, form, field }) => {
//   const { name, value } = field;
//   const { setFieldValue } = form;

//   return (
//     <Select
//       name={name}
//       value={value}
//       onChange={(e) => {
//         setFieldValue(name, e.target.value);
//       }}
//     >
//       {children}
//     </Select>
//   );
// };

function SelectMui(props) {
  const { label, error, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <FormControl error={error} sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={name}>{label}</InputLabel>
        <Field name={name}>
          {({ form, field }) => {
            const { name, value } = field;
            const { setFieldValue } = form;
            return (
              <Select
                {...rest}
                name={name}
                value={value}
                onChange={(e) => {
                  setFieldValue(name, e.target.value);
                }}
              >
                {options.map((option) => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.key}
                    </MenuItem>
                  );
                })}
              </Select>
            );
          }}
        </Field>
        {error && <FormHelperText>{"Required"}</FormHelperText>}
      </FormControl>
    </div>
  );
}

export default SelectMui;
