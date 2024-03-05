import { Formik, Form, useField, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
// which we can spread on <input>. We can use field meta to show an error
// message if the field is invalid and it has been touched (i.e. visited)
const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 ">{meta.error}</div>
      ) : null}
    </div>
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
            message: "",
          }}
          validationSchema={Yup.object({
            lastName: Yup.string()
              .max(30, "Doit comporter 30 caractères maximum")
              .required("Requis"),
            firstName: Yup.string()
              .max(20, "Doit comporter 20 caractères maximum")
              .required("Requis"),
            companyName: Yup.string()
              .max(25, "Doit comporter 25 caractères maximum")
              .required("Requis"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Requis"),
            phone: Yup.string().required("Requis"),
            message: Yup.string()
              .min(70, "Doit comporter 70 caractères minimum")
              .required("Requis"),
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
              className=" block  w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none" //focus:outline-none est obligé pour enlever le border par défaut quand on clique sur l'input et que le border bleu qu'on veut s'applique quand on clique
            />

            <MyTextInput
              label="Prénom"
              name="firstName"
              type="text"
              placeholder="Votre Prénom"
              className=" block  w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
            />

            <MyTextInput
              label="Société"
              name="companyName"
              type="text"
              placeholder="Nom de votre société"
              className=" block  w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
            />

            <MyTextInput
              label="E-mail"
              name="email"
              type="email"
              placeholder="Votre e-mail"
              className=" block  w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
            />

            <MyTextInput
              label="Téléphone"
              name="phone"
              type="tel"
              placeholder="Votre numéro"
              className=" block  w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
            />

            <div>
              <label htmlFor="message">Message</label>
              <Field
                id="message"
                name="message"
                as="textarea"
                placeholder="Votre message"
                rows="5"
                className=" block  w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none" 
                />
              <ErrorMessage
                name="message"
                component="div"
                className="error text-sm text-red-500"
              />
            </div>

            <button
              type="submit"
              className="mt-5 rounded  bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-blue-500"
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
