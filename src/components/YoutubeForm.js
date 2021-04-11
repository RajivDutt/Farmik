import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {};
const onSubmit = (values) => {
  console.log("form data", values);
};

const validate = (values) => {};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
