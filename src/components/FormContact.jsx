import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
// which we can spread on <input>. We can use field meta to show an error
// message if the field is invalid and it has been touched (i.e. visited)
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these templates to create different inpiuts easily
const FormContact = () => {
  return (
    <>
      <div className="mx-auto mb-4 max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <Formik
          initialValues={{
            lastName: "",
            firstName: "",
            companyName: "",
            email: "",
            phone: "",
          }}
          validationSchema={Yup.object({
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            companyName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            acceptedTerms: Yup.boolean()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions."),
            jobType: Yup.string()
              .oneOf(
                ["designer", "development", "product", "other"],
                "Invalid Job Type",
              )
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <MyTextInput
              label="Nom"
              name="lastName"
              type="text"
              placeholder="Votre Nom de famille"
              className=" block  w-full appearance-none rounded border px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
            />

            <MyTextInput
              label="Prénom"
              name="firstName"
              type="text"
              placeholder="Votre Prénom"
              className="block w-full appearance-none rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-blue-500"
            />

            <MyTextInput
              label="Société"
              name="companyName"
              type="text"
              placeholder="Nom de votre société"
              className="block w-full appearance-none rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-blue-500"
            />

            <MyTextInput
              label="E-mail"
              name="email"
              type="email"
              placeholder="Votre e-mail"
              className="block w-full appearance-none rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-blue-500"
            />

            <MyTextInput
              label="Téléphone"
              name="phone"
              type="tel"
              placeholder="Votre numéro"
              className="block w-full appearance-none rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-blue-500"
            />

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                rows="5"
                className="block w-full appearance-none rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="rounded  bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-blue-500"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default FormContact;
