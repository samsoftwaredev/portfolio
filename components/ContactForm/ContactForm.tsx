import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./contact.module.scss";
import * as Yup from "yup";
import { css } from "../../utils";
import { MessageBox } from "./Fields";

const ContactForm = () => {
  const initialValues = { fullName: "", email: "", message: "" };
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required("Required"),
    message: Yup.string()
      .min(10, "Must be 10 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const onSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.fieldContainer}>
            <label
              className={css(styles.fieldLabel, "secondaryText")}
              htmlFor="email"
            >
              Email Address
            </label>
            <Field
              className={styles.field}
              id="email"
              type="email"
              name="email"
            />
            <ErrorMessage
              className={css(styles.errorMessage, "primaryText")}
              name="email"
              component="div"
            />
          </div>
          <div className={styles.fieldContainer}>
            <label
              className={css(styles.fieldLabel, "secondaryText")}
              htmlFor="fullName"
            >
              Full Name
            </label>
            <Field
              className={styles.field}
              id="fullName"
              type="text"
              name="fullName"
            />
            <ErrorMessage
              className={css(styles.errorMessage, "primaryText")}
              name="fullName"
              component="div"
            />
          </div>
          <div className={styles.fieldContainer}>
            <label
              className={css(styles.fieldLabel, "secondaryText")}
              htmlFor="message"
            >
              Message
            </label>
            <Field
              className={styles.field}
              id="message"
              type="text"
              name="message"
              component={MessageBox}
            />
            <ErrorMessage
              className={css(styles.errorMessage, "primaryText")}
              name="message"
              component="div"
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              color={"secondary"}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
