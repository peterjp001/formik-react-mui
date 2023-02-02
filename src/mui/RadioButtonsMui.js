import React from "react";
import { Field, ErrorMessage } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function RadioButtonsMui(props) {
  const { label, name, error, options, ...rest } = props;
  return (
    <div className="form-control">
      <FormControl error={error}>
        <FormLabel id={name}>{label}</FormLabel>
        <Field name={name}>
          {({ form, field }) => {
            const { name, value } = field;
            const { setFieldValue } = form;
            return (
              <RadioGroup
                row
                aria-labelledby={name}
                {...rest}
                name={name}
                value={value}
                onChange={(e) => {
                  setFieldValue(name, e.target.value);
                }}
              >
                {options.map((option) => {
                  return (
                    <FormControlLabel
                      control={
                        <Radio
                          sx={{ color: error ? "red" : "" }}
                          checked={field.value === option.value}
                        />
                      }
                      key={option.value}
                      value={option.value}
                      label={option.key}
                    />
                  );
                })}
              </RadioGroup>
            );
          }}
        </Field>
      </FormControl>
    </div>
  );
}

export default RadioButtonsMui;
