import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button } from "@mui/material";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];
  const initialValues = {
    fullName: "",
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    // checkboxOption: [],
    // birthDate: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid Email Format"),
    description: Yup.string().required("Required"),
    fullName: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    // checkboxOption: Yup.array().required("Required"),
    // birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log("form data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="text"
              label="FullName"
              name="fullName"
            />
            <FormikControl
              row={6}
              control="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              error={
                formik.errors["selectOption"] && formik.touched["selectOption"]
              }
              options={dropdownOptions}
            />

            <FormikControl
              control="radio"
              label="Radio topic"
              name="radioOption"
              error={
                formik.errors["radioOption"] && formik.touched["radioOption"]
              }
              options={radioOptions}
            />
            {/* <FormikControl
              control="checkbox"
              label="Checkbox topics"
              name="checkboxOption"
              options={checkboxOptions}
            /> */}
            <FormikControl control="date" label="Pik a date" name="birthdate" />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
