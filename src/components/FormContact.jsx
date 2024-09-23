import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const FormContact = () => {


  const sendEmail = (data) => {
    return emailjs.send(
      "service_pjw8ixl", //service_id => A trouver dans Section Email services
      "template_4371vsw", //template_id => A trouver dans section Email templates => Settings
      data,
      "jbn6FFUwLocXKxqvT", //publicKey: A trouver dans account => API Keys
    );
  };

  return (
    <>
      <div className=" mx-auto mb-4 max-w-md rounded bg-gray-50 px-8 pb-8 pt-6 shadow-2xl max-lg:border max-lg:border-slate-400">
        {/* The initialValues in Formik are used to define the default values for the form fields */}
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
              .min(40, "Doit comporter 40 caractères minimum")
              .required("Requis"),
          })}
          onSubmit={async (values, { resetForm }) => {
            // En 1er: le paramètre "values" capture les valeurs écrites dans le formulaire, donc même si on reset le form avant envoie, values stockera toujours les valeurs
            alert("Formulaire envoyé:\nNous vous répondrons dès que possible");
            console.log("Form submitted with values: ", values); //Permet de voir dans la console ce qui a été rempli dans le formulaire après avoir cliquer sur envoyer
            resetForm(); //Reset l'affichage des valeurs sur la page, mais values store toujours les valeurs écrites dans le formulaire

            try {
              const result = await sendEmail(values); //Appel de la function sendEmail avec pour argument 'values' => valeurs du formulaire capturés par Formik
              console.log("Email sent successfully", result);
            } catch (error) {
              console.error("Error sending Email:", error);
            }
          }}
        >
          <Form>
            <div className="mb-2">
              <label htmlFor="lastName">Nom</label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="block w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
              />
              {/* ErrorMessage est ce qui permet de voir "Requis", si on appuie sur le champ mais qu'on ne le remplit pas et qu'on passe à un autre champ */}
              <ErrorMessage
                name="lastName"
                component="div"
                className="error text-sm text-red-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="firstName">Prénom</label>
              <Field
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="block w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error text-sm text-red-500"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="companyName">Société</label>
              <Field
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Company Name"
                className="block w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="error text-sm text-red-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email">E-mail</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                className="block w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error text-sm text-red-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="phone">Téléphone</label>
              <Field
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="block w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error text-sm text-red-500"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="message">Message</label>
              <Field
                id="message"
                name="message"
                as="textarea"
                placeholder="Your message"
                rows="5"
                className="block w-full rounded border-2 px-3 py-2 leading-tight focus:border-blue-500 focus:outline-none"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error text-sm text-red-500"
              />
            </div>

            <button
              type="submit" //Dans un Formulaire Formik, lorsqu'on clique sur un bouton de type="submit", il appelle automatquement la fonction onSubmit définie dans le composant Formik
              className="mt-5 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-blue-500"
            >
              Envoyer
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default FormContact;
