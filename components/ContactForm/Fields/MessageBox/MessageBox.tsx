import { FormikValues } from "formik";

const MessageBox = ({
  field, // { name, value, onChange, onBlur }
  ...props
}: FormikValues) => <textarea {...field} {...props} />;

export default MessageBox;
