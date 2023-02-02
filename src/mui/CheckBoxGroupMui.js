import React from "react";
import { Field } from "formik";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Checkbox } from "@mui/material";

function CheckBoxGroupMui(props) {
  const { label, name, error, options, ...rest } = props;
  return (
    <div className="form-control">
      <FormControl error={error}>
        <FormLabel id={name}>{label}</FormLabel>
        <Field name={name}>
          {({ form, field }) => {
            const { name, value } = field;
            const { setFieldValue } = form;
            const handleChange = (evt) => {
              setFieldValue(name, evt.target.value);
            };
            const configCheckbox = {
              ...field,
              onChange: handleChange,
            };

            return (
              <RadioGroup row aria-labelledby={name} {...rest} name={name}>
                {options.map((option) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          onChange={(evt) =>
                            setFieldValue(name, evt.target.value)
                          }
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

export default CheckBoxGroupMui;
